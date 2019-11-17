const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

module.exports = {
    async index(req,res){
        const patients = await Patient.find();
        return res.json(patients);
    },

    async show(req,res){
        const patients = await Patient.findById(req.params.id);
        return res.json(patients);
    },

    async store(req,res){
        const patients = await Patient.create(req.body);
        return res.json(patients);
    },

    async update(req,res){
        const patients = await Patient.findByIdAndUpdate(req.params.id,req.body,{new: true});
        return res.json(patients);  
    },

    async destroy(req,res){
        await Patient.findByIdAndRemove(req.params.id);
        //retorna msg de deletado com sucesso sem conteudo.
        return res.send();
    }
};
