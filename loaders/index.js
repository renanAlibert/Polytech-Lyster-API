const expressLoader = require('./express');

module.exports = async (app) => {
  
    await expressLoader(app);
    console.log('✌️ Express loaded on '+process.env.NODE_ENV);
  };