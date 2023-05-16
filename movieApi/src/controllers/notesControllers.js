const knex = require('../database/knex');

class NotesControllers {
  async createNote(request, response) {
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;

    const [note_id] = await knex('movieNotes').insert({
      title,
      description,
      rating,
      user_id
    });

    const tagInserted = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      };
    });

    await knex('movieTags').insert(tagInserted);

    return response
      .status(201)
      .json({ title: title, description: description, rating: rating });
  }
}

module.exports = NotesControllers;
