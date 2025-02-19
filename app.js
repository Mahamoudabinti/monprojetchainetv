//la variable expresse vas stocker la librairie express
const express = require("express");

const app = express();
// Configuration du moteur de vue
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware pour servir des fichiers statiques
app.use(express.static('public'));

// creée une route 
app.get("/accueil", (req, res) => {
    res.render("accueil"); // Rendre la page à accueil
});
app.get('/apropos', (req, res) => {
    res.render('apropos'); // Rendre la page à apropos
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