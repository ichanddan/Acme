const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const config = require('./config');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit:'150mb' }));

app.use('/api', router);

app.listen(config.PORT, ()=>{
    console.log(`Server is running at ${config.PORT}`)
})