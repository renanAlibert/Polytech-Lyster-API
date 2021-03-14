'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      header: {
        type: Sequelize.JSON
      },
      housing: {
        type: Sequelize.JSON
      },
      transport: {
        type: Sequelize.JSON
      },
      activitiesList: {
        type: Sequelize.JSON
      },
      organization: {
        type: Sequelize.JSON
      },
      wishList: {
        type: Sequelize.JSON
      },
      tripLink: {
        type: Sequelize.STRING
      },
      previewLink: {
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
    return queryInterface.dropTable('Trips');
  }
};
    /** 
    * @swagger
    * components:
    *   schemas:
    *     Trips:
    *       type: object
    *       required: 
    *       properties:
    *         id:
    *           type: integer
    *           description: The auto-generated id of the trip.
    *         header:
    *           $ref: '#/components/schemas/Header'
    *         housing:
    *           $ref: '#/components/schemas/Housing'
    *         transport:
    *           $ref: '#/components/schemas/Transport'
    *         activitiesList:
    *           type: object
    *           description: All the activites linked with the trip.
    *         organization:
    *           type: object
    *           description: Trip activites with their constraints.
    *         wishList:
    *           type: object
    *           description: Liste of wish fund during the questionaire.
    *         tripLink:
    *           type: string
    *           description: Link use to acces to the trip.
    *         previewLink:
    *           type: string
    *           description: Link use to acces to the preview.
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




     /*     headerCover: {
        type: Sequelize.STRING
      },
      headerGeographicCoordinate: {
        type: Sequelize.STRING
      },
      headerTags: {
        type: Sequelize.JSON
      },
      headerLocalisation: {
        type: Sequelize.JSON
      },
      housingCovers: {
        type: Sequelize.STRING
      },
      housingCoordinate: {
        type: Sequelize.STRING
      },
      housingTags: {
        type: Sequelize.JSON
      },
      transportLocalisationAisleStart: {
        type: Sequelize.STRING
      },
      transportLocalisationAisleEnd: {
        type: Sequelize.STRING
      },
      transportLocalisationReturnStart: {
        type: Sequelize.STRING
      },
      transportLocalisationReturnEnd: {
        type: Sequelize.STRING
      },
      transportTimeAisleStart: {
        type: Sequelize.STRING
      },
      transportTimeAisleEnd: {
        type: Sequelize.STRING
      },
      transportTimeReturnStart: {
        type: Sequelize.STRING
      },
      transportTimeReturnEnd: {
        type: Sequelize.STRING
      },
      transportDateAisle: {
        type: Sequelize.STRING
      },
      transportDateReturn: {
        type: Sequelize.STRING
      },
      transportType: {
        type: Sequelize.STRING
      },
      activities: {
        type: Sequelize.JSON
      },
      organization: {
        type: Sequelize.JSON
      },
      wishList: {
        type: Sequelize.JSON
      },*/