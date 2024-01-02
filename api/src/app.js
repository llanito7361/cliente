const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
require('./db.js');

const server = express();
server.name = 'API';

// Configuración de CORS
// const corsOptions = {
//   origin: 'https://pi-videogames-front-silk.vercel.app',
//   credentials: true,
//   methods: 'GET, POST, OPTIONS, PUT, DELETE',
//   allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
// };

server.use(cors());

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' })); 
server.use(cookieParser());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://deploy-ebon-psi.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', router);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



module.exports = server;
