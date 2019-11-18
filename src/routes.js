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
<<<<<<< HEAD
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
=======
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
>>>>>>> 1fd38cc4c7f9d2837b3aad3e2569cabb45cb85ba

module.exports = routes;