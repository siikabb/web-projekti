
DROP DATABASE IF EXISTS elysium_db;
CREATE DATABASE elysium_db;
USE elysium_db;

CREATE TABLE Users (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    user_level INT NOT NULL DEFAULT 0
);

CREATE TABLE Products (
    product_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description VARCHAR(255),
    type INT NOT NULL DEFAULT 0
    diets VARCHAR(255)
);

CREATE TABLE Orders (
    order_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    order_status INT NOT NULL DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Cart (
    cart_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- INSERT INTO Users (email, password, user_level) VALUES ('test@metropolia.fi', 'test', 1);
-- INSERT INTO Users (email, password, user_level) VALUES ('anothertest@gmail.com', 'test', 0);
-- INSERT INTO Users (email, password, user_level) VALUES ('abc@aa.de', 'test', 0);
-- INSERT INTO Products (name, price, description, image_url) VALUES ('Steak', 10.00, 'This is a test steak', 'https://via.placeholder.com/150');
-- INSERT INTO Products (name, price, description, image_url) VALUES ('Chicken', 5.00, 'This is a test chicken', 'https://via.placeholder.com/150');
-- INSERT INTO Products (name, price, description, image_url) VALUES ('Soup', 3.00, 'This is a test soup', 'https://via.placeholder.com/150');
-- INSERT INTO Orders (user_id, product_id, order_status) VALUES (1, 1, 1);
-- INSERT INTO Orders (user_id, product_id, order_status) VALUES (1, 2, 0);