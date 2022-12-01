var express=require('express');
var bodyparser=require('body-parser');
let app=express();

app.use(bodyparser.json);

app.get('/',function(req,res){
let jsondata=req.body;
let jsonstring=JSON.stringify(jsondata);

res.body(jsonstring);
})

app.listen(3297,function(){
    console.log("success");
})