'use strict';
const express = require('express');
const router = express.Router();
const {products} = require('../models/index');

router.get('/products', getproducts);
router.get('/products/:id', getOneproducts);
router.post('/products', createproducts);
router.put('/products/:id', updateproducts);
router.delete('/products/:id', deleteproducts);

async function getproducts(req, res) {
    let product = await products.findAll();
    res.status(200).json(product);
}
async function getOneproducts(req, res) {
    const id = parseInt(req.params.id); 
    let product = await products.findOne({ where: {id: id} });
    res.status(200).json(product);
}
async function createproducts(req, res) {
    let newproducts = req.body;
    let product = await products.create(newproducts);
    res.status(200).json(product);
}
async function updateproducts(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let found = await products.findOne({ where: {id: id} });
    let updatedproducts = await found.update(obj);
    res.status(200).json(updatedproducts);
}
async function deleteproducts(req,res) {
    let id = parseInt(req.params.id);
    let deletedproducts = await products.destroy({where: {id: id}});
    res.status(204).json(deletedproducts);
}

module.exports = router;