const express = require('express');

const routes = express.Router();
const ongController = require('./controllers/ongsController');
const incidendController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

routes.post('/sessions', sessionController.create);

routes.post('/ongs', ongController.create);

routes.get('/ongs', ongController.index);

routes.post('/incidents', incidendController.create);

routes.get('/incidents', incidendController.index);

routes.delete('/incidents/:id', incidendController.delete);

routes.get('/profile', profileController.index);
module.exports = routes;
