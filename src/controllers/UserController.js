const { User } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

routes.get('/:id', async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id }, });
    if(user === null){
        res.json({message: 'Nenhum usuário encontrado!'});
    } else {
        res.json(user);
    }
});

module.exports = routes;
