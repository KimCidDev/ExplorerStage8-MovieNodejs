const express = require('express');

const app = express();

const routes = require('./routes');

const PORT = 3334;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

app.use(express.json());
app.use(routes);
