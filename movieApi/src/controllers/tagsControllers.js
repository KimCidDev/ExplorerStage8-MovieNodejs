const knex = require('../database/knex');

class TagsControllers {
  async createTag(request, response) {
    const { name } = request.body;
  }
}
