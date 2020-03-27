const express = require('express');

const routes = express.Router();
const ongController = require('./controllers/ongsController');
routes.post('/ongs', ongController.create);

routes.get('/ongs', ongController.index);
module.exports = routes;
