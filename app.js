var express = require('express');
var handlebars  = require('express-handlebars').create({
  defaultLayout: 'main',
});
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname));
var callback = function(req,res){
  res.render('index');
};
app.get('*', callback);
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate. ');
});


