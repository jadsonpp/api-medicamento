const Medicine = require('./aplication/MedicineApl.js');

module.exports = {
    async index(req,res){
        return Medicine.index(req,res);
    },

    async show(req,res){
        return Medicine.show(req,res);
    },

    async store(req,res){
        return Medicine.store(req,res);
    },

    async update(req,res){
        return Medicine.update(req,res);  
    },

    async destroy(req,res){
        return Medicine.destroy(req,res);
    }
};
