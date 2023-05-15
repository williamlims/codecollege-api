const { User } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

routes.post('/', async (req, res) => {
    const { idControl, firstName, lastName, email, birthday, 
            password, levelUser, googleAccount, photo } = req.body;
    try{
        const user = await User.create({idControl:idControl,firstName:firstName,lastName:lastName,email:email,birthday:birthday,
                                            password:password,levelUser:levelUser,googleAccount:googleAccount,photo:photo});                        
        user.save();
        return res.json(user);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const user = await User.findOne({ where: { idControl: req.params.id }, });
    if(user === null){
        res.json({message: 'Nenhum usuário encontrado!'});
    } else {
        res.json(user);
    }
});

routes.put('/:id', async (req, res) => {
    const { firstName, lastName, email, birthday, 
        password, levelUser } = req.body;
    const user = await User.update({firstName:firstName,lastName:lastName,email:email,birthday:birthday,
        password:password,levelUser:levelUser}, {where:{ idControl: req.params.id } });
    if(user === null){
        res.json({message: 'Nenhum usuário atualizado!'});
    } else {
        res.json({message: 'Usuário atualizado!'});
    }
});

routes.delete('/:id', async (req, res) => {
    const user = await User.destroy({
        where: {
            idControl: req.params.id
        }
    });
    if(user === null){
        res.json({message: 'Nenhum usuário excluído!'});
    } else {
        res.json({message: 'Usuário excluído!'});
    }
});

module.exports = routes;
