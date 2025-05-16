<?php
session_start();

// Database configuration
$host = "localhost";
$dbname = "users_db";
$username = "root";
$password = "";

// Connect to database
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Function to register a new user
function registerUser($email, $password, $conn) {
    // Sanitize email
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ["success" => false, "message" => "Invalid email format"];
    }
    
    // Check if user already exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(":email", $email);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        return ["success" => false, "message" => "User with this email already exists"];
    }
    
    // Hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":password", $hashedPassword);
    
    try {
        $stmt->execute();
        return ["success" => true, "message" => "Registration successful"];
    } catch(PDOException $e) {
        return ["success" => false, "message" => "Registration failed: " . $e->getMessage()];
    }
}

// Function to sign in a user
function loginUser($email, $password, $conn) {
    // Sanitize email
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    
    // Retrieve user from database
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(":email", $email);
    $stmt->execute();
    
    if ($stmt->rowCount() == 0) {
        return ["success" => false, "message" => "User not found"];
    }
    
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Verify password
    if (password_verify($password, $user['password'])) {
        // Password is correct, create session
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $user['email'];
        return ["success" => true, "message" => "Login successful"];
    } else {
        return ["success" => false, "message" => "Invalid password"];
    }
}

// Process form submission
$message = "";
$formType = isset($_GET['action']) ? $_GET['action'] : 'login';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if ($email && $password) {
        if (isset($_POST['register'])) {
            $result = registerUser($email, $password, $conn);
            $message = $result['message'];
            if ($result['success']) {
                $formType = 'login';
            }
        } else if (isset($_POST['login'])) {
            $result = loginUser($email, $password, $conn);
            $message = $result['message'];
            if ($result['success']) {
                header("Location: welcome.php");
                exit;
            }
        }
    } else {
        $message = "Please fill in all fields";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Authentication</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-container {
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .message {
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 4px;
            color: #721c24;
            background-color: #f8d7da;
        }
        .success {
            color: #155724;
            background-color: #d4edda;
        }
        .form-group {
            margin-bottom: 15px;
        }
        input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            box-sizing: border-box;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>User Authentication</h1>
    
    <?php if (!empty($message)): ?>
        <div class="message <?php echo (strpos($message, 'successful') !== false) ? 'success' : ''; ?>">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>

    <?php if ($formType == 'login'): ?>
        <h2>Login</h2>
        <div class="form-container">
            <form method="post">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" name="login">Login</button>
            </form>
            <p>Don't have an account? <a href="?action=register">Register</a></p>
        </div>
    <?php else: ?>
        <h2>Register</h2>
        <div class="form-container">
            <form method="post">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" name="register">Register</button>
            </form>
            <p>Already have an account? <a href="?action=login">Login</a></p>
        </div>
    <?php endif; ?>
</body>
</html>