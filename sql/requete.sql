create DATABASE chainetv
use chainetv;


create Table equipe (
    id Int AUTO_INCREMENT primary key,
    nom Varchar (120) not null,
    prenom Varchar(120) not null,
    ville Varchar(100),
    poste Varchar(100) not null
);

Create Table programmediffusion (
    id Int AUTO_INCREMENT primary key,
    titre Varchar(155) not null, 
    description varchar(255),
    date_diffusion Datetime not null
);
