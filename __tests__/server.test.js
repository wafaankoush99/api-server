
'use strict';

/* test bad routes and methods */

const server = require('../src/server');
const super_goose = require('@code-fellows/supergoose');
const request = super_goose(server.server);
const mongoose = require('mongoose');
require('dotenv').config();

describe('test server', ()=>{

  // afterAll(()=>{
  //   mongoose.connection.close();
  // });
  
  it('should get status 404 on a bad route', async ()=>{
    const response = await request.get('/api/v1/badRoute');
    expect(response.status).toBe(404);
  });

  let arrayOfRoutes = ['food', 'clothes'];

  for (let i = 0; i<arrayOfRoutes.length; i++){
    it('should get status 404 on a bad method', async ()=>{
      const response = await request.delete(`/api/v1/${arrayOfRoutes[i]}`);
      expect(response.status).toBe(404);
    });
    it('should get status 404', async ()=>{
      const response = await request.put(`/api/v1/${arrayOfRoutes[i]}`);
      expect(response.status).toBe(404);
    });
  }
});