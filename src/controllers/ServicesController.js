const { User, Course, Library, Tutorial, Group } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json({namberUsers: users.length});
});

routes.get('/courses', async (req, res) => {
    const courses = await Course.findAll();
    res.json({namberCourses: courses.length});
});

routes.get('/libraries', async (req, res) => {
    const libraries = await Library.findAll();
    res.json({namberLibraries: libraries.length});
});

routes.get('/tutorials', async (req, res) => {
    const tutorials = await Tutorial.findAll();
    res.json({namberTutorials: tutorials.length});
});

routes.get('/groups', async (req, res) => {
    const groups = await Group.findAll();
    res.json({namberGroups: groups.length});
});

module.exports = routes;
