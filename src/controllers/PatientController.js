const paciente = require('../aplication/PatientApl.js');

module.exports = {
    async index(req,res){
        return paciente.index(req,res);
    },

    async show(req,res){
        return paciente.show(req,res);
    },

    async store(req,res){
        return paciente.store(req,res);
    },

    async update(req,res){
        return paciente.update(req,res);  
    },

    async destroy(req,res){
        return paciente.destroy(req,res);
    }
};
