const express = require('express');

const routes = express.Router();
const ongController = require('./controllers/ongsController');
const incidendController = require('./controllers/incidentsController');
routes.post('/ongs', ongController.create);

routes.get('/ongs', ongController.index);

routes.post('/incidents', incidendController.create);

routes.get('/incidents', incidendController.index);

routes.delete('/incidents/:id', incidendController.delete);

module.exports = routes;
