UPDATE tb_aluno SET 
    matricula='12345678'
WHERE
    id='10';

-- NAO FAZER sem o WHERE (deleta tudo)
DELETE * FROM tb_aluno;

-- MODO CERTo com where
DELETE * FROM tb_aluno
WHERE id='8';

-- apontar para um elemento que seja UNICO (primary key ou cpf)

-- Ante de fazer um DELETE conferir o que vai deletar com um comando DELETE
SELECT * FROM tb_aluno WHERE matricula='12345678';


------------------- CRIAR NOVA TABELA ----------------------

CREATE TABLE tb_escola (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(100)
);

INSERT INTO tb_escola
    (nome, endereco)
VALUES 
    ('Digital College Aldeota', 'Av Santos Dumont, 1510 - Aldeota');

INSERT INTO tb_escola
    (nome, endereco)
VALUES 
    ('Digital College Sul', 'Av washington Soares, 100 - Cambeba');

INSERT INTO tb_escola
    (nome, endereco)
VALUES 
    ('Digital College Messejana', 'Av Leao Veloso, 520 - Messejana');


-- RELACIONAMENTO ENTRE TABELAS
SELECT 
    tb_aluno.nome as aluno,
    tb_escola.nome as escola
FROM 
    tb_aluno INNER JOIN tb_escola
ON
    tb_aluno.escola_id = tb_escola.id
LIMIT 10;

-- ACRESCENTAR UMA COLUNA EM UMA TABELA JA CRIADA --
ALTER TABLE tb_aluno
ADD COLUMN email varchar(100);

-- modificar um atributo da tabela
ALTER TABLE tb_aluno
MODIFY token VARCHAR(50) NULL;
