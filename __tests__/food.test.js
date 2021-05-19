'use strict';

/* test the correct status codes and returned data for each REST route */

const server = require('../src/server');
const super_goose = require('@code-fellows/supergoose');
const request = super_goose(server.server);
const mongoose = require('mongoose');
require('dotenv').config();


let food = {
  dish: 'Mansaf',
  number: '5',
};

let foodEditing = {
  dish: 'Mansaf',
  number: '7',
};

describe('api server', () => {
  let id;
  it('should create a new item using POST req', async () => {
    const res = await request.post(`/api/v1/food`).send(food);
    expect(res.status).toEqual(201);
    expect(res.body[Object.keys(food)[1]]).toEqual(Object.values(food)[1]);
    expect(res.body[Object.keys(food)[2]]).toEqual(Object.values(food)[2]);
    expect(res.body._id.length).toBeGreaterThan(0);
    id = res.body._id;
  });

  it('should update a item using PUT req', async () => {
    const res = await request.put(`/api/v1/food/${id}`).send(foodEditing);
    expect(res.status).toEqual(200);
    expect(res.body[Object.keys(foodEditing)[1]]).toEqual((Object.values(foodEditing)[1]));
  });

  it('should Read a list of records using GET', async () => {
    const res = await request.get(`/api/v1/food`);
    expect(res.status).toBe(200);
    expect(res.text.length).toBeGreaterThan(0);
  });

  it('should do not read a record using DELETE', async()=>{
    const res = await request.delete(`/api/v1/food/${id}`).send(food);
    expect(res.status).toBe(200);
  });
});

