INSERT INTO tb_curso 
    (nome, carga_horaria, descricao)
VALUES
    ('FullStack', '192', 'Curso de Desenvolvimento Web com JS');

INSERT INTO tb_curso 
    (nome, carga_horaria, descricao)
VALUES
    ('Front', '100', 'HTML, CSS, JavaScript');

INSERT INTO tb_curso 
    (nome, carga_horaria, descricao)
VALUES
    ('BackEnd', '120', 'Curso de Node JS');


-- É A MESMA COISA ESCRITA DIFERENTE MAS NAO É MUITO USADO --
-- INSERT INTO tb_curso 
--     (nome, carga_horaria, descricao)
-- VALUES
--     ('FullStack', '192', 'Curso de Desenvolvimento Web com JS');
--     ('Front', '100', 'HTML, CSS, JavaScript');
--     ('BackEnd', '120', 'Curso de Node JS');

-- TABELA DE DISCIPLINA --
CREATE TABLE tb_disciplina (
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (30) NOT NULL,
    carga_horaria INT (4) NOT NULL,
    descricao VARCHAR (255)
);

-- TABELA DE ALUNO --
CREATE TABLE tb_aluno (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    cpf CHAR (14),
    matricula CHAR (10),
    cartao_acesso CHAR (12),
    cartao_versao INT,
    data_alteracao VARCHAR (30)
);

-- ALTERAR --
ALTER TABLE tb_aluno
ADD COLUMN escola_id INT;


