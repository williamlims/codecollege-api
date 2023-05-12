const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.use('/v1/users', UserController);

routes.use((err, req, res, next) => {
    if (err.statusCode != undefined) {
        return res
            .status(err.statusCode)
            .send({ ...err, statusCode: undefined });
    }

    if (process.env.DEBUG_MODE === 'true') {
        console.log(err)
        res.status(500).send(err);
    } else {
        res.status(500).send({ message: 'Internal error' });
    }
});

module.exports = routes;
