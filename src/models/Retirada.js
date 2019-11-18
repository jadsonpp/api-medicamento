const mongoose = require('mongoose');
const RetiradaSchema = new mongoose.Schema ({
    
    medicamentoID: {
        type:String,
        required: true,
    },
    quantidade: {
        type:Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    
});

mongoose.model('Retirada',RetiradaSchema);