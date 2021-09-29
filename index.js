'use strict';
require('dotenv').config();

const server = require('./src/server');
const { db } = require('./src/models/index');

console.log("-------------------------------1")


db.sync().then(() => {
    server.start(process.env.PORT || 5000);
}).catch(console.error);