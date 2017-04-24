const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

let PORT = 8080;

app.use(express.static(__dirname + '/app'));

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});