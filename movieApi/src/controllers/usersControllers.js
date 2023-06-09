const AppError = require('../utils/appError');


const knex = require('../database/knex');

const { hash, compare } = require('bcryptjs');

class UserControllers {
  async createUser(request, response) {
    const { name, email, password } = request.body;

    // NÃO ESQUECER DE TRABALHAR NO APPERROR PARA LIDAR "DE MANEIRA AMIGÁVEL" COM OS ERROS;

    // const database = await knex();

    const hashedPassword = await hash(password, 8);

    await knex('users').insert({
      name,
      email,
      password: hashedPassword
    });

    return response
      .status(201)
      .json({ name: name, email: email, password: hashedPassword });
  }
}

module.exports = UserControllers;
