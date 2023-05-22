const { User } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/user/:email/:pass', async (req, res) => {
    const user = await User.findOne({ where: { email: req.params.email, password: req.params.pass }, });
    if(user === null){
        res.json({message: 'Email ou Senha não batem!'});
    } else {
        res.json(user);
    }
});

routes.get('/admin/:email/:pass', async (req, res) => {
    const user = await User.findOne({ where: { email: req.params.email, password: req.params.pass }, });
    if(user === null){
        res.json({message: 'Email ou Senha não batem!'});
    } else {
        if(user.levelUser === 1){
            res.json({message: 'Usuário não é administrador!'});
        } else { 
            res.json(user);
        }
    }
});

module.exports = routes;