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
        'click a[href="#result"]': 'result',
        'click #newproject': 'newproject'
    },
    step2: function (e) {
        if (this.$('#type').length !== 0) {
            this.model.set('type', this.$('#type').val());
            this.model.set('category', this.$('#category').val());
        }
    },
    step3: function (e) {
        this.model.set('phase', $(e.currentTarget).data('phase'));
    },
    step4: function (e) {
        this.model.set('need', $(e.currentTarget).data('need'));
    },
    step5: function (e) {
        this.model.set('objective', $(e.currentTarget).data('objective'));
    },
    result: function (e) {
        this.model.set('quality', $(e.currentTarget).data('quality'));
    },
    initialize: function () {
        this.twoPane = false;
    },
    showMain: function (view) {
        this.twoPane = false;
        this.animate = false;
        if (this.view) {
            this.view.remove();
        }
        this.view = view;
        this.view.render(this.model);
        $('#main').html(this.view.el);
    },
    showTwoPanes: function (view) {
        if (!this.animate) {
            this.animate = true;
        }
        if (!this.twoPane) {
            this.twoPane = true;
            $('#main').html('<div id="left"></div><div id="right"></div>');
        }
        if (this.view) {
            this.view.remove();
        }
        this.view = view;
        this.view.render();
        this.showLeftPane(this.view.leftPane());
        this.showRightPane(this.view.rightPane());
    },
    showLeftPane: function (leftPane) {
        var $pane = $('#left').find('.pane-inner');
        var $left = $('#left');
        if ($pane.length != 0) {
            leftPane.addClass('left-next-pane');
            $left.append(leftPane);
            setTimeout(function () {
                $left.children().addClass('animate__item--next');
                $left.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $left.children().removeClass('animate__item--next');
                    leftPane.removeClass('left-next-pane');
                    $pane.remove();
                });
            }, 200);
        } else {
            $('#left').html(leftPane);
        }
    },
    showRightPane: function (rightPane) {
        var $pane = $('#right').find('.pane-inner');
        var $right = $('#right');
        if ($pane.length != 0) {
            rightPane.addClass('right-next-pane');
            $right.append(rightPane);
            setTimeout(function () {
                $right.children().addClass('animate__item--next');
                $right.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $right.children().removeClass('animate__item--next');
                    rightPane.removeClass('right-next-pane');
                    $pane.remove();
                });
            }, 200);
        } else {
            $('#right').html(rightPane);
        }
    },
    newproject: function (e) {
        e.preventDefault();
        //Todo new project
        var project = {};
        project['name'] = '初创设计解决方案';
        project['isGraphics'] = false;
        project['isUx'] = false;
        switch (this.model.get('category')) {
            case '初创设计方案':
                project['isUx'] = true;
                project['isGraphics'] = true;
                break;
            case '品牌设计':
            case '市场推广资料':
                project['isGraphics'] = true;
                break;
            case '产品UI':
                project['isUx'] = true;
                break;
            default:
                break;
        }
        project['description'] = "品牌设计 : " + this.model.get('phase') + " logo、名片、GuideLine\n" +
        "UI设计 : " + this.model.get('need') + " 网站设计、APP设计、UI GUIDE\n" +
        "推广设计 : " + this.model.get('quality') + " PPT、名片、GuideLine";
        var budget = this.model.get('budget');
        if (budget < 30) {
            project['budget'] = '10,000-30,000元';
        } else if (budget < 50) {
            project['budget'] = '30,000-50,000元';
        } else if (budget < 100) {
            project['budget'] = '50,000-100,000元';
        } else {
            project['budge'] = '>100,000元';
        }

        var time = this.model.get('time');

        if (time <= 1) {
            project['time'] = "小于1周";
        } else if (time <= 2) {
            project['time'] = "1～2周";
        } else if (time <= 4) {
            project['time'] = "2～4周";
        } else {
            project['time'] = "2个月以上";
        }

        $.ajax({
            type: 'post',
            url: '/project',
            success: function(){
                window.location = '/client';
            },
            error: function(){
                alert('您的数据有误');
            }
        })
    }
});
