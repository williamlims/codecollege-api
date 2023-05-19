const { Group, GroupUsers, GroupCourses, GroupTutorials, 
        GroupClasses, GroupLibrary, db } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const groups = await Group.findAll();
    res.json(groups);
});

routes.post('/', async (req, res) => {
    const { idControl, groupName, subject, description } = req.body;
    try{
        const group = await Group.create({idControl:idControl,groupName:groupName,
                                              subject:subject,description:description});                        
        group.save();
        return res.json(group);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const group = await Group.findOne({ where: { idControl: req.params.id }, });
    if(group === null){
        res.json({message: 'Nenhum documento encontrado!'});
    } else {
        res.json(group);
    }
});

routes.put('/:id', async (req, res) => {
    const { groupName, subject, description } = req.body;
    const group = await Group.update({groupName:groupName,
        subject:subject,description:description}, {where:{ idControl: req.params.id } });
    if(group === null){
        res.json({message: 'Nenhum Grupo atualizado!'});
    } else {
        res.json({message: 'Grupo atualizado!'});
    }
});

routes.delete('/:id', async (req, res) => {
    const group = await Group.destroy({
        where: {
            idControl: req.params.id
        }
    });
    if(group === null){
        res.json({message: 'Nenhum Grupo excluído!'});
    } else {
        res.json({message: 'Grupo excluído!'});
    }
});

routes.post('/users', async (req, res) => {
    const { idControlUser, idControlGroup } = req.body;
    try{
        const gu = await GroupUsers.create({idControlUser:idControlUser,
                                                    idControlGroup:idControlGroup});                        
        gu.save();
        return res.json(gu);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.post('/courses', async (req, res) => {
    const { idControlCourse, idControlGroup } = req.body;
    try{
        const gc = await GroupCourses.create({idControlCourse:idControlCourse,
                                                    idControlGroup:idControlGroup});                        
        gc.save();
        return res.json(gc);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.post('/tutorials', async (req, res) => {
    const { idControlTutorial, idControlGroup } = req.body;
    try{
        const gt = await GroupTutorials.create({idControlTutorial:idControlTutorial,
                                                    idControlGroup:idControlGroup});                        
        gt.save();
        return res.json(gt);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.post('/classes', async (req, res) => {
    const { idControlClass, idControlGroup } = req.body;
    try{
        const gcl = await GroupClasses.create({idControlClass:idControlClass,
                                                    idControlGroup:idControlGroup});                        
        gcl.save();
        return res.json(gcl);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.post('/libraries', async (req, res) => {
    const { idControlLibrary, idControlGroup } = req.body;
    try{
        const gl = await GroupLibrary.create({idControlLibrary:idControlLibrary,
                                                    idControlGroup:idControlGroup});                        
        gl.save();
        return res.json(gl);
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = routes;
