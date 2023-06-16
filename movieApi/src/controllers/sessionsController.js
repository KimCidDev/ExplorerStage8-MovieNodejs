const knex = require('../database/knex');
const AppError = require('../utils/appError');
const { compare } = require('bcryptjs');

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex('users').where({ email }).first();

    if (!user) {
      throw new AppError('seu usuário comeu xis salada', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('sua senha é inválida', 401);
    }

    return response.json(user);
  }
}

module.exports = SessionsController;
