CREATE TABLE tb_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (50) NOT NULL,
    senha VARCHAR (20),
    token VARCHAR(50) NULL,
    email VARCHAR(100)
);

ALTER TABLE tb_users
MODIFY COLUMN senha VARCHAR(255);

