const { Router } = require('express');

const notesRoutes = Router();

const notesControllers = require('../controllers/notesControllers');
const NotesControllers = new notesControllers();

notesRoutes.post('/:user_id', NotesControllers.createNote);

module.exports = notesRoutes;
