// API utility functions for Flask backend integration
// Update BASE_URL when Flask server is running

const BASE_URL = 'http://localhost:5000'; // Flask default port

// API endpoints configuration
export const API_ENDPOINTS = {
    LOGIN: '/api/login',
    REGISTER: '/api/register',
    FORGOT_PASSWORD: '/api/forgot-password',
    VALIDATE_USER: '/api/validate-user',
    LOGOUT: '/api/logout',
    REFRESH_TOKEN: '/api/refresh-token'
};

// API utility functions
export const apiCall = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
        defaultOptions.headers['Authorization'] = `Bearer ${token}`;
    }

    const config = { ...defaultOptions, ...options };

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }

        return { success: true, data };
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: error.message };
    }
};

// Specific API functions for Flask integration
export const authAPI = {
    // Login user
    login: async (email, password) => {
        return apiCall(API_ENDPOINTS.LOGIN, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    },

    // Register new user
    register: async (userData) => {
        return apiCall(API_ENDPOINTS.REGISTER, {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    },

    // Request password reset
    forgotPassword: async (email) => {
        return apiCall(API_ENDPOINTS.FORGOT_PASSWORD, {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    },

    // Validate username/email availability
    validateUser: async (email, username) => {
        return apiCall(API_ENDPOINTS.VALIDATE_USER, {
            method: 'POST',
            body: JSON.stringify({ email, username })
        });
    },

    // Logout user
    logout: async () => {
        return apiCall(API_ENDPOINTS.LOGOUT, {
            method: 'POST'
        });
    }
};

// Flask Backend Requirements and Setup Guide
/*
FLASK BACKEND REQUIREMENTS:

1. Install Flask and dependencies:
   pip install flask flask-cors flask-jwt-extended bcrypt

2. Required Flask routes to implement:

   POST /api/register
   - Body: { fullName, username, email, password }
   - Response: { success: true, user: {...}, token: "jwt_token" }

   POST /api/login
   - Body: { email, password }
   - Response: { success: true, user: {...}, token: "jwt_token" }

   POST /api/forgot-password
   - Body: { email }
   - Response: { success: true, message: "Reset email sent" }

   POST /api/validate-user
   - Body: { email, username }
   - Response: { emailExists: boolean, usernameExists: boolean }

   POST /api/logout
   - Headers: Authorization: Bearer <token>
   - Response: { success: true, message: "Logged out" }

3. Database schema (SQLAlchemy example):
   class User(db.Model):
       id = db.Column(db.Integer, primary_key=True)
       full_name = db.Column(db.String(100), nullable=False)
       username = db.Column(db.String(50), unique=True, nullable=False)
       email = db.Column(db.String(100), unique=True, nullable=False)
       password_hash = db.Column(db.String(255), nullable=False)
       created_at = db.Column(db.DateTime, default=datetime.utcnow)

4. Enable CORS for React frontend:
   from flask_cors import CORS
   CORS(app, origins=['http://localhost:5173'])  # Vite dev server

5. JWT token configuration:
   app.config['JWT_SECRET_KEY'] = 'your-secret-key'
   jwt = JWTManager(app)
*/
