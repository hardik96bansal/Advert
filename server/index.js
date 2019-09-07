const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./common/config/env.config.js')
const UserRouter = require('./router/users.router')

const app = express()
const port = config.port;
const hostname = config.hostname;

app.use(bodyParser.json())
app.use(morgan('dev'))

app.listen(port, hostname, ()=> {
    console.log(`Server listening at ${hostname}:${port}`)
})


