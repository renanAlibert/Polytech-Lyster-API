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
app.get('/clear', (req, res) => {
    tuples = [];
    res.end('tableau de tuples nettoyé');
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
    
    let {val1, val2 } = req.query; //Couple de valeurs
    let sentMessage = 1; //Gestion du message a envoyer à l'issue du traitement du couple d'entier (Pour savoir si on doit l'ajouter dans la liste ou non, selon les dernieres specs).

    if ((Math.sign(val1) == 1 || Math.sign(val1) == 0) && (Math.sign(val2) == 1 || Math.sign(val2) == 0)) {
        //Ajout du message dans la liste des messages
        if (tuples.length < 10)
        {
            if (parseInt(val1,10) + parseInt(val2,10) <= 10)
            {
                tuples.push({val1, val2});
            }
            else
            {
                sentMessage = 0;
            }
        }
        else
        {
            sentMessage = 0;
        }
    }
    else
    {
        sentMessage = 0;
    }

    if (sentMessage == 1)
    {
        //confirmation d'ajout
        res.send("ajoute");
    }
    else
    {
        //message d'erreur
        res.send("erreur à l'ajout");
    }
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
    let strike = 0; // Condition de strike
    let spare = 0; // Condition de spare

    for (var i = 0; i < tuples.length; i++) {

        var val1 = parseInt(tuples[i].val1,10); // récupération de la première valeur du couple d'entier
        var val2 = parseInt(tuples[i].val2,10); // récupération de la seconde valeur du couple d'entier


        if (i != (tuples.length -1)) // Les strikes et spares ne peuvent pas influer un potentiel "coup suivant" si ils sont faits au dernier coup
        {   
            if (val1 == 10) { // Strike

                strike = 1; 
            
            } else if ((val1 + val2) == 10) { //Spare
            
                spare = 1;
            
            }

            if (strike == 1)
            { // Gestion du score avec un Strike
                somme += parseInt(tuples[i+1].val1,10) + parseInt(tuples[i+1].val2,10);
                strike = 0; // Remise a zéro du booléen de gestion du Strike pour les prochains coups

            } else if (spare == 1)
            { // Gestion du score avec un Spare
                somme += parseInt(tuples[i+1].val1,10);
                spare = 0; // Remise a zéro du booléen de gestion du Spare pour les prochains coups
            }
        }

        somme += val1 + val2; // Gestion du score de manière générale
    }
    res.json(somme);
});


// Ecoute sur le port 1234
app.listen(1234);