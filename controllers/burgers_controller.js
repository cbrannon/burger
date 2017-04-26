const express = require("express");
const app = express();

module.exports = function() {
    require('../models/burger')();
    
    app.get('/', function(req, res) {
        console.log("test");
        selectAll();
    });

    app.post('/', function(req, res) {
        insertOne(req.body.burgerName);
    });

    app.put('/', function(req, res) {
        updateOne(req.body.burgerName);
    });

    app.get('/burger', function(req, res) {
        console.log("burger");
    });
}
