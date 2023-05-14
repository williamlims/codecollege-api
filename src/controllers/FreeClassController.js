const { FreeClass } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const classes = await FreeClass.findAll();
    res.json(classes);
});

routes.post('/', async (req, res) => {
    const { idControl, nameClass, description, subject, linkYoutube } = req.body;
    try{
        const classes = await FreeClass.create({idControl:idControl,nameClass:nameClass,description:description,
                                            subject:subject,linkYoutube:linkYoutube});                        
        classes.save();
        return res.json(classes);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const classes = await FreeClass.findOne({ where: { idControl: req.params.id }, });
    if(classes === null){
        res.json({message: 'Nenhuma aula encontrada!'});
    } else {
        res.json(classes);
    }
});

routes.put('/:id', async (req, res) => {
    const { nameClass, description, subject, linkYoutube } = req.body;
    const classes = await FreeClass.update({nameClass:nameClass,description:description,
        subject:subject,linkYoutube:linkYoutube}, {where:{ idControl: req.params.id } });
    if(classes === null){
        res.json({message: 'Nenhuma aula atualizada!'});
    } else {
        res.json({message: 'Aula atualizada!'});
    }
});

routes.delete('/:id', async (req, res) => {
    const classes = await FreeClass.destroy({
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
