var Backbone = require('backbone');
var AppView = require('./appView');
var Package = require('./package');
var package = new Package(); 
var Router = require('./router');
var appView = new AppView({model: package});
var router = new Router({appView : appView});
Backbone.history.start();
window.addEventListener("hashchange", function(e) {

});
