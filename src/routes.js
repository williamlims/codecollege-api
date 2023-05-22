const { Router } = require('express');
const UserController = require('./controllers/UserController');
const UserSetController = require('./controllers/UserSetController');
const CourseController = require('./controllers/CourseController');
const ClassController = require('./controllers/ClassController');
const TutorialController = require('./controllers/TutorialController');
const FreeClassController = require('./controllers/FreeClassController');
const LibraryController = require('./controllers/LibraryController');
const ServicesController = require('./controllers/ServicesController');
const GroupController = require('./controllers/GroupController');
const GroupServiceController = require('./controllers/GroupServiceController');
const AuthController = require('./controllers/AuthController');

const routes = Router();

routes.use('/v1/users', UserController);
routes.use('/v1/user', UserSetController);
routes.use('/v1/courses', CourseController);
routes.use('/v1/classes', ClassController);
routes.use('/v1/tutorials', TutorialController);
routes.use('/v1/freeclasses', FreeClassController);
routes.use('/v1/libraries', LibraryController);
routes.use('/v1/groups', GroupController);
routes.use('/v1/group', GroupServiceController);
routes.use('/v1/services', ServicesController);
routes.use('/v1/auth', AuthController);

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
