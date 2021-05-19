'use strict';

/* Application dependencies */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const server = express();

/* Import files */

const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');

/* Application setUp */

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

/* Route paths */

server.use('/api/v1/food', foodRoutes);
server.use('/api/v1/clothes', clothesRoutes);

/* Error handlers */

server.use(errorHandler);
server.use('*', notFoundHandler);

/* Export server.js */

module.exports = {
  server: server,
  start: (PORT) =>{
    server.listen(PORT, ()=> console.log(`Up To PORT ${PORT}`));
  },
};