const { Library } = require('../../models');
const { Router } = require('express');

const routes = Router();

routes.get('/', async (req, res) => {
    const libraries = await Library.findAll();
    res.json(libraries);
});

routes.post('/', async (req, res) => {
    const { idControl, nameDocument, level, subject, filePath } = req.body;
    try{
        const library = await Library.create({idControl:idControl,nameDocument:nameDocument,level:level,
                                              subject:subject,filePath:filePath});                        
        library.save();
        return res.json(library);
    } catch(err) {
        return res.status(500).json(err);
    }
});

routes.get('/:id', async (req, res) => {
    const library = await Library.findOne({ where: { idControl: req.params.id }, });
    if(library === null){
        res.json({message: 'Nenhum documento encontrado!'});
    } else {
        res.json(library);
    }
});

routes.put('/:id', async (req, res) => {
    const { nameDocument, level, subject, filePath } = req.body;
    const library = await Library.update({nameDocument:nameDocument,level:level,
        subject:subject,filePath:filePath}, {where:{ idControl: req.params.id } });
    if(library === null){
        res.json({message: 'Nenhum documento atualizado!'});
    } else {
        res.json({message: 'Documento atualizado!'});
    }
});

routes.delete('/:id', async (req, res) => {
    const library = await Library.destroy({
        where: {
            idControl: req.params.id
        }
    });
    if(library === null){
        res.json({message: 'Nenhum documento excluído!'});
    } else {
        res.json({message: 'Documento excluído!'});
    }
});

module.exports = routes;
