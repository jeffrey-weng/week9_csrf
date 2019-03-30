
var path=require('path'),
    express=require('express');
	
	
module.exports.init = function(){

var app=express();

app.use('/',express.static('client'));

    app.use('/*',function(req,res,next){
	 res.redirect('/');
  });

return app;
};