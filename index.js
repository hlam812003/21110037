const express = require('express');
const app = express();
const router = require('./routes/index');
const logger = (req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
};

app.use(express.json());
app.use(logger);
app.use('/', router);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
