const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(morgan(':method :url :status :response-time ms'));
app.use(cors());

//Root App
app.get('/' , (req , res) => {
    res.send('<h1>root application</h1>')
})


module.exports = app;


