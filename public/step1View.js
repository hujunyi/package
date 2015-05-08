var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  template: _.template($('#step1').html()),
  render: function(){
    this.$el.html(this.template());
    this.$('select').select2({
      minimumResultsForSearch: Infinity,
      width: 150
    });
  },
  leftPane: function(){
    return this.$('.pane-left');
  },
  rightPane: function(){
    return this.$('.pane-right');
  },
  goStep2: function(e){
    e.preventDefault();
  }
});
