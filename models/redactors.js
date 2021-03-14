'use strict';
module.exports = (sequelize, DataTypes) => {
  var Redactors = sequelize.define('Redactors', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    //picture: DataTypes.STRING,
    //description: DataTypes.STRING,
  });

  Redactors.associate = function(models) {
    models.Redactors.belongsToMany(models.Articles, { through: 'articles_redactors' })
  };

  return Redactors;
};