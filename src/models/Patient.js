const mongoose = require ('mongoose');
//const mongoosePaginate = require('mongoose-paginate');
const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    susCard: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});
//ProductSchema.plugin(mongoosePaginate);
mongoose.model('Patient',PatientSchema);