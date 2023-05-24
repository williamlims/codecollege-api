const db = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/courses/:id', async (req, res) => {
    const sql = "SELECT Courses.idControl, Courses.nameCourse, Courses.description "+
                "FROM Courses INNER JOIN GroupCourses "+
                "ON Courses.idControl = GroupCourses.idControlCourse INNER JOIN codecollege.Groups "+
                "ON GroupCourses.idControlGroup = codecollege.Groups.idControl INNER JOIN GroupUsers "+
                "ON codecollege.Groups.idControl = GroupUsers.idControlGroup INNER JOIN Users "+
                "ON GroupUsers.idControlUser = Users.idControl "+
                "where Users.idControl = (:id)";
    const crsUs = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(crsUs);
});

routes.get('/courses/:id/classes', async (req, res) => {
    const sql = "select Courses.idControl, Courses.nameCourse, Courses.description, "+
                "Classes.idControl as idClass, Classes.nameClass, Classes.moduleControl, Classes.moduleOrder "+
                "FROM Classes INNER JOIN Courses "+
                "ON Classes.idCourseControl = Courses.idControl "+
                "where Courses.idControl = (:id) "+
                "order by Classes.moduleControl, Classes.moduleOrder asc";
    const classes = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classes);
});

routes.get('/courses/:idCourse/classes/:idClass', async (req, res) => {
    const sql = "select Courses.idControl, Courses.nameCourse, Courses.description, "+
                "Classes.idControl as idClass, Classes.nameClass, Classes.moduleControl, Classes.moduleOrder, Classes.linkYoutube "+
                "FROM Classes INNER JOIN Courses "+
                "ON Classes.idCourseControl = Courses.idControl "+
                "where Courses.idControl = (:idCourse) and Classes.idControl = (:idClass) "
    const classs = await db.sequelize.query(sql, { replacements: {idCourse: req.params.idCourse, idClass: req.params.idClass}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classs);
});

routes.get('/tutorials/user/:id', async (req, res) => {
    const sql = "SELECT Tutorials.idControl, Tutorials.nameTutorial, Tutorials.filePath "+
                "FROM Tutorials INNER JOIN GroupTutorials "+
                "ON Tutorials.idControl = GroupTutorials.idControlTutorial INNER JOIN codecollege.Groups "+
                "ON GroupTutorials.idControlGroup = codecollege.Groups.idControl INNER JOIN GroupUsers "+
                "ON codecollege.Groups.idControl = GroupUsers.idControlGroup INNER JOIN Users "+
                "ON GroupUsers.idControlUser = Users.idControl "+
                "where Users.idControl = (:id) ";
    const tutorials = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(tutorials);
});

routes.get('/classes/user/:id', async (req, res) => {
    const sql = "SELECT FreeClasses.idControl, FreeClasses.nameClass, FreeClasses.description "+
                "FROM FreeClasses INNER JOIN GroupClasses "+
                "ON FreeClasses.idControl = GroupClasses.idControlClass INNER JOIN codecollege.Groups "+
                "ON GroupClasses.idControlGroup = codecollege.Groups.idControl INNER JOIN GroupUsers "+
                "ON codecollege.Groups.idControl = GroupUsers.idControlGroup INNER JOIN Users "+
                "ON GroupUsers.idControlUser = Users.idControl "+
                "where Users.idControl = (:id) ";
    const classes = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classes);
});

routes.get('/classes/class/:id', async (req, res) => {
    const sql = "select * from FreeClasses where idControl = (:id)";
    const classes = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(classes);
});

routes.get('/libraries/user/:id', async (req, res) => {
    const sql = "SELECT Libraries.idControl, Libraries.nameDocument, Libraries.filePath "+
                "FROM Libraries INNER JOIN GroupLibraries "+
                "ON Libraries.idControl = GroupLibraries.idControlLibrary INNER JOIN codecollege.Groups "+
                "ON GroupLibraries.idControlGroup = codecollege.Groups.idControl INNER JOIN GroupUsers "+
                "ON codecollege.Groups.idControl = GroupUsers.idControlGroup INNER JOIN Users "+
                "ON GroupUsers.idControlUser = Users.idControl "+
                "where Users.idControl = (:id) ";
    const documents = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(documents);
});

routes.get('/certificates/user/:idu/:idc', async (req, res) => {
    const sql = "SELECT Users.firstName, Users.lastName, Courses.nameCourse, Certificates.conclusionDate "+
                "FROM Courses INNER JOIN Certificates "+
                "ON Courses.idControl = Certificates.idCourseControl INNER JOIN Users "+
                "ON Certificates.idUserControl = Users.idControl "+
                "where Users.idControl = (:idu) and Courses.idControl = (:idc)  ";
    const certificates = await db.sequelize.query(sql, { replacements: {idu: req.params.idu, idc: req.params.idc}, type: db.sequelize.QueryTypes.SELECT});
    res.json(certificates);
});

routes.get('/certificates/user/:id', async (req, res) => {
    const sql = "SELECT Users.firstName, Users.lastName, Courses.nameCourse, Certificates.conclusionDate, Courses.idControl "+
                "FROM Courses INNER JOIN Certificates "+
                "ON Courses.idControl = Certificates.idCourseControl INNER JOIN Users "+
                "ON Certificates.idUserControl = Users.idControl "+
                "where Users.idControl = (:id) ";
    const certificates = await db.sequelize.query(sql, { replacements: {id: req.params.id}, type: db.sequelize.QueryTypes.SELECT});
    res.json(certificates);
});

module.exports = routes;
