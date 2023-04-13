-- para listar os bancos de dados
SHOW DATABASES;

-- criando um banco de dados
CREATE DATABASE db_sou_dev_mulheres_rosana;

-- para excluir um banco de dados
DROP DATABASE nome_do_banco;

-- para selecionar/entrar no banco de dados 
USE nome_do_banco;

-- TABELAS --

-- MOSTRAR TODAS AS TABELAS DO BANCO --
SHOW TABLES

-- CRIAR UMA TABELA
CREATE TABLE tb_curso (
    id INT (20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    carga_horaria INT(4) NOT NULL,
    descricao VARCHAR(255)
);

-- DETALHAR A ESTRUTURA DE UMA TABELA --
DESC nome_da_tabela

-- ALTERAR A TABELA --
ALTER TABLE nome_da_tabela

-- EXCLUIR UMA TABELA --
DROP TABLE nome_da_tabela

-- ALTERAR --
ALTER TABLE tb_aluno
ADD COLUMN escola_id INT;

-- RENOMEAR COLUNA --
ALTER TABLE tb_aluno
RENAME COLUMN cartao_versao TO cartao_acesso_versao;

-- INSTALAR UMA TABELA DE FORA ( o arquivo ta no disco C - solto la na pasta --
SOURCE C:\\tb_aluno_dados.sql;





-- BUSCAR DADOS DE UMA TABELA (* significa: para todos) --
SELECT * FROM tb_curso

-- SELECIONAR APENAS ALGUMAS COLUNAS DE TODAS AS LINHAS --
SELECT nome, carga_horaria FROM tb_curso;

-- SELECIONAR TODAS AS COLUNAS APENAS DE ALGUMAS LINHAS (FILTRAR) --
SELECT * FROM tb_curso WHERE carga_horaria > 100;

-- PARA SELECIONAR UM NUMERO X DE LINHAS --
SELECT * FROM tb_curso LIMIT 4;

-- PARA CONTAR O NUMERO DE LINHAS DE UMA TABELA --
SELECT COUNT(*) FROM tb_curso;

-- INSERIR DADOS EM UMA TABELA --
INSERT INTO tb_curso
        (nome, carga_horaria, descricao)
VALUES
        ('valor 1', 'valor 2', 'valor 3');

-- EDITAR OS DADOS DE UMA TABELA --
UPDATE tb_curso SET 
coluna1='valor1';

-- EXCLUIR DADOS DE UMA TABELA --
DELETE FROM tb_curso

