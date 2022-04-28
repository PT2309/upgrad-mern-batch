const express = require('express');
const HomeController = require('../controllers/HomeController');
const UploadController = require('../controllers/UploadController');
const routes = express.Router();

routes.get('/', HomeController.getHome);

routes.post('/upload', UploadController.uploadFile);

module.exports = routes;