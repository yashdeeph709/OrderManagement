var http=require('http');
var express=require('express');
var app=express();
app.use(express.static('./'));
app.listen(3000);
