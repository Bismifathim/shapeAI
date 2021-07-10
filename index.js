const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;


  
app.use(bodyParser.urlencoded({ extended:true}));
app.get("/",function (req, res){
    res.sendfile(__dirname + "/index.html");

});
app.post("/", function (req, res){
    var age= Number(req.body.n1)/ 15;
    res.send("age of my dog is : " +age + "dog year")

});


app.listen(port);
