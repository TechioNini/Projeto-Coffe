// não esquecer de alterar para NOT NULL ok
// adicionar idade no cadastro ou data de nascimento ?
// adicionar uma primary key. 
// adicionar id de usuario auto increment depois de cada registro 


// cadastro dos usuarios
CREATE TABLE usuario (
    Nome VARCHAR (50),
    Sexo VARCHAR(15),
    CPF VARCHAR(11),
    Cep INT(8),
    Enderenço VARCHAR(45),
    Numero INT(4),
    Complemento VARCHAR(35),
    Bairro VARCHAR(30),
    Cidade VARCHAR(20),
    Estado VARCHAR(2),
    Telefone INT (11),
    Email VARCHAR(50)
);



INSERT INTO usuario(Nome, Sexo, CPF, Cep, Enderenço, Numero, Complemento, Bairro, Cidade, Estado, Telefone, Email) VALUES(
    "Rony","Masculino", 37383980292 , 06160190,"rua Gerson coutinho",20,"casa no fundo","Bandeiras","Osasco","SP",11985000650,"rony.fenrir@teste.com.br"
);

// realiza alteração no BD
ALTER TABLE usuario MODIFY
   Telefone VARCHAR(11) NOT NULL
;
// adicionar COLUMN
ALTER TABLE usuario ADD idade int(2);

//alterar a ordem da COLUMN
ALTER TABLE usuario
MODIFY COLUMN nome VARCHAR(50)
FIRST;

// mostrar a tabela 
SELECT * FROM usuarios;

SELECT * FROM usuario WHERE  a condição;
DELETE FROM TABELA WHERE a condição = registro ; // nunca usar delete from sem a condição declarada
UPDATE usuario SET tabela = condção WHERE condiçao ;


