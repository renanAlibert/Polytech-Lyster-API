const express = require('express');
const router = express.Router();
const models = require('../../models');

function convertFilterInt(param, attr) {
    if(param){
        switch (param[0]) {
            case '>':
                return {[attr]:{[models.op.gt]: param.slice(1)}}
            case '<':
                return {[attr]:{[models.op.lt]: param.slice(1)}}
            case '[':
                if(param.endsWith(']') && param.includes(",")){
                    var clearParam = param.slice(1, param.length-1)
                    var tabParam = clearParam.split(',')
                    if(tabParam[0]){
                        var tab = [{id:[]}]
                        tabParam.forEach(p => {
                            console.log("[")
                            if(p.includes("<")||p.includes(">")){tab.push(convertFilterInt(p, attr))}
                            else{tab[0][attr].push(p)}
                        });
                        return {[models.op.and]: tab}
                    }
                    return {}
                }
                return {}
            case '(':
                if(param.endsWith(')') && param.includes(",")){
                    var clearParam = param.slice(1, param.length-1)
                    var tabParam = clearParam.split(',')
                    if(tabParam[0]){
                        var tab = []
                        tabParam.forEach(p => {
                            tab.push(convertFilterInt(p, attr))
                        });
                        return {[models.op.or]: tab}
                    }
                    return {}
                }
                return {}
            default:
                return {[attr]:{param}}
        }
    }
    return param
}

