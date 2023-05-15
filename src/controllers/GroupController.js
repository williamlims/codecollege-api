const { Group } = require('../../models');
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

module.exports = routes;
