const express = require('express');
const article = require('./routes/article');
const redactor = require('./routes/redactor');
const router = express.Router();

module.exports = () => {
    
    router.use('/article',article());
    router.use('/redactor',redactor());
    
    return router;
};