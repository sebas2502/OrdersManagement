CREATE DATABASE ordermanagement;

USE ordermanagement;

CREATE TABLE customers(
	id_customer INT PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(80) NOT NULL,
    dni INT NOT NULL UNIQUE,
    names VARCHAR(100) NOT NULL,
    address VARCHAR(150),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(11) NOT NULL
);

CREATE TABLE sellers(
	id_seller INT PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(80) NOT NULL,
    dni INT NOT NULL UNIQUE,
    names VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
  );
  
 CREATE TABLE orders(
	id_order INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    id_customer INT NOT NULL,
    id_seller INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state ENUM('confirmed','canceled'),
	FOREIGN KEY(id_customer) REFERENCES customers(id_customer),
	FOREIGN KEY(id_seller) REFERENCES sellers(id_seller)    
 ); 


-- Insert customers --
INSERT INTO customers(lastname,dni,names,address,email,phone)
VALUES('Contreras',40263304,'Ricardo Sebastian','Chile 253','ricardo250297@gmail.com','3777-539411');

INSERT INTO customers(lastname,dni,names,address,email,phone)
VALUES('Gomez',40261204,'Marina','Peru 2223','mari@gmail.com','3777-119411');

INSERT INTO customers(lastname,dni,names,address,email,phone)
VALUES('Garcia',33363304,'Julio Luis','Catamarca 1253','jr21@gmail.com','3777-454545');

INSERT INTO customers(lastname,dni,names,address,email,phone)
VALUES('Martinez',11263304,'Laura Jazmin','Corrientes 2112','laujaz@gmail.com','011-112311');

-- Insert sellers --
INSERT INTO sellers(lastname,dni,names,email)
VALUES('Rodriguez',25258855,'Joel','joel@gmail.com');

INSERT INTO sellers(lastname,dni,names,email)
VALUES('Gauna',15258811,'Julian','gauju@gmail.com');



-- INSERT ORDERS --
INSERT INTO ORDERS(description,id_customer,id_seller,state)
VALUES('Electrodomesticos',1,1,'confirmed');

INSERT INTO ORDERS(description,id_customer,id_seller,state)
VALUES('Herramientas de carpinteria',1,1,'confirmed');

INSERT INTO ORDERS(description,id_customer,id_seller,state)
VALUES('Herramientas de construccion',2,1,'confirmed');

INSERT INTO ORDERS(description,id_customer,id_seller,state)
VALUES('Repuestos de autos',3,2,'confirmed');

INSERT INTO ORDERS(description,id_customer,id_seller,state)
VALUES('Repuestos de cocina',3,2,'confirmed');


SELECT * FROM orders;
SELECT * FROM customers;
SELECT * FROM sellers;


