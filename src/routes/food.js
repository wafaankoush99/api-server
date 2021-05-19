'use strict';

/* Application Setup */

const express = require('express');

const DataManager = require('../models/dataManager');
const FoodModel = require('../models/food');

const dataManager = new DataManager(FoodModel);

const router = express.Router();

/* food ROUTES */

router.get('/', getFood);
router.get('/:id', getFoodID);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

/* REST route handlers  */

/**
 * Get All Of The Records From DB
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

async function getFood(req, res, next) {
  try {
    const resObj = await dataManager.read();
    res.json(resObj);
  }
  catch (e) {next(e);}
}

/**
 * Get The Record From DB That Related To ID
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

async function getFoodID(req, res, next) {
  try {
    const resObj = await dataManager.read(req.params.id);
    res.json(resObj);
  }
  catch (e) {next(e);}
}

/**
 * Create And Add A Record To DB
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

async function createFood(req, res, next) {
  try {
    const data = req.body;
    const resObj = await dataManager.create(data);
    res.status(201).json(resObj);
  }
  catch (e) {next(e);}
}

/**
 * Update The Record That Related To ID
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

async function updateFood(req, res, next) {
  try {
    const data = req.body;
    const resObj = await dataManager.update(req.params.id, data);
    res.json(resObj);
  }
  catch (e) {next(e);}
}

/**
 * Delete The Record That Related To ID
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

async function deleteFood(req, res, next) {
  try {
    const resObj = await dataManager.delete(req.params.id);
    res.json(resObj);
  }
  catch (e) {next(e);}

}

/* Export */

module.exports = router;