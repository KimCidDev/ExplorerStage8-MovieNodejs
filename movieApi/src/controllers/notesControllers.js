const knex = require('../database/knex');

class NotesControllers {
  async createNote(request, response) {
    const { title, description, rating } = request.body;
    const { user_id } = request.params;

    await knex('movieNotes').insert({
      title,
      description,
      rating,
      user_id
    });

    return response
      .status(201)
      .json({ title: title, description: description, rating: rating });
  }
}

module.exports = NotesControllers;
