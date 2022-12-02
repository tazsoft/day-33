var express=require('express');
// var bodyparser=require('body-parser');
var bodyparser=require('body-parser')
let app=express();

app.use(bodyparser.json());

app.get('/',function(req,res){
let jsondata=req.body;
let jsonstring=JSON.stringify(jsondata);

res.send(jsonstring);
})

app.listen(329,function(){
    console.log("success");
})