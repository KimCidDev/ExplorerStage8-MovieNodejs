const express = require('express');

const app = express();

const PORT = 3334;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

app.use(express.json());
app.get('/users', (request, response) => {
  response.status(201).json({
    favouriteMovie: 'apocalypseNow'
  });
});
