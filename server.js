'use strict'
const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');
const logger      = require('morgan')

const app         = express();

const _port       = process.argv[2]|| process.env.PORT||3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', function(req, res){
  return res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('*', function(req, res){
  return res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// turn server on at port 3000
app.listen(_port , ()=>
  console.log(`server here! listening on`, _port )
);
