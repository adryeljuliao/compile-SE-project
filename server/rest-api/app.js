const express = require('express');
const app = express();

const changeRouter = require('./api/routes/changes');
const compileRouter = require('./api/routes/compiles');

app.use('/changes', changeRouter)
app.use('/compiles', compileRouter)



module.exports = app;  