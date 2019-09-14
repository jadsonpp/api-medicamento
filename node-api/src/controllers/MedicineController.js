const mongoose = require('mongoose');
const Medicine = mongoose.model('Medicine');

module.exports = {
    async index(req,res){
        const medicines = await Medicine.find();
        return res.json(medicines);
    },

    async show(req,res){
        const medicine = await Medicine.findById(req.params.id);
        return res.json(medicine);
    },

    async store(req,res){
        const medicine = await Medicine.create(req.body);
        return res.json(medicine);
    },

    async update(req,res){
        const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body ,{new: true});
        return res.json(medicine);  
    },

    async destroy(req,res){
        await Medicine.findByIdAndRemove(req.params.id);
        //retorna msg de deletado com sucesso sem conteudo.
        return res.send();
    }
};
