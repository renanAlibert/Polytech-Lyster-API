//Import du module
const express = require('express');

//Module NodeJs (middleware) qui permet de parser nos requetes
const bodyParser = require('body-parser');
// Initialisation du module
let app = express();
let messages = [];
let tuples = [];

//middleware pour parser les requetes
app.use('/message', bodyParser.urlencoded({extended: true}));

app.use('/tuples', bodyParser.urlencoded({extended: true}));

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
    let {username, message } = req.query;
    
    //Ajout du message dans la liste des messages
    messages.push({username, message});
    //confirmation d'ajout
    res.send("testMessage");
});

// liste des Messages - GET Routing -
app.get('/message', (req, res) => {
    //Renvoyer la liste de tous les messages
    res.json(messages);
});



// Send Message - POST Routing -
app.post('/tuples', (req, res) => {
    //recuperation du username et du message envoyé au serveur
    let {val1, val2 } = req.query;
    
    //Ajout du message dans la liste des messages
    tuples.push({val1, val2});
    //confirmation d'ajout
    res.send("ajoute");
});

// liste des Messages - GET Routing -
app.get('/tuples', (req, res) => {
    //Renvoyer la liste de tous les messages
    res.json(tuples);
});


// liste des Messages - GET Routing -
app.get('/somme', (req, res) => {
    //Renvoyer la liste de tous les messages
    let somme = 0;
    tuples.forEach(element => somme += parseInt(element.val1,10) + parseInt(element.val2,10));
    res.json(somme);
});



// Ecoute sur le port 1234
app.listen(1234);