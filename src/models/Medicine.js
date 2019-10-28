const mongoose = require ('mongoose');
//const mongoosePaginate = require('mongoose-paginate');
const MedicineSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: true,
    },
    // Quantidade
    amount: {
        type: Number,
        //required: true,
    },
    // Quantidade Minima
    minAmount: {
        type: Number,
        //required: true,
    },
    //Lote
    lot: {
        type: String,
        //required: true,
    },
    // Validade
    validity: {
        type: Date,
        //required: true,
    },
    description: {
        type: String,
        //required: true,
    },
});
//ProductSchema.plugin(mongoosePaginate);
mongoose.model('Medicine',MedicineSchema);