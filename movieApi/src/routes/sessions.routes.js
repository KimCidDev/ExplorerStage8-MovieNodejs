const { Router } = require('express');

const sessionsRoutes = Router();

const sessionsControllers = require('../controllers/sessionsControllers');
const SessionsControllers = new sessionsControllers();

sessionsRoutes.post('/:user_id', SessionsControllers.createNote);

module.exports = sessionsRoutes;
