# Flask Backend Setup Guide for React Authentication
# Save this as app.py in your Flask project

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import bcrypt
import json
import os
from datetime import timedelta

app = Flask(__name__)

# Configuration
app.config['JWT_SECRET_KEY'] = 'your-jwt-secret-key-change-this'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)

# Initialize extensions
jwt = JWTManager(app)
CORS(app, origins=['http://localhost:5173'])  # React dev server URL

# Simple JSON file database (replace with actual database)
USERS_FILE = 'users.json'

def load_users():
    """Load users from JSON file"""
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'r') as f:
            return json.load(f)
    return {'users': []}

def save_users(users_data):
    """Save users to JSON file"""
    with open(USERS_FILE, 'w') as f:
        json.dump(users_data, f, indent=2)

def hash_password(password):
    """Hash password using bcrypt"""
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def check_password(password, hashed):
    """Check password against hash"""
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

# Routes

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['fullName', 'username', 'email', 'password']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'{field} is required'}), 400
        
        users_data = load_users()
        users = users_data['users']
        
        # Check if user already exists
        for user in users:
            if user['email'] == data['email']:
                return jsonify({'success': False, 'message': 'Email already exists'}), 400
            if user['username'] == data['username']:
                return jsonify({'success': False, 'message': 'Username already exists'}), 400
        
        # Create new user
        new_user = {
            'id': len(users) + 1,
            'fullName': data['fullName'],
            'username': data['username'],
            'email': data['email'],
            'password': hash_password(data['password'])
        }
        
        users.append(new_user)
        save_users(users_data)
        
        # Create JWT token
        token = create_access_token(identity=new_user['email'])
        
        # Return user data (without password)
        user_response = {
            'email': new_user['email'],
            'username': new_user['username'],
            'fullName': new_user['fullName']
        }
        
        return jsonify({
            'success': True,
            'user': user_response,
            'token': token
        }), 201
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            return jsonify({'success': False, 'message': 'Email and password required'}), 400
        
        users_data = load_users()
        users = users_data['users']
        
        # Find user
        user = None
        for u in users:
            if u['email'] == email:
                user = u
                break
        
        if not user or not check_password(password, user['password']):
            return jsonify({'success': False, 'message': 'Invalid email or password'}), 401
        
        # Create JWT token
        token = create_access_token(identity=user['email'])
        
        # Return user data (without password)
        user_response = {
            'email': user['email'],
            'username': user['username'],
            'fullName': user.get('fullName', user['username'])
        }
        
        return jsonify({
            'success': True,
            'user': user_response,
            'token': token
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/validate-user', methods=['POST'])
def validate_user():
    try:
        data = request.get_json()
        email = data.get('email')
        username = data.get('username')
        
        users_data = load_users()
        users = users_data['users']
        
        email_exists = any(user['email'] == email for user in users)
        username_exists = any(user['username'] == username for user in users)
        
        return jsonify({
            'emailExists': email_exists,
            'usernameExists': username_exists
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/forgot-password', methods=['POST'])
def forgot_password():
    try:
        data = request.get_json()
        email = data.get('email')
        
        if not email:
            return jsonify({'success': False, 'message': 'Email is required'}), 400
        
        # Here you would typically:
        # 1. Check if user exists
        # 2. Generate reset token
        # 3. Send email with reset link
        # 4. Store reset token in database
        
        # For now, just return success (for security, always return success)
        return jsonify({
            'success': True,
            'message': 'If an account with this email exists, you will receive a password reset link.'
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/logout', methods=['POST'])
@jwt_required()
def logout():
    try:
        # Here you could implement token blacklisting
        # For now, just return success (frontend will remove token)
        return jsonify({
            'success': True,
            'message': 'Successfully logged out'
        })
        
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({'logged_in_as': current_user})

if __name__ == '__main__':
    # Initialize users file with existing data if it doesn't exist
    if not os.path.exists(USERS_FILE):
        initial_data = {
            "users": [
                {
                    "id": 1,
                    "email": "john.doe@example.com",
                    "username": "johndoe",
                    "password": hash_password("password123"),
                    "fullName": "John Doe"
                },
                {
                    "id": 2,
                    "email": "jane.smith@example.com",
                    "username": "janesmith",
                    "password": hash_password("mypassword456"),
                    "fullName": "Jane Smith"
                }
            ]
        }
        save_users(initial_data)
    
    app.run(debug=True, port=5000)

# To run this Flask backend:
# 1. pip install flask flask-cors flask-jwt-extended bcrypt
# 2. python app.py
# 3. Server will run on http://localhost:5000
# 4. Update the BASE_URL in your React app's api.js file
