const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
const ProductRoutes = require('./routes');

// Set up the express app

const app = express();
// Log requests to the console.

// var models = require('./models');
const companyController = require('./controllers').company;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.get('/api', (req, res) => {
  return res.status(200).send({
    message: 'Welcome to the Todos API!'
  });
});

app.get('/api/compay', companyController.create);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server started');
});
module.exports = app;
