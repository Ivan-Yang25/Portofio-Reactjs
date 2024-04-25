CREATE TABLE login (

id          int(255) AUTO_INCREMENT NOT NULL,
nombre      varchar(255) NOT NULL,
apellido    varchar(255) NOT NULL,
email       varchar(255) NOT NULL,
password    varchar(255) NOT NULL,

CONSTRAINT pK_login PRIMARY KEY(id)
)ENGINE=InnoDb;


CREATE TABLE proyects (

id          int(255) AUTO_INCREMENT NOT NULL,
usuario_id  int(255) NOT NULL,
titulo      varchar(255) NOT NULL,
descripcion MEDIUMTEXT NOT NULL,
CONSTRAINT pk_proyects PRIMARY KEY(id),
CONSTRAINT fk_usuario_proyects FOREIGN KEY(usuario_id) REFERENCES login(id)
)ENGINE=InnoDb;
