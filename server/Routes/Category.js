const express = require("express");
const category_route = express();

const bodyParser = require('body-parser');
category_route.use(bodyParser.json());
category_route.use(bodyParser.urlencoded({extended:true}));
const controller = require('../Controller/Category');
const Multer = require('multer')
const Path = require('path');
const multer = require("multer");

category_route.use(express.static('public'));
 const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,Path.join(__dirname,'../public/category'),function(err,sucess){
            if(err){
                throw err;
            }
        });
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+ file.originalname;
        cb(null,name, function(err, sucess){
            if(err){
                throw err;
            }
        });
    } 
 });

 const upload = multer({storage:storage});
 


category_route.post('/add-category',upload.array('icon'), controller.addCategory);


module.exports = category_route;