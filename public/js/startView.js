var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
module.exports = Backbone.View.extend({
  template: _.template($('#start').html()),
  render: function(){
    this.$el.html(this.template());
  }
});
