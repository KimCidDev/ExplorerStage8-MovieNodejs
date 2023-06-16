const { Router } = require('express');

const sessionsRoutes = Router();

const sessionsControllers = require('../controllers/sessionsController');
const SessionsControllers = new sessionsControllers();

sessionsRoutes.post('/', SessionsControllers.create);

module.exports = sessionsRoutes;
