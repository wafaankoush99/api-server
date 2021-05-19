'use strict';

/* test the correct status codes and returned data for each REST route */

const server = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.server);
const mongoose = require('mongoose');
require('dotenv').config();

let clothes = {
  type: 'dress',
  color: 'red',
};

let clothesEditing = {
  type: 'dress',
  color: 'black',
};

describe('api server', () => {
  let id;
  it('should create a new item using POST req', async () => {
    const res = await request.post(`/api/v1/clothes`).send(clothes);
    expect(res.status).toEqual(201);
    expect(res.body[Object.keys(clothes)[1]]).toEqual(Object.values(clothes)[1]);
    expect(res.body[Object.keys(clothes)[2]]).toEqual(Object.values(clothes)[2]);
    expect(res.body._id.length).toBeGreaterThan(0);

    id = res.body._id;
  });

  it('should update a item using PUT req', async () => {
    const res = await request.put(`/api/v1/clothes/${id}`).send(clothesEditing);
    expect(res.status).toEqual(200);
    expect(res.body[Object.keys(clothesEditing)[1]]).toEqual((Object.values(clothesEditing)[1]));

  });

  it('should Read a list of records using GET', async () => {
    const res = await request.get(`/api/v1/clothes`);
    expect(res.status).toBe(200);
    expect(res.text.length).toBeGreaterThan(0);
  });

  it('should do not read a record using DELETE', async()=>{
    const res = await request.delete(`/api/v1/clothes/${id}`).send(clothes);
    expect(res.status).toBe(200);
  });
});

