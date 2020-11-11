module.exports = (express, sequelize, model, middleware, models) => {

    // ======
    // Create
    // ======
    const create = (req, res) => {

        model.create(req.body)
            .then(function(dbModel) {
                res.json(dbModel);
            })
            .catch(function(err) {
                res.json(err);
            });
    };

    // =========
    // Read many
    // =========
    const readMany = (req, res) => {
        // RECEIVING WHERE PARAMS
        if (req.query.where) {
            req.query.where = JSON.parse(req.query.where)
        }
        // RECEIVING JOINTURE NAME 
        if (req.query.include) {
            var myobj = JSON.parse(req.query.include);
            var my_model = eval("models." + myobj.name)
        }
        model.findAll({
                where: req.query.where,
                include: my_model
            })
            .then(function(dbModel) {
                res.json(dbModel);
            })
            .catch(function(err) {
                res.json(err);
            })
    };

    // ========
    // Read one
    // ========
    const readOne = (req, res) => {
        model.findOne({
                where: { id: req.params.id }
            })
            .then(function(dbUser) {
                res.json(dbUser);
            })
            .catch(function(err) {
                res.json(err);
            });
    };

    // ======
    // Update
    // ======
    const update = (req, res) => {
        model.update(req.body, {
                where: { id: req.params.id }
            })
            .then(function(dbModel) {
                res.json(dbModel);
            })
            .catch(function(err) {
                res.json(err);
            });
    };

    // ======
    // Remove
    // ======
    const remove = (req, res) => {
        model.destroy({
                where: { id: req.params.id }
            })
            .then(function(dbModel) {
                res.json(dbModel);
            })
            .catch(function(err) {
                res.json(err);
            });
    };



    // ======
    // Routes
    // ======

    let router = express.Router();

    router.post('/', create);
    router.get('/', readMany);
    router.get('/:id', readOne);
    router.put('/:id', update);
    router.delete('/:id', remove);



    return router;

}