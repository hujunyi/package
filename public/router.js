var Backbone = require('backbone');
var initView = require('./initView');
var startView = require('./startView');
var step1View = require('./step1View');
var step2View = require('./step2View');
var step3View = require('./step3View');
var step4View = require('./step4View');
var step5View = require('./step5View');
var resultView = require('./resultView');
module.exports = Backbone.Router.extend({
  initialize: function(options){
    this.appView = options.appView;
  },
  routes: {
    '':'init',
    'start': 'start',
    'step1': 'step1',
    'step2': 'step2',
    'step3': 'step3',
    'step4': 'step4',
    'step5': 'step5',
    'result': 'result'
  },
  init: function(){
    this.appView.showMain(new initView);
  },
  start: function(){
    this.appView.showMain(new startView);
  },
  step1: function(){
    this.appView.showTwoPanes(new step1View);
  },
  step2: function(){
    this.appView.showTwoPanes(new step2View);
  },
  step3: function(){
    this.appView.showTwoPanes(new step3View);
  },
  step4: function(){
    this.appView.showTwoPanes(new step4View);
  },
  step5: function(){
    this.appView.showTwoPanes(new step5View);
  },
  result: function(){
    this.appView.showMain(new resultView);
  }
});

