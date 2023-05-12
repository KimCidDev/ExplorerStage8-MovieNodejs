const express = require('express');

const { Router } = require('express');

const app = Router();

app.get('/users', (request, response) => {
  response.status(201).json({
    favouriteMovie: 'taxiDriver'
  });
});
