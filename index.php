<?php
session_start();
require_once 'config.php';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Переходник на форум</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #1a1a1a; color: white; min-height: 100vh; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; text-align: center; }
        .header { padding: 40px 0; }
        .logo { font-size: 48px; font-weight: bold; color: #4CAF50; margin-bottom: 20px; }
        .main-btn { display: inline-block; background: #4CAF50; color: white; padding: 20px 40px; font-size: 24px; text-decoration: none; border-radius: 10px; margin: 20px; transition: background 0.3s; }
        .main-btn:hover { background: #45a049; }
        .auth-links { margin: 30px 0; }
        .auth-links a { color: #4CAF50; text-decoration: none; margin: 0 15px; font-size: 18px; }
        .forum-redirect { background: #2a2a2a; padding: 30px; border-radius: 10px; margin: 40px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">ФОРУМ</div>
            <h1>Добро пожаловать</h1>
            <p>Переходник на основной форум</p>
        </div>

        <div class="auth-links">
            <?php if(isset($_SESSION['user_id'])): ?>
                <span>Привет, <?php echo htmlspecialchars($_SESSION['username']); ?>!</span>
                <a href="logout.php">Выйти</a>
            <?php else: ?>
                <a href="login.php">Войти</a>
                <a href="register.php">Регистрация</a>
            <?php endif; ?>
        </div>

        <div class="forum-redirect">
            <h2>Основной форум</h2>
            <a href="http://wh27281.web2.maze-tech.ru/index.php" class="main-btn">Перейти на форум</a>
        </div>
    </div>
</body>
</html>
