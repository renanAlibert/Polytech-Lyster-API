const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => { 

    router.get('/', (req, res) => {
        models.Articles.findAll({ include: models.Redactors }).then((articles) => {
           // if(!req.params){
              res.send(articles);
           // }
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    });

    router.get('/:id', (req, res) => {
        models.Articles.findByPk(req.params.id).then((article) => {
            article ? res.status(200).send(article) : res.sendStatus(405);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
    });

    router.post('/', (req, res) => {
        models.Articles.create(req.body)
        .then(result => {
            res.sendStatus(201);
        })
        .catch((error) => {
            error.parent.code==="SQLITE_CONSTRAINT" ? res.sendStatus(405) : res.sendStatus(500);
        });
    });

    router.put('/:id', (req, res) => {
        //delete req.body.title;
        models.Articles.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            result[0] ? res.sendStatus(201) : res.sendStatus(405);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
    });

    router.delete('/:id', (req, res) => {
        models.Articles.destroy({
            where: {
                id: req.params.id
            }
        }).then((article) => {
            console.log("then")
            console.log(article)
            article ? res.sendStatus(204) : res.sendStatus(405);
        }).catch((error) => {
            console.log("error")
            console.log(error)
            res.sendStatus(500);
        });
    });

    router.put('/:id/redactor', (req, res) => {
        models.Articles.findByPk(req.params.id).then(article => {
            article.addRedactors(req.body.id)
            .then(result => {
                res.sendStatus(201);
            })
            .catch((error) => {
                error.parent.code==="SQLITE_CONSTRAINT" ? res.sendStatus(405) : res.sendStatus(500);
            });
            article.save();
        })
    });

    router.delete('/:id/redactor', (req, res) => {
        models.Redactors.findByPk(req.body.id).then(redactor => {
            redactor.removeArticles(req.params.id)
            .then(result => {
                result ? res.sendStatus(204) : res.sendStatus(405);
            })
            .catch((error) => {
                res.sendStatus(500);
            });
            redactor.save();
        })
    });

    return router;
};


    /**
    * @swagger
    * paths:
    * 
    *   /article:
    *     get:
    *       tags:
    *         - articles
    *       summary: Find all articles with an optional filter
    *       operationId: searchInAll
    *       description: Find all articles with an optional filter. Use it with no filter for get all articles.
    *       parameters:
    *         - in: query
    *           name: offset
    *           schema:
    *             type: integer
    *           description: The number of items to skip before starting to collect the result set
    * 
    *         - in: query
    *           name: limit
    *           schema:
    *             type: integer
    *           description: The numbers of items to return
    * 
    *         - in: query
    *           name: id
    *           schema:
    *             example:
    *               '+10'
    *             type: filterInt
    *           description: Filter param acting on ID
    * 
    *         - in: query
    *           name: title
    *           schema:
    *             example:
    *               'Surf'
    *             type: filterString
    *           description: Filter param acting on title
    * 
    *     #    - in: query
    *     #      name: chapo
    *     #      schema:
    *     #        example:
    *     #          'St Mich*'
    *     #        type: filterString
    *     #      description: Filter param acting on chapo
    * 
    *     #    - in: query
    *     #      name: cover
    *     #      schema:
    *     #        example:
    *     #          '21139472.*'
    *     #        type: filterString
    *     #      description: Filter param acting on cover
    * 
    *     #    - in: query
    *     #      name: published
    *     #      schema:
    *     #        example:
    *     #          'true'
    *     #        type: boolean
    *     #      description: Filter param acting on published
    * 
    *     #    - in: query
    *     #      name: creationDate
    *     #      schema:
    *     #        example:
    *     #          '2021-02-12'
    *     #        type: filterDate
    *     #      description: Filter param acting on creationDate
    * 
    *     #    - in: query
    *     #      name: publicationDate
    *     #      schema:
    *     #        example:
    *     #          '>2021-02-12'
    *     #        type: filterDate
    *     #      description: Filter param acting on publicationDate
    * 
    *     #    - in: query
    *     #      name: allRow
    *     #      schema:
    *     #        example:
    *     #          'mer'
    *     #        type: filterString
    *     #      description: Filter param acting on allRow
    *           
    * 
    *       responses:
    *         '200':
    *           description: successful operation
    *           content: 
    *             application/json: 
    *               description: Tab of Articles
    *               schema:    
    *                 type: array
    *                 items:
    *                   $ref: '#/components/schemas/Article'
    *         '405':
    *           description: Invalid input
    * 
    *     post:
    *       tags:
    *         - articles
    *       summary: Add a new article
    *       operationId: addOne
    *       desciption: Add a new article
    *       parameters:
    *         - in: body
    *           name: body
    *           description: Article object that needs to be added
    *           required: true
    *           schema:
    *             required: 
    *               - title
    *             properties:
    *               title:
    *                 type: string
    *                 description: The title of the article.
    *               chapo:
    *                 type: string
    *                 description: Short text placed under  the title.
    *               cover:
    *                 type: string
    *                 format: path
    *                 description: Path to an cover image
    *               published:
    *                 type: boolean
    *                 description: Is this article published or not
    *             example:
    *               title: Spot de surf a ne pas manqué
    *               chapo: Mer, vages et soleil, les coins a ne pas manquer
    *               cover: 23349294538.jpg
    *               published: true
    *       responses:
    *         '201':
    *           description: Created
    *         '405':
    *           description: Invalid input
    * 
    * 
    *   '/article/{articleId}':
    *     get:
    *       tags:
    *         - articles
    *       summary: Find article by ID
    *       operationId: searchByID
    *       desciption: Find article by ID
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of article to find
    *           required: true
    *           type: integer
    *           format: int64
    *       responses:
    *         '200':
    *           description: successful operation
    *           content: 
    *             application/json: 
    *               description: Article
    *               schema:    
    *                 $ref: '#/components/schemas/Article'
    *         '405':
    *           description: Invalid input
    * 
    *     put:
    *       tags:
    *         - articles
    *       summary: Update an existing article
    *       operationId: updateOne
    *       desciption: Update an existing article
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of article to find
    *           required: true
    *           type: integer
    *           format: int64
    *         - in: body
    *           name: body
    *           description: Article object that needs to be updated
    *           required: true
    *           schema:
    *             required:
    *               - title
    *             properties:
    *               title:
    *                 type: string
    *                 description: The title of the article.
    *               chapo:
    *                 type: string
    *                 description: Short text placed under  the title.
    *               cover:
    *                 type: string
    *                 format: path
    *                 description: Path to an cover image
    *               published:
    *                 type: boolean
    *                 description: Is this article published or not
    *             example:
    *               title: Spot de surf a ne pas manqué
    *               chapo: Mer, vages et soleil, les coins a ne pas manquer
    *               cover: 23349294538.jpg
    *               published: true
    *       responses:
    *         '201':
    *           description: Created
    *         '405':
    *           description: Invalid input 
    * 
    *     delete:
    *       tags:
    *         - articles
    *       summary: Delete an article
    *       operationId: deleteOne
    *       desciption: Delete an article
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of article to find
    *           required: true
    *           type: integer
    *           format: int64
    *       responses:
    *         '204':
    *           description: Successfully delete
    *         '405':
    *           description: Invalid input 
    * 
    *   '/article/{articleId}/redactor':
    *     put:
    *       tags:
    *         - articles
    *       summary: Add an existing redactor to an existing article
    *       operationId: linkRedactorToArticle
    *       desciption: Add an existing redactor to an existing article
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of article to find
    *           required: true
    *           type: integer
    *           format: int64
    *         - in: body
    *           name: Id
    *           description: Redactor id that needs to be associate with the Article
    *           required: true
    *           schema:
    *             required:
    *               - id
    *             properties:
    *               id:
    *                 type: integer
    *                 description: ID of redactor to find
    *             example:
    *               id: 1
    *       responses:
    *         '201':
    *           description: Created
    *         '405':
    *           description: Invalid input 
    *  
    *     delete:
    *       tags:
    *         - articles
    *       summary: Delete an existing link between a redactor to an article
    *       operationId: unlinkRedactorToArticle
    *       desciption: Delete an existing link between a redactor to an article
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of article to find
    *           required: true
    *           type: integer
    *           format: int64
    *         - in: body
    *           name: Id
    *           description: Redactor id that needs to be unassociate with the Article
    *           required: true
    *           schema:
    *             required:
    *               - id
    *             properties:
    *               id:
    *                 type: integer
    *                 description: ID of redactor to find
    *             example:
    *               id: 1
    *       responses:
    *         '204':
    *           description: Successfully delete
    *         '405':
    *           description: Invalid input 
    */