'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Redactors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Redactors');
  }
};

/** 
    * @swagger
    * components:
    *   schemas:
    *     Redactor:
    *       type: object
    *       required: 
    *         - firstname
    *       properties:
    *         id:
    *           type: integer
    *           description: The auto-generated id of the article.
    *         firstname:
    *           type: string
    *           description: The title of the article.
    *         lastname:
    *           type: string
    *           description: Short text placed under  the title.
    *         picture:
    *           type: string
    *           format: path
    *           description: Path to a profil image
    *         description:
    *           type: boolean
    *           description: Is this article published or not
    *         createdAt:
    *           type: string
    *           format: date
    *           description: The date of the creation.
    *         updatedAt:
    *           type: string
    *           format: date
    *           description: The date of the last update.
    *       example:
    *         firstname: Bob
    *         lastname: Robert
    *         picture: 2341353434.jpg
    *         description: Une personne rencontré par hasard
    *         createdAt: "2021-02-12T08:39:48.825Z"
    *         updatedAt: "2021-02-12T08:39:48.825Z"
    */