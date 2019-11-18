const retirada = require('../aplication/RetiradaApl.js');

module.exports = {
    async index(req,res){
        return retirada.index(req,res);
    },

    async show(req,res){
        return retirada.show(req,res);
    },

    async store(req,res){
        return retirada.store(req,res);
    },

    async update(req,res){
        return retirada.update(req,res);  
    },

    async destroy(req,res){
        return retirada.destroy(req,res);
    }
};
