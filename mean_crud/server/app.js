require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');
var app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use('/', function(req, res){
//     res.send('Hello World');
// });

app.use('/api', rtsIndex);


app.listen(4000, ()=> console.log('Server connected and runs at port : 4000'));