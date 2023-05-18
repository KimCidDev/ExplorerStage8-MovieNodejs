require('express-async-errors');

const appError = require('./utils/appError');

const express = require('express');

const database = require('./database/sqlite');

const app = express();

const routes = require('./routes');

const PORT = 3334;

database();

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof appError) {
    return response.status(error.statusCode).json({
      error: 'error',
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
