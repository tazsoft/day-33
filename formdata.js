var express=require('express');
var multer = require('multer');

var Multer=multer();

var app=express();

app.use(Multer.array())
app.use(express.static('public'))

app.post('/',function(req,res){

    let jsondata=req.body;
    res.send(JSON.stringify(jsondata))
})

app.listen(8986,function(){
    console.log("success")
})