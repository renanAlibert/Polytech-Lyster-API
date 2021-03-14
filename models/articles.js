'use strict';
module.exports = (sequelize, DataTypes) => {
  var Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    chapo: DataTypes.STRING,
  });

  Articles.associate = function(models) {
    models.Articles.belongsToMany(models.Redactors, { through: 'articles_redactors' })
  };

  return Articles;
};