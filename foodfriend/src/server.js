const express = require('express');
const morgan = require('morgan');
const { Prohairesis } = require('prohairesis');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app
    .use(express.static('public'))
    .use(morgan('dev'))
npm
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .listen(port, () => console.log('Server listening to port 8080'))

export default Serverrrrrr;