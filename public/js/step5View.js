var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
module.exports = Backbone.View.extend({
  template: _.template($('#step5').html()),
  render: function(){
    this.$el.html(this.template());
  },
  leftPane: function(){
    return this.$('.pane-left');
  },
  rightPane: function(){
    return this.$('.pane-right');
  }
});
