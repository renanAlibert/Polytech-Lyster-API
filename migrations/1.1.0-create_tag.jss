


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
    *           description: Title of tag.
    *         description:
    *           type: string
    *           description: Description of tag.
    *         icon:
    *           type: string
    *           format: path
    *           description: Path to the icon of the tag.
    *         color:
    *           type: string
    *           description: Color of the tag.
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