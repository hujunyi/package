var Backbone = require('backbone');
var _ = require('underscore');
var $ = jQuery = require('jquery');
var ProgressBar = require('progressbar.js')
require('bootstrap');
module.exports = Backbone.View.extend({
  template: _.template($('#result').html()),
  render: function(data){
    var budget = 0;
    var time = 0;
    var param = 1;
    switch(data.need){
      case 'website': 
      case 'app':
        budget = 35;
        time = 4;
        data.need = 'APP';
        break;
      case 'both':
        time = 8;
        budget = 60;
        data.need = '网站、APP组合';
        break;
      default: 
        budget = 35;
        data.need = '网站';
        break;
    }
    switch(data.objective){
      case '自我推广':
        budget += 10;
        time += 2;
        break;
      case '俘获用户':
        budget += 15;
        time += 3;
        break;
      case '全方位出击':
        budget += 25;
        time += 4;
        break;
      default: 
        budget += 10;
        time += 2;
        break;
    }
    switch(data.quality){
      case '超高性价比':
        param = 1.5;
      case '美到极致':
        param = 2;
      default:
        param = 1.5;
    }
    data.budget = budget * param; 
    data.time = time;
    this.$el.html(this.template(data));
    this.initProgress();
  },
  initProgress: function(){
    var budget = new ProgressBar.Circle(this.$('#budget').get(0),{
      color: '#85E4E5',
      strokeWidth: 8,
    });
    var work = new ProgressBar.Circle(this.$('#work').get(0),{
      color: '#EAD083',
      strokeWidth: 8,
    });
    var candidates = new ProgressBar.Circle(this.$('#candidates').get(0),{
      color: '#F6B6B6',
      strokeWidth: 8,
    });
    setTimeout(function(){
      budget.animate(1);
    },200);
    setTimeout(function(){
      work.animate(1);
    },400);
    setTimeout(function(){
      candidates.animate(1);
    },400);
  }
});
