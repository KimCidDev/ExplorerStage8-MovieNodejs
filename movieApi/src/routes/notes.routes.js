const { Router } = require('express');

const notesRoutes = Router();

const notesControllers = require('../controllers/notesControllers');
const NotesControllers = new notesControllers();

userRoutes.post('/', NotesControllers.createNote);

module.exports = notesRoutes;
