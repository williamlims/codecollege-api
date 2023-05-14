const { Course } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

routes.post('/', async (req, res) => {
    const { idControl, nameCourse, description, level, area, filePathArea } = req.body;
    try{
        const course = await Course.create({idControl:idControl,nameCourse:nameCourse,description:description,
                                            level:level,area:area,filePathArea:filePathArea});                        
        course.save();
        return res.json(course);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const course = await Course.findOne({ where: { idControl: req.params.id }, });
    if(course === null){
        res.json({message: 'Nenhum curso encontrado!'});
    } else {
        res.json(course);
    }
});

routes.put('/:id', async (req, res) => {
    const { nameCourse, description, level, area, filePathArea } = req.body;
    const course = await Course.update({nameCourse:nameCourse,description:description,
        level:level,area:area,filePathArea:filePathArea}, {where:{ idControl: req.params.id } });
    if(course === null){
        res.json({message: 'Nenhum curso atualizado!'});
    } else {
        res.json({message: 'Curso atualizado!'});
    }
});

routes.delete('/:id', async (req, res) => {
    const course = await Course.destroy({
        where: {
            idControl: req.params.id
        }
    });
    if(user === null){
        res.json({message: 'Nenhum curso excluído!'});
    } else {
        res.json({message: 'Curso excluído!'});
    }
});


module.exports = routes;
