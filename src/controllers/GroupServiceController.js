const  db  = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/users/:id', async (req, res) => {
    const sql = "SELECT users.idControl, users.firstName, users.lastName, "+
                        "users.email, codecollege.groups.groupName, "+
                        "codecollege.groups.subject, codecollege.groups.description "+
                        "FROM users INNER JOIN groupusers "+
                        "ON users.idControl = groupusers.idControlUser INNER JOIN codecollege.groups "+
                        "ON groupusers.idControlGroup = codecollege.groups.idControl "+
                        "where codecollege.groups.idControl = (:id)";
    const gusers = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(gusers);
});

routes.get('/courses/:id', async (req, res) => {
    const sql = "SELECT courses.idControl, courses.nameCourse, courses.area, "+
                        "codecollege.groups.groupName, "+
                        "codecollege.groups.subject, codecollege.groups.description "+
                        "FROM courses INNER JOIN groupcourses "+
                        "ON courses.idControl = groupcourses.idControlCourse INNER JOIN codecollege.groups "+
                        "ON groupcourses.idControlGroup = codecollege.groups.idControl "+
                        "where codecollege.groups.idControl = (:id)";
    const gcrs = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(gcrs);
});

routes.get('/tutorials/:id', async (req, res) => {
    const sql = "SELECT tutorials.idControl, tutorials.nameTutorial, tutorials.subject, "+
                        "codecollege.groups.groupName, "+
                        "codecollege.groups.subject, codecollege.groups.description "+
                        "FROM tutorials INNER JOIN grouptutorials "+
                        "ON tutorials.idControl = grouptutorials.idControlTutorial INNER JOIN codecollege.groups "+
                        "ON grouptutorials.idControlGroup = codecollege.groups.idControl "+
                        "where codecollege.groups.idControl = (:id)";
    const gtut = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(gtut);
});

routes.get('/classes/:id', async (req, res) => {
    const sql = "SELECT freeclasses.idControl, freeclasses.nameClass, freeclasses.subject, "+
                        "codecollege.groups.groupName, "+
                        "codecollege.groups.subject, codecollege.groups.description "+
                        "FROM freeclasses INNER JOIN groupclasses "+
                        "ON freeclasses.idControl = groupclasses.idControlClass INNER JOIN codecollege.groups "+
                        "ON groupclasses.idControlGroup = codecollege.groups.idControl "+
                        "where codecollege.groups.idControl = (:id)";
    const gclss = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(gclss);
});

routes.get('/libraries/:id', async (req, res) => {
    const sql = "SELECT libraries.idControl, libraries.nameDocument, libraries.subject, "+
                        "codecollege.groups.groupName, "+
                        "codecollege.groups.subject, codecollege.groups.description "+
                        "FROM libraries INNER JOIN grouplibraries "+
                        "ON libraries.idControl = grouplibraries.idControlLibrary INNER JOIN codecollege.groups "+
                        "ON grouplibraries.idControlGroup = codecollege.groups.idControl "+
                        "where codecollege.groups.idControl = (:id)";
    const glib = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(glib);
});

module.exports = routes;