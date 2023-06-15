const { Router } = require('express');

const UserRoutes = require('./users.routes');
const NotesRoutes = require('./notes.routes');
const SessionsRoutes = require('./sessions.routes');

const routes = Router();

routes.use('/users', UserRoutes);
routes.use('/notes', NotesRoutes);
routes.use('/sessions', SessionsRoutes);

// routes. use('tags', TagsRoutes);

module.exports = routes;
