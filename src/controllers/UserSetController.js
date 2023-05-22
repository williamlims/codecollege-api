const db = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/courses/:id', async (req, res) => {
    const sql = "SELECT courses.idControl, courses.nameCourse, courses.description "+
                "FROM courses INNER JOIN groupcourses "+
                "ON courses.idControl = groupcourses.idControlCourse INNER JOIN codecollege.groups "+
                "ON groupcourses.idControlGroup = codecollege.groups.idControl INNER JOIN groupusers "+
                "ON codecollege.groups.idControl = groupusers.idControlGroup INNER JOIN users "+
                "ON groupusers.idControlUser = users.idControl "+
                "where users.idControl = (:id)";
    const crsUs = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(crsUs);
});

routes.get('/courses/:id/classes', async (req, res) => {
    const sql = "select courses.idControl, courses.nameCourse, courses.description, "+
                "classes.idControl as idClass, classes.nameClass, classes.moduleControl, classes.moduleOrder "+
                "FROM classes INNER JOIN courses "+
                "ON classes.idCourseControl = courses.idControl "+
                "where courses.idControl = (:id) "+
                "order by classes.moduleControl, classes.moduleOrder asc";
    const classes = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classes);
});

routes.get('/courses/:idCourse/classes/:idClass', async (req, res) => {
    const sql = "select courses.idControl, courses.nameCourse, courses.description, "+
                "classes.idControl as idClass, classes.nameClass, classes.moduleControl, classes.moduleOrder, classes.linkYoutube "+
                "FROM classes INNER JOIN courses "+
                "ON classes.idCourseControl = courses.idControl "+
                "where courses.idControl = (:idCourse) and classes.idControl = (:idClass) "
    const classs = await db.sequelize.query(sql, { replacements: {idCourse: req.params.idCourse, idClass: req.params.idClass}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classs);
});

routes.get('/tutorials/user/:id', async (req, res) => {
    const sql = "SELECT tutorials.idControl, tutorials.nameTutorial, tutorials.filePath "+
                "FROM tutorials INNER JOIN grouptutorials "+
                "ON tutorials.idControl = grouptutorials.idControlTutorial INNER JOIN codecollege.groups "+
                "ON grouptutorials.idControlGroup = codecollege.groups.idControl INNER JOIN groupusers "+
                "ON codecollege.groups.idControl = groupusers.idControlGroup INNER JOIN users "+
                "ON groupusers.idControlUser = users.idControl "+
                "where users.idControl = (:id) ";
    const tutorials = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(tutorials);
});

routes.get('/classes/user/:id', async (req, res) => {
    const sql = "SELECT freeclasses.idControl, freeclasses.nameClass, freeclasses.description "+
                "FROM freeclasses INNER JOIN groupclasses "+
                "ON freeclasses.idControl = groupclasses.idControlClass INNER JOIN codecollege.groups "+
                "ON groupclasses.idControlGroup = codecollege.groups.idControl INNER JOIN groupusers "+
                "ON codecollege.groups.idControl = groupusers.idControlGroup INNER JOIN users "+
                "ON groupusers.idControlUser = users.idControl "+
                "where users.idControl = (:id) ";
    const classes = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classes);
});

routes.get('/classes/class/:id', async (req, res) => {
    const sql = "select * from freeclasses where idControl = (:id)";
    const classes = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classes);
});

routes.get('/libraries/user/:id', async (req, res) => {
    const sql = "SELECT libraries.idControl, libraries.nameDocument, libraries.filePath "+
                "FROM libraries INNER JOIN grouplibraries "+
                "ON libraries.idControl = grouplibraries.idControlLibrary INNER JOIN codecollege.groups "+
                "ON grouplibraries.idControlGroup = codecollege.groups.idControl INNER JOIN groupusers "+
                "ON codecollege.groups.idControl = groupusers.idControlGroup INNER JOIN users "+
                "ON groupusers.idControlUser = users.idControl "+
                "where users.idControl = (:id) ";
    const documents = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(documents);
});

routes.get('/certificates/user/:idu/:idc', async (req, res) => {
    const sql = "SELECT users.firstName, users.lastName, courses.nameCourse, certificates.conclusionDate "+
                "FROM courses INNER JOIN certificates "+
                "ON courses.idControl = certificates.idCourseControl INNER JOIN users "+
                "ON certificates.idUserControl = users.idControl "+
                "where users.idControl = (:idu) and courses.idControl = (:idc)  ";
    const certificates = await db.sequelize.query(sql, { replacements: {idu: req.params.idu, idc: req.params.idc}, type: db.sequelize.QueryTypes.SELECT});
    res.json(certificates);
});

routes.get('/certificates/user/:id', async (req, res) => {
    const sql = "SELECT users.firstName, users.lastName, courses.nameCourse, certificates.conclusionDate, courses.idControl "+
                "FROM courses INNER JOIN certificates "+
                "ON courses.idControl = certificates.idCourseControl INNER JOIN users "+
                "ON certificates.idUserControl = users.idControl "+
                "where users.idControl = (:id) ";
    const certificates = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(certificates);
});

module.exports = routes;