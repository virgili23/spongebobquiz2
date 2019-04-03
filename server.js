var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var jsonParser = bodyParser.json();

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(bodyParser.json({ type: 'application/*+json' }));

// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// app.use(bodyParser.text({ type: 'text/html' }));

///////////////////////////////////////////

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

/////////////////////////////////////////////

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App Listening on PORT: " + PORT);
});