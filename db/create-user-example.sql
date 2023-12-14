CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `elysium_db`.* TO 'username'@'localhost';
FLUSH PRIVILEGES;