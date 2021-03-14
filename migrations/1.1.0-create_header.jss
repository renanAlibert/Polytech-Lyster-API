


    /** 
    * @swagger
    * components:
    *   schemas:
    *     Header:
    *       type: object
    *       required: 
    *       description: Header data on the trip like the localisation, the tags, the header cover.
    *       properties:            
    *         id:
    *           type: integer
    *           description: The auto-generated id of the trip.
    *         cover:
    *           type: string
    *           format: path
    *           description: Path to the cover picture.
    *         geographicCoordinate:
    *           type: string
    *           description: Geographic coordinate of the trip.
    *         tags:
    *           $ref: '#/components/schemas/Tags'
    *         createdAt:
    *           type: string
    *           format: date
    *           description: The date of the creation.
    *         publishedAt:
    *           type: string
    *           format: date
    *           description: The date of the publication.
    *       example:
    *         cover: 23349294538.jpg
    *         geographicCoordinate: 134.577°E,24.006°S
    *         tags: []
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