module.exports = () => { 

    router.get('/', (req, res) => {
        var filter = convertFilterInt(req.query.id, "id");
        if(req.query.firstname){filter.firstname = req.query.firstname}
        if(req.query.lastname){filter.lastname = req.query.lastname}
        if(req.query.picture){filter.picture = req.query.picture}
        if(req.query.description){filter.description = req.query.description}
        if(req.query.createdAt){filter.createdAt = req.query.createdAt}
        if(req.query.updatedAt){filter.updatedAt = req.query.updatedAt}
        models.Redactors.findAll({ 
            include: models.Articles, 
            limit: req.query.limit,
            offset: req.query.offset,
            where: filter
        }).then((redactors) => {
            res.status(200).send(redactors);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    });

    router.get('/:id', (req, res) => {
        models.Redactors.findByPk(req.params.id).then((redactor) => {
            redactor ? res.status(200).send(redactor) : res.sendStatus(405);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
    });

    router.post('/', (req, res) => {
        models.Redactors.create(req.body)
        .then(result => {
            res.sendStatus(201);
        })
        .catch((error) => {
            error.parent.code==="SQLITE_CONSTRAINT" ? res.sendStatus(405) : res.sendStatus(500);
        });
    });

    router.put('/:id', (req, res) => {
        //delete req.body.title;
        models.Redactors.update(req.body, {
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
        models.Redactors.destroy({
            where: {
                id: req.params.id
            }
        }).then((redactor) => {
            redactor ? res.sendStatus(204) : res.sendStatus(405);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    router.put('/:id/article', (req, res) => {
        models.Redactors.findByPk(req.params.id).then(redactor => {
            redactor.addArticles(req.body.id)
            .then(result => {
                res.sendStatus(201);
            })
            .catch((error) => {
                error.parent.code==="SQLITE_CONSTRAINT" ? res.sendStatus(405) : res.sendStatus(500);
            });
            redactor.save();
        })
    });

    router.delete('/:id/article', (req, res) => {
        models.Redactors.findByPk(req.params.id).then(redactor => {
            redactor.removeArticles(req.body.id)
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
    *   /redactor:
    *     get:
    *       tags:
    *         - redactors
    *       summary: Find all redactors with an optional filter
    *       operationId: searchInAll
    *       description: Find all redactors with an optional filter. Use it with no filter for get all redactors.
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
    *               '[>2,<10]'
    *             type: filterInt
    *           description: Filter param acting on ID. [] for and, () for or. You can also use < and >. The exception is [1,2] is equale to (1,2). You can't use [] or () into [] or ().
    * 
    *         - in: query
    *           name: firstname
    *           schema:
    *             example:
    *               'Bobe'
    *             type: string
    *           description: Filter param acting on title
    * 
    *         - in: query
    *           name: lastname
    *           schema:
    *             example:
    *               'R'
    *             type: string
    *           description: Filter param acting on chapo
    * 
    *         - in: query
    *           name: picture
    *           schema:
    *             example:
    *               '21139472'
    *             type: string
    *           description: Filter param acting on cover
    * 
    *         - in: query
    *           name: description
    *           schema:
    *             example:
    *               'surfer'
    *             type: string
    *           description: Filter param acting on published
    * 
    *         - in: query
    *           name: createdAt
    *           schema:
    *             example:
    *               '2021-02-12'
    *             type: string
    *           description: Filter param acting on creationDate
    * 
    *         - in: query
    *           name: updatedAt
    *           schema:
    *             example:
    *               '2021-02-12'
    *             type: string
    *           description: Filter param acting on publicationDate
    * 
    *           
    * 
    *       responses:
    *         '200':
    *           description: successful operation
    *           content: 
    *             application/json: 
    *               description: Tab of Redactors
    *               schema:    
    *                 type: array
    *                 items:
    *                   $ref: '#/components/schemas/Redactor'
    *         '405':
    *           description: Invalid input
    * 
    *     post:
    *       tags:
    *         - redactors
    *       summary: Add a new redactor
    *       operationId: addOne
    *       desciption: Add a new redactor
    *       parameters:
    *         - in: body
    *           name: body
    *           description: Redactor object that needs to be added
    *           required: true
    *           schema:
    *             required: 
    *               - title
    *             properties:
    *               title:
    *                 type: string
    *                 description: The title of the redactor.
    *               chapo:
    *                 type: string
    *                 description: Short text placed under  the title.
    *               cover:
    *                 type: string
    *                 format: path
    *                 description: Path to an cover image
    *               published:
    *                 type: boolean
    *                 description: Is this redactor published or not
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
    *   '/redactor/{redactorId}':
    *     get:
    *       tags:
    *         - redactors
    *       summary: Find redactor by ID
    *       operationId: searchByID
    *       desciption: Find redactor by ID
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of redactor to find
    *           required: true
    *           type: integer
    *           format: int64
    *       responses:
    *         '200':
    *           description: successful operation
    *           content: 
    *             application/json: 
    *               description: Redactor
    *               schema:    
    *                 $ref: '#/components/schemas/Redactor'
    *         '405':
    *           description: Invalid input
    * 
    *     put:
    *       tags:
    *         - redactors
    *       summary: Update an existing redactor
    *       operationId: updateOne
    *       desciption: Update an existing redactor
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of redactor to find
    *           required: true
    *           type: integer
    *           format: int64
    *         - in: body
    *           name: body
    *           description: Redactor object that needs to be updated
    *           required: true
    *           schema:
    *             required:
    *               - title
    *             properties:
    *               title:
    *                 type: string
    *                 description: The title of the redactor.
    *               chapo:
    *                 type: string
    *                 description: Short text placed under  the title.
    *               cover:
    *                 type: string
    *                 format: path
    *                 description: Path to an cover image
    *               published:
    *                 type: boolean
    *                 description: Is this redactor published or not
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
    *         - redactors
    *       summary: Delete an redactor
    *       operationId: deleteOne
    *       desciption: Delete an redactor
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of redactor to find
    *           required: true
    *           type: integer
    *           format: int64
    *       responses:
    *         '204':
    *           description: Successfully delete
    *         '405':
    *           description: Invalid input 
    * 
    *   '/redactor/{redactorId}/article':
    *     put:
    *       tags:
    *         - redactors
    *       summary: Add an existing article to an existing redactor
    *       operationId: linkRedactorToRedactor
    *       desciption: Add an existing article to an existing redactor
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of redactor to find
    *           required: true
    *           type: integer
    *           format: int64
    *         - in: body
    *           name: Id
    *           description: Article id that needs to be associate with the Redactor
    *           required: true
    *           schema:
    *             required:
    *               - id
    *             properties:
    *               id:
    *                 type: integer
    *                 description: ID of article to find
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
    *         - redactors
    *       summary: Delete an existing link between an article to a redactor
    *       operationId: unlinkRedactorToRedactor
    *       desciption: Delete an existing link between an article to a redactor
    *       parameters:
    *         - name: Id
    *           in: path
    *           description: ID of redactor to find
    *           required: true
    *           type: integer
    *           format: int64
    *         - in: body
    *           name: Id
    *           description: Article id that needs to be unassociate with the Redactor
    *           required: true
    *           schema:
    *             required:
    *               - id
    *             properties:
    *               id:
    *                 type: integer
    *                 description: ID of article to find
    *             example:
    *               id: 1
    *       responses:
    *         '204':
    *           description: Successfully delete
    *         '405':
    *           description: Invalid input 
    */