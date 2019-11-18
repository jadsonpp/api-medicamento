const mongoose = require('mongoose');
const RetiradaSchema = new mongoose.Schema ({
    
    medicamentoID: {
        type:String,
        required: true,
    },
<<<<<<< HEAD
    quantidade: {
        type:Number,
        required: true,
    },
=======
>>>>>>> 1fd38cc4c7f9d2837b3aad3e2569cabb45cb85ba
    date: {
        type: Date,
        default: Date.now(),
    },
    
});

mongoose.model('Retirada',RetiradaSchema);