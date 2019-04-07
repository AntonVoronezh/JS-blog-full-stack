const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRouter = require('./routes/post');
const path = require('path'); 
const keys = require('./keys'); 

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname, 'client');








