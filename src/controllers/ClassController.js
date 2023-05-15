const { Class } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const classes = await Class.findAll();
    res.json(classes);
});

routes.post('/', async (req, res) => {
    const { idCourseControl, idControl, nameClass, description, moduleControl, moduleOrder, linkYoutube } = req.body;
    try{
        const classes = await Class.create({idCourseControl:idCourseControl,idControl:idControl,nameClass:nameClass,description:description,
                                            moduleControl:moduleControl,moduleOrder:moduleOrder,linkYoutube:linkYoutube});                        
        classes.save();
        return res.json(classes);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const classes = await Class.findOne({ where: { idControl: req.params.id }, });
    if(classes === null){
        res.json({message: 'Nenhuma aula encontrada!'});
    } else {
        res.json(classes);
    }
});

routes.put('/:id', async (req, res) => {
    const { nameClass, description, moduleControl, moduleOrder, linkYoutube } = req.body;
    const classes = await Class.update({nameClass:nameClass,description:description,
        moduleControl:moduleControl,moduleOrder:moduleOrder,linkYoutube:linkYoutube}, {where:{ idControl: req.params.id } });
    if(classes === null){
        res.json({message: 'Nenhuma aula atualizada!'});
    } else {
        res.json({message: 'Aula atualizada!'});
    }
});

routes.delete('/:id', async (req, res) => {
    const classes = await Class.destroy({
        where: {
            idControl: req.params.id
        }
    });
    if(classes === null){
        res.json({message: 'Nenhuma aula excluída!'});
    } else {
        res.json({message: 'Aula excluída!'});
    }
});

module.exports = routes;
