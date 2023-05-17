const { Tutorial } = require('../../models');
const { Router } = require('express');
require('dotenv').config();
const fs = require('fs');
const path = require("path");
const { Console } = require('console');
const uuid = require('uuid');

const routes = Router();

routes.get('/', async (req, res) => {
    const tutorials = await Tutorial.findAll();
    res.json(tutorials);
});

routes.post('/', async (req, res) => {
    const { idControl, nameTutorial, level, subject } = req.body;
    if (!req.files.fileDocument) {
        return res.json({message: "Nenhum arquivo enviado!"});
    } else {
        const file = req.files.fileDocument;
        if(file.mimetype !== 'application/pdf') {
            return res.json({message: "Tipo de arquivo deve ser PDF!"});
        }
        let uuidname = uuid.v1();
        let imgsrc = process.env.URL_API + '/files/tutorials/' + uuidname + file.name;
        file.mv('public/files/tutorials/' + uuidname + file.name, async (err) => {
            if (err) {
              return res.status(500).json({message: err});
            }
            try{
                const tutorial = await Tutorial.create({idControl:idControl,nameTutorial:nameTutorial,level:level,
                                                    subject:subject,filePath:imgsrc});                        
                tutorial.save();
                return res.json(tutorial);
            } catch(err) {
                return res.status(500).json({message: err});
            }
        });
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
