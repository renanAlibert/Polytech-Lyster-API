const routes       = require('../api');
const express      = require('express');
const router       = express.Router();
const bodyParser   = require('body-parser');
var config         = require(__dirname + '/../config/config.js');

module.exports = (app) => {

    //Cors
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); 
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });

    if(process.env.NODE_ENV !== 'production'){
      const swaggerJsDoc = require('swagger-jsdoc');
      const swaggerUi    = require('swagger-ui-express');
      //Doc API
      const swaggerOptions = {
        swaggerDefinition: {
          openapi: "3.0.0",
          servers: {
            description: {
              name: "localhost",
              url: "http://localhost:3000/api"
            }
          },
          info: {
            title: "Lyster API",
            version: config.apiVersion ,
            description: "Api pour le site Lyster.fr",
            contact: {
              name: "Alibert",
              surname: "Renan"
            },
          },
          
        },
          // ['.routes/*.js']
          apis: ['api/routes/*.js', 'loaders/express.js', 'migrations/*.js']
      };
      const swaggerDocs = swaggerJsDoc(swaggerOptions);
      app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    }
    
    app.get('/status', (req, res) => {
      res.status(200).end();
    });
  
    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());
    // Load API routes
    app.use('/api', routes());
};