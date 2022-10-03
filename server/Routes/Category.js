const express = require("express");
const category_route = express();

const bodyParser = require('body-parser');
category_route.use(bodyParser.json());
category_route.use(bodyParser.urlencoded({extended:true}));
const controller = require('../Controller/Category')


category_route.post('/add-category', controller.addCategory);


module.exports = category_route;