const { Router } = require('express');

const userRoutes = Router();

userRoutes.get('/users', (request, response) => {
  response.status(201).json({
    favouriteMovie: 'taxiDriver'
  });
});

module.exports = userRoutes;
