var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var select2 = require('select2');

Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: $('#main'),
  events: {
    'click a[href="#step2"]': 'step2',
    'click a[href="#step3"]': 'step3',
    'click a[href="#step4"]': 'step4',
    'click a[href="#step5"]': 'step5',
    'click a[href="#result"]': 'result'
  },
  step2: function(e){
    if(this.$('#type').length!==0){
      this.model.set('type', this.$('#type').val());
      this.model.set('category',this.$('#category').val());
    }
  },
  step3: function(e){
    this.model.set('phase',$(e.currentTarget).data('phase'));
  },
  step4: function(e){
    this.model.set('need',$(e.currentTarget).data('need'));
  },
  step5: function(e){
    this.model.set('objective',$(e.currentTarget).data('objective'));
  },
  result: function(e){
    this.model.set('quality',$(e.currentTarget).data('quality'));
  },
  initialize: function(){
    this.twoPane = false;
  },
  showMain:function(view){
    this.twoPane = false;
    this.animate = false;
    if(this.view){
      this.view.remove();
    }
    this.view = view;
    this.view.render(this.model.toJSON());
    $('#main').html(this.view.el);
  },
  showTwoPanes: function(view){
    if(!this.animate){
      this.animate = true;
    }
    if(!this.twoPane){
      this.twoPane = true;
      $('#main').html('<div id="left"></div><div id="right"></div>');
    }
    if(this.view){
      this.view.remove();
    }
    this.view = view;
    this.view.render();
    this.showLeftPane(this.view.leftPane());
    this.showRightPane(this.view.rightPane());
  },
  showLeftPane: function(leftPane){
    var $pane = $('#left').find('.pane-inner');
    var $left = $('#left');
    if($pane.length!=0){
      leftPane.addClass('left-next-pane');
      $left.append(leftPane);
      setTimeout(function(){
        $left.children().addClass('animate__item--next');
        $left.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
          $left.children().removeClass('animate__item--next');
          leftPane.removeClass('left-next-pane');
          $pane.remove();
        });
      },200);
    } else {
      $('#left').html(leftPane);
    }
  },
  showRightPane: function(rightPane){
    var $pane = $('#right').find('.pane-inner');
    var $right = $('#right');
    if($pane.length!=0){
      rightPane.addClass('right-next-pane');
      $right.append(rightPane);
      setTimeout(function(){
        $right.children().addClass('animate__item--next');
        $right.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
          $right.children().removeClass('animate__item--next');
          rightPane.removeClass('right-next-pane');
          $pane.remove();
        });
      },200);
    } else {
      $('#right').html(rightPane);
    }
  }
});
