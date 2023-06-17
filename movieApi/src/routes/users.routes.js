const { Router } = require('express');

const userRoutes = Router();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const userControllers = require('../controllers/usersControllers');
const UserControllers = new userControllers();

userRoutes.post('/', UserControllers.createUser);

module.exports = userRoutes;
