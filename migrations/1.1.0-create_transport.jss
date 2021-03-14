


    /** 
    * @swagger
    * components:
    *   schemas:
    *     Transport:
    *       type: object
    *       required: 
    *         - coordinate
    *       description: Transport and transport metadata.
    *       properties:            
    *         id:
    *           type: integer
    *           description: The auto-generated id of the trip.
    *         cover:
    *           type: array
    *           items:
    *             type: string
    *             format: path
    *             description: Multi path to the covers pictures.
    *         transportLocalisationAisleStart:
    *           type: string
    *           description: Short description of the housing.
    *         transportLocalisationAisleEnd:
    *           type: json
    *           description: Coordinate of the housing.
    *         transportLocalisationReturnStart:
    *           type: string
    *           description: Short description of the housing.
    *         transportLocalisationReturnEnd:
    *           type: json
    *           description: Coordinate of the housing.
    *         transportTimeAisleStart:
    *           type: string
    *           description: Short description of the housing.
    *         transportTimeAisleEnd:
    *           type: json
    *           description: Coordinate of the housing.
    *         transportTimeReturnStart:
    *           type: string
    *           description: Short description of the housing.
    *         transportTimeReturnEnd:
    *           type: json
    *           description: Coordinate of the housing.
    *         transportDateAisle:
    *           type: string
    *           description: Short description of the housing.
    *         transportDateReturn:
    *           type: json
    *           description: Coordinate of the housing.
    *         transportType:
    *           type: string
    *           description: Short description of the housing.
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
    *         intro: Passez du bon dans cette villa de 4 chambres soyez accueillli
    *         coordinate: {{Tel: 0607080910}, {Web: https://site.com}}
    *         tags: []
    *         createdAt: "2021-02-12T08:39:48.825Z"
    *         publishedAt: "2021-02-12T08:39:48.825Z"
    */