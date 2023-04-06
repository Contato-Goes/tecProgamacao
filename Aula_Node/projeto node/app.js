//fazer a imoportação de express
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const router = require('./routes/index')


// Configuração basica do app
const app = express() 
app.use('/', router) // passamos apenas uma rota, que ja foi criada

module.exports = app; // exportamos o app pois iremos usa-lo no servidor