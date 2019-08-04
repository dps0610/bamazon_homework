DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
id INTEGER(11) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(60) NOT NULL,
price NUMERIC(10) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cookies", "grocery", 3.99, 50), ("keyboard", "electronics", 79.99, 10), ("laptop", "electronics", 899.99, 5), ("Crunch", "grocery", 1.29, 100),
("headset", "electronics", 59.99, 15), ("pillow", "homegoods", 8.99, 20), ("tylenol", "pharmacy", 7.99, 25),
("couch", "homegoods", 599.99, 3), ("tv", "electronics", 799.99, 15), ("chips", "grocery", 3.99, 20);

