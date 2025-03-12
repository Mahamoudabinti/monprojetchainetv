//la variable expresse vas stocker la librairie express
const express = require("express");

// la variable mysql vas stocker la librairie mysql
const mysql = require('mysql2');
//la variable express-myconnection permet de se connecter dans mysql.
const myConnection = require('express-myconnection');


const database = require("mime-db");
const connection = require("express-myconnection");

const app = express();
// Configuration du moteur de vue
app.set("view engine", "ejs");
app.set("views", "./views");


//------PREPARATION A LA CONNECTION A LA BASE DE DONNEEs.
//je configure les paramètres de connection à MysQL Server
const optionConnection = {
    host:"localhost", //le host, c'est l'endroit ou ma base de donnée
    user:"root",
    password:"Jasmine.28",
    database:"chainetv",
    port:3306
};

//on utilise la librairie myconnection pour pouvoir recuperer dans mysql,optionconnection et pool.
app.use(myConnection(mysql, optionConnection, "pool"));

//-------FIN DE LA CONNECTION A LA BASE DE DONNEES.

// Middleware pour servir des fichiers statiques
app.use(express.static('public'));

//  Cette ligne définit une route HTTP GET pour le chemin "/accueil". 
// Lorsque cette route est accédée, la fonction qui suit est exécutée.
app.get("/accueil", (req, res) => {
    res.render("accueil"); // Rendre la page à accueil
});
app.get('/apropos', (req, res) => {
    req.getConnection((erreur, connection)=>{ //Ici, on demande une connexion à la base de données. 
    // La fonction prend deux arguments : une erreur potentielle et la connexion à la base de données.

        if (erreur){
            console.log(erreur); 
        }else {
            connection.query("SELECT * FROM equipe", [], (err, equipe) => {
                if(err) {
                    console.log(err);
                } else {
                    res.render('apropos', {equipe}); // Rendre la page à apropos
                    

                }
            })
        }
    })
   
});
app.get('/navbar', (req, res) => {

    res.render('navbar'); // Rendre la page à navbar
});
app.get('/programmeTv', (req, res) => {
    res.render('programmeTv'); // Rendre la page des programmes TV
});

app.get('/formulaireProgrammeTv', (req, res) => {
    res.render('formulaireProgrammeTv'); // Rendre le formulaire des programmes TV
});


//exporter app
module.exports = app;