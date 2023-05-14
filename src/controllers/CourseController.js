const { Course } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

routes.post('/', async (req, res) => {
    const { idControl, firstName, lastName, email, birthday, 
            password, levelUser, googleAccount, photo } = req.body;
    try{
        const course = await Course.create({idControl:idControl,firstName:firstName,lastName:lastName,email:email,birthday:birthday,
                                            password:password,levelUser:levelUser,googleAccount:googleAccount,photo:photo});                        
        course.save();
        return res.json(course);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const course = await Course.findOne({ where: { idControl: req.params.id }, });
    if(user === null){
        res.json({message: 'Nenhum curso encontrado!'});
    } else {
        res.json(user);
    }
});

routes.put('/:id', async (req, res) => {
    const { firstName, lastName, email, birthday, 
        password, levelUser } = req.body;
    const course = await Course.update({firstName:firstName,lastName:lastName,email:email,birthday:birthday,
        password:password,levelUser:levelUser}, {where:{ idControl: req.params.id } });
    if(user === null){
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
