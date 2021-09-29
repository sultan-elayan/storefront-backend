'use strict';
const express = require('express');
const router = express.Router();
const {categories} = require('../models/index');

router.get('/categories', getcategories);
router.get('/categories/:id', getOnecategories);
router.post('/categories', createcategories);
router.put('/categories/:id', updatecategories);
router.delete('/categories/:id', deletecategories);

async function getcategories(req, res) {
    let getcategorie = await categories.findAll();
    res.status(200).json(getcategorie);
}
async function getOnecategories(req, res) {
    const id = parseInt(req.params.id); 
    let getcategorie = await categories.findOne({ where: {id: id} });
    res.status(200).json(getcategorie);
}
async function createcategories(req, res) {
    let newcategories = req.body;
    let getcategorie = await categories.create(newcategories);
    res.status(200).json(getcategorie);
}
async function updatecategories(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let found = await categories.findOne({ where: {id: id} });
    let updatedcategories = await found.update(obj);
    res.status(200).json(updatedcategories);
}
async function deletecategories(req,res) {
    let id = parseInt(req.params.id);
    let deletedcategories = await categories.destroy({where: {id: id}});
    res.status(204).json(deletedcategories);
}

module.exports = router;