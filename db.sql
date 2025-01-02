-- created data base
CREATE DATABASE catalog;

-- Use data base
USE catalog;

-- created table products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    size VARCHAR(50)
);

-- created table suggest
CREATE TABLE suggest (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    id_suggest INT NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id),
    FOREIGN KEY (id_suggest) REFERENCES products(id)
);
