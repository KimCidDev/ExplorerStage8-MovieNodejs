const { Router } = require('express');

const userRoutes = Router();

userRoutes.get('/', (request, response) => {
  response.status(201).json({
    favouriteMovie: 'O Alto da Compadecida'
  });
});

module.exports = userRoutes;
