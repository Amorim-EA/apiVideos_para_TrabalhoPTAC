const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.post('/video', userController.createVideo);
routes.get('/video/:id', userController.findVideo);
routes.get('/videos', userController.findVideos);

module.exports = routes;
