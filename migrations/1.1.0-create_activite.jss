


    /** 
    * @swagger
    * components:
    *   schemas:
    *     Tags:
    *       type: object
    *       required: 
    *       description: use for show infromation.
    *       properties:            
    *         id:
    *           type: integer
    *           description: The auto-generated id of the trip.
    *         title:
    *           type: string
    *           description: Title of activite.
    *         cover:
    *           type: string
    *           forma: path
    *           description: Cover of the ativite.
    *         type:
    *           type: string
    *           description: Type of the activite.
    *         coordinate:
    *           type: json
    *           description: Coordinate of the activite
    *         createdAt:
    *           type: string
    *           format: date
    *           description: The date of the creation.
    *         publishedAt:
    *           type: string
    *           format: date
    *           description: The date of the publication.
    *       example:
    *         title: Couple
    *         description: Voyage de couple
    *         icon: heart.svg
    *         color: #3294392
    *         createdAt: "2021-02-12T08:39:48.825Z"
    *         publishedAt: "2021-02-12T08:39:48.825Z"
    */