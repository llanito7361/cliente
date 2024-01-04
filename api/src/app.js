const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
require('./db.js');

const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// Configuración de CORS usando cors middleware
server.use(cors({
  origin: [
    'https://deploy-pgstcmwbj-llanito7361.vercel.app',
    'https://deploy-ebon-psi.vercel.app',
  ],
  credentials: true,
}));

server.use('/', router);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
