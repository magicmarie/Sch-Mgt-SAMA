var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

const route = require('./routes/route');

var app = express();

//connect to the db
mongoose.connect('mongodb://127.0.0.1/sch-mgt');

mongoose.connection.on("connected", function () {
    console.log("connected to database");
});
mongoose.connection.on("error", function (err) {
    if (err) { console.log("Error in connecting to database"); }
});


//apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'client/dist')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.use('/api/v1', route);


app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/client/dist/index.html"));
})



app.listen(3000, function () {
    console.log('Server started on port 3000');
});