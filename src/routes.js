const express = require('express');
const routes = express.Router();
const MedicineController = require('./controllers/MedicineController');
const PatientController = require('./controllers/PatientController');
const RetiradaController = require('./controllers/RetiradaController');

//rotas medicines
routes.get('/medicines',MedicineApl.index);
routes.get('/medicines/:id',MedicineApl.show);
routes.post('/medicines/',MedicineApl.store);
routes.delete('/medicines/:id',MedicineApl.destroy);
routes.put('/medicines/:id',MedicineApl.update);
//routes patients
routes.get('/patients',PatientApl.index);
routes.get('/patients/:id',PatientApl.show);
routes.post('/patients',PatientApl.store);
routes.delete('/patients/:id',PatientApl.destroy);
routes.put('/patients/:id',PatientApl.update);
//routes retirada
routes.get('/retirada',RetiradaApl.index);
routes.get('/retirada/:id',RetiradaApl.show);
routes.post('/retirada',RetiradaApl.store);
routes.delete('/retirada/:id',RetiradaApl.destroy);
routes.put('/retirada/:id',RetiradaApl.update);

module.exports = routes;