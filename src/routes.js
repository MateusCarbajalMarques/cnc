const express = require('express');
const SessionControle = require('./controllers/SessionController');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SpotControle = require('./controllers/SpotController');
const DashboardControle = require('./controllers/DashboardController');
const BookingControle = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', function(req, res) {
  res.send("BackEnd")
});

routes.post('/session', SessionControle.store);

routes.get('/spots',  SpotControle.index);

routes.post('/spots',upload.single('thumbnail'), SpotControle.store);

routes.get('/dashboard', DashboardControle.show);

routes.post('/spots/:spot_id/bookings',BookingControle.store);
module.exports = routes; 