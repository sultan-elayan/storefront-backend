'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const productsRoutes = require('./routes/products');
const categoriesRouter = require('./routes/categories')
const cors = require('cors');

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(productsRoutes);
app.use(categoriesRouter);

app.get('/', (req,res)=>{
    res.send('im live')
})

let  start = (port)=> {
    app.listen(port, ()=> console.log(`listening to port : ${port}`))
}
console.log("-------------------------------2")

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}

