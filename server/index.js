var express = require("express");

var app =  express();
app.use(express.json());
let cors = require("cors")();

app.use(cors);

require("./route/index")(app);
app.listen(3000, () => {


});