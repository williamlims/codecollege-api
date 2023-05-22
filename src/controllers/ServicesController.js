const { User, Course, Library, Tutorial, Group, AccessSystem } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/users', async (req, res) => {
    const users = await User.findAll();
    return res.json({namberUsers: users.length});
});

routes.get('/courses', async (req, res) => {
    const courses = await Course.findAll();
    return res.json({namberCourses: courses.length});
});

routes.get('/libraries', async (req, res) => {
    const libraries = await Library.findAll();
    return res.json({namberLibraries: libraries.length});
});

routes.get('/tutorials', async (req, res) => {
    const tutorials = await Tutorial.findAll();
    return res.json({namberTutorials: tutorials.length});
});

routes.get('/groups', async (req, res) => {
    const groups = await Group.findAll();
    return res.json({namberGroups: groups.length});
});

routes.get('/getaccess', async (req, res) => {
    const access = await AccessSystem.findAll();
    return res.json(access);
});

module.exports = routes;
