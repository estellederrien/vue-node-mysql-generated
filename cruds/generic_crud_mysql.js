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

        if (req.query.include) {
            req.query.include[0].model = eval("models." + req.query.include[0].model)
        }

        model.findAll(
                req.query
            )
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