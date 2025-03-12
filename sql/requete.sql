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

-- insérer des membres dans la table equipe
INSERT INTO equipe(id, nom, prenom, poste)
VALUES
(1, "jasmine", "binti","directrice générale"),
(2, "soulaimana", "Soumaya", "chef d'émission"),
(3, "benli", "Samir","programmeur d'émission"),
(4, "soulaimana", "samnoune", "ingénieur son"),
(5, "saltnoune", "Tatiana", "réalisateur"),
(6, "mahamouda", "Houssam", "camera men"),
(7, "mahamouda", "Inchati", "camera men");


--  inserer des programmes dans la table programmediffusion

INSERT INTO programmediffusion(id, titre, description, date_diffusion)VALUES
(1, "deba", " déba est une forme musicale pratiquée par les communautés malgaches. 
Il est lié à des cérémonies culturelles et des célébrations. Accompagné d'instruments comme des tambours. 
 C'est un moyen de transmettre des valeurs culturelles", "2025-03-28 20:00:00"),

 (2, "moulidi", "Le Moulidi à Mayotte célèbre la naissance du prophète Mouhammad. 
 C'est une fête importante pour la communauté musulmane, 
 marquée par des prières, des chants religieux et des récitations du Coran.", "2025-02-13 20:35:00"),

  (3, "dahira", "La dahira à Mayotte est une association communautaire qui se concentre 
  sur des valeurs religieuses,culturelles ou sociales.
    Elle organise des activités comme des cours de Coran, 
    des conférences et des événements culturels.", "2025-01-03 21:30:00"),

  (4, "maoulida sheingue", "Le Maoulida Sheingue à Mayotte célèbre la naissance du prophète Mouhammad. 
  C'est une fête marquée par des chants, des prières et des récitations du Coran.
   Les gens se rassemblent pour partager des repas et célébrer ensemble.", "2025-07-09 21:50:00"),

   (5, "m'biwi", 
   "Elles expriment des émotions comme l'amour et la joie, 
    Les paroles, en shimaore,
    racontent des histoires de la vie quotidienne et des traditions.
     Accompagnées de rythmes entraînants et de danses.", "2025-04-01 22:39:00");

-- afficher les tables du programmediffsion.
     SELECT * FROM programmediffusion;