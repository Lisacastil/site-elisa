create database folheando;

use folheando;

create table usuario (
	id_usuario int primary key auto_increment,
    nome varchar(85),
    email varchar(45),
    senha varchar(8)); 
    
CREATE TABLE livro (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    titulo VARCHAR(150),
    autor VARCHAR(150),
    genero VARCHAR(60),
    comentario VARCHAR(3000),
    nota INT,
    data_registro DATE,
    FOREIGN KEY (fk_usuario)
        REFERENCES usuario (id_usuario)
);
    
    alter table usuario add data_nascimento date after email;
    
    ALTER TABLE livro
       CHANGE nota avaliacao int;
       
       select * from usuario
join livro on (usuario.id_usuario = livro.fk_usuario)
where id_usuario = 2;

SELECT count(distinct titulo) as total from livro;

SELECT avg(avaliacao) as media from livro;

SELECT genero, count(titulo) from livro group by genero order by count(titulo) desc;


    
    select * from usuario;
    
    select * from livro;
    
    desc usuario;