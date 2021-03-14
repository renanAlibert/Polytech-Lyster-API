'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      chapo: {
        type: Sequelize.STRING
      },
      cover: {
        type: Sequelize.STRING
      },
      published: {
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
    return queryInterface.dropTable('Articles');
  }
};

    /** 
    * @swagger
    * components:
    *   schemas:
    *     Article:
    *       type: object
    *       required: 
    *         - title
    *       properties:
    *         id:
    *           type: integer
    *           description: The auto-generated id of the article.
    *         title:
    *           type: string
    *           description: The title of the article.
    *         chapo:
    *           type: string
    *           description: Short text placed under  the title.
    *         cover:
    *           type: string
    *           format: path
    *           description: Path to an cover image
    *         published:
    *           type: boolean
    *           description: Is this article published or not
    *         createdAt:
    *           type: string
    *           format: date
    *           description: The date of the creation.
    *         publishedAt:
    *           type: string
    *           format: date
    *           description: The date of the publication.
    *       example:
    *         title: Spot de surf a ne pas manqué
    *         chapo: Mer, vages et soleil, les coins a ne pas manquer
    *         cover: 23349294538.jpg
    *         published: true
    *         createdAt: "2021-02-12T08:39:48.825Z"
    *         publishedAt: "2021-02-12T08:39:48.825Z"
    */