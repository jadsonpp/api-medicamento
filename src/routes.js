const express = require('express');
const routes = express.Router();
const MedicineController = require('./controllers/MedicineController');
const PatientController = require('./controllers/PatientController');
const RetiradaController = require('./controllers/RetiradaController');

//rotas medicines
routes.get('/medicines',MedicineController.index);
routes.get('/medicines/:id',MedicineController.show);
routes.post('/medicines/',MedicineController.store);
routes.delete('/medicines/:id',MedicineController.destroy);
routes.put('/medicines/:id',MedicineController.update);
//routes patients
routes.get('/patients',PatientController.index);
routes.get('/patients/:id',PatientController.show);
routes.post('/patients',PatientController.store);
routes.delete('/patients/:id',PatientController.destroy);
routes.put('/patients/:id',PatientController.update);
//routes retirada
routes.get('/retirada',RetiradaController.index);
routes.get('/retirada/:id',RetiradaController.show);
routes.post('/retirada',RetiradaController.store);
routes.delete('/retirada/:id',RetiradaController.destroy);
routes.put('/retirada/:id',RetiradaController.update);

module.exports = routes;