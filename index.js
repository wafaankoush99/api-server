'use strict';

/* Load Environment Variables from env. */

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGOOSE_URL,
    {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    server.start(process.env.PORT);

  })
  .catch((e)=>{console.log('Connection Error', e.message);});
