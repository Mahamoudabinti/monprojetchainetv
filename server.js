const http = require("http");

const app = require("./app");

const server = http.createServer(app);


// Démarrer le serveur
const PORT = 3008;
server.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
