//Import du module
const express = require('express');

//Module NodeJs (middleware) qui permet de parser nos requetes
const bodyParser = require('body-parser');
// Initialisation du module
let app = express();
let messages = [];

//middleware pour parser les requetes
app.use('/message', bodyParser.urlencoded({extended: true}));

//Homapage - GET Routing -
app.get('/', (req, res) => {
    res.end('HomePage');
});
app.get('/add', (req, res) => {
    res.end('add');
});

// Send Message - POST Routing -
app.post('/message', (req, res) => {
    //recuperation du username et du message envoyé au serveur
    let {username, message } = req.body;
    console.dir(req.body);
    //Ajout du message dans la liste des messages
    messages.push({username, message});
    //confirmation d'ajout
    res.send(req.body);
});
// liste des Messages - GET Routing -
app.get('/message', (req, res) => {
    //Renvoyer la liste de tous les messages
    res.json(messages);
});
// Ecoute sur le port 1234
app.listen(1234);