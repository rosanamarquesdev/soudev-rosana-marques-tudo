CREATE DATABASE db_digital_store;

USE db_digital_store;

CREATE TABLE tb_categoria (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30),
    status INT DEFAULT 1, -- gerar o status 1 automatico
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- gerar a data e hora automatico
    updated_at DATETIME NULL
);

-- modificar a coluna
-- ALTER  TABLE tb_categoria
-- MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

INSERT INTO tb_categoria (nome)
VALUES ("camisetas");

SELECT * FROM tb_categoria;