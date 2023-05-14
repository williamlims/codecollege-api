const { Tutorial } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const tutorials = await Tutorial.findAll();
    res.json(tutorials);
});

routes.post('/', async (req, res) => {
    const { idControl, nameTutorial, level, subject, filePath } = req.body;
    try{
        const tutorial = await Tutorial.create({idControl:idControl,nameTutorial:nameTutorial,level:level,
                                            subject:subject,filePath:filePath});                        
        tutorial.save();
        return res.json(tutorial);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const tutorial = await Tutorial.findOne({ where: { idControl: req.params.id }, });
    if(tutorial === null){
        res.json({message: 'Nenhum tutorial encontrado!'});
    } else {
        res.json(tutorial);
    }
});

routes.put('/:id', async (req, res) => {
    const { nameTutorial, level, subject, filePath } = req.body;
    const tutorial = await Tutorial.update({nameTutorial:nameTutorial,level:level,
        subject:subject,filePath:filePath}, {where:{ idControl: req.params.id } });
    if(tutorial === null){
        res.json({message: 'Nenhum tutorial atualizado!'});
    } else {
        res.json({message: 'Tutorial atualizado!'});
    }
});

routes.delete('/:id', async (req, res) => {
    const tutorial = await Class.destroy({
        where: {
            idControl: req.params.id
        }
    });
    if(tutorial === null){
        res.json({message: 'Nenhum tutorial excluído!'});
    } else {
        res.json({message: 'Tutorial excluído!'});
    }
});


module.exports = routes;
