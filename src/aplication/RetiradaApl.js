const mongoose = require('mongoose');
const Retirada = mongoose.model('Retirada');

module.exports = {
    async index(req,res){
        const retirada = await Retirada.find();
        return res.json(retirada);
    },

    async show(req,res){
        const retirada = await Retirada.findById(req.params.id);
        return res.json(retirada);
    },

    async store(req,res){
        const retirada = await Retirada.create(req.body);
        return res.json(retirada);
    },

    async update(req,res){
        const retirada = await Retirada.findByIdAndUpdate(req.params.id,req.body,{new: true});
        return res.json(retirada);  
    },

    async destroy(req,res){
        await Retirada.findByIdAndRemove(req.params.id);
        //retorna msg de deletado com sucesso sem conteudo.
        return res.send();
    }
};
