'use strict';

/* Application Setup */

const express = require('express');

const DataManager = require('../models/dataManager');
const ClothesModel = require('../models/clothes');
const dataManager = new DataManager(ClothesModel);

const router = express.Router();

/* clothes ROUTES */

router.get('/', getClothes);
router.get('/:id', getClothesID);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

/* REST route handlers  */

/**
 * Get All Of The Records From DB
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */

async function getClothes(req, res, next) {
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

async function getClothesID(req, res, next) {
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

async function createClothes(req, res, next) {
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

async function updateClothes(req, res, next) {
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

async function deleteClothes(req, res, next) {
  try {
    const resObj = await dataManager.delete(req.params.id);
    res.json(resObj);
  }
  catch (e) {next(e);}
  
}

/* Export */

module.exports = router;