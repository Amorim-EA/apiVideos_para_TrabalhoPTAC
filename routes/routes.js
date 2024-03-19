const express = require('express');
const routes = express.Router();

const videoController = require('../controller/videoController');

routes.post('/video', videoController.createVideo);
routes.get('/video/:id', videoController.findVideo);
routes.get('/videos', videoController.findVideos);
routes.put('/video/:id', videoController.updateVideo);
routes.delete('/video/:id', videoController.deleteVideo);

module.exports = routes;
