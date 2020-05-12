const express = require('express');
const crypto = require('crypto');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const criptoController = require('./controllers/criptoController');
const encriptController = require('./controllers/encriptController');
const decriptController = require('./controllers/decriptController');

const routes = express.Router();

routes.post('/encript', encriptController.encript);
routes.post('/decript', decriptController.decript);

routes.delete('/cripto', criptoController.delete);
routes.post('/cripto', criptoController.create);
routes.get('/cripto', criptoController.index);

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;