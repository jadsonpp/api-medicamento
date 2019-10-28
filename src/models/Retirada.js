const mongoose = require('mongoose');
const RetiradaSchema = new mongoose.Schema ({
    date: {
        type: Date,
        default: Date.now(),
    },
    
});

mongoose.model('Retirada',RetiradaSchema);