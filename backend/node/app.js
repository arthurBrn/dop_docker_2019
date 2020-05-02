const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '.env'),
});
const port = process.env.PORT_NODE_SERVICE;

app.get('/', (req, res) => {
    res.send('On racine');
});

app.listen(port, () => {
    console.log("Server running on port ${port} !");
});