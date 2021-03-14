


    /** 
    * @swagger
    * components:
    *   schemas:
    *     Housing:
    *       type: object
    *       required: 
    *         - coordinate
    *       description: Housing data on the trip.
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
    *         intro:
    *           type: string
    *           description: Short description of the housing.
    *         coordinate:
    *           type: json
    *           description: Coordinate of the housing.
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
    *         intro: Passez du bon dans cette villa de 4 chambres soyez accueillli
    *         coordinate: {{Tel: 0607080910}, {Web: https://site.com}}
    *         tags: []
    *         createdAt: "2021-02-12T08:39:48.825Z"
    *         publishedAt: "2021-02-12T08:39:48.825Z"
    */