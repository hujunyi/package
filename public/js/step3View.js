var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
module.exports = Backbone.View.extend({
    template: _.template($('#step3').html()),
    render: function (model) {
        switch (model.get('type')) {
            case '产品':
                model.set('option1', "网站可以帮您在大屏幕上呈现丰富完整的产品细节");
                model.set('option2', "App的互动特性和强大粘性可为你捕获用户的芳心");
                break;
            case '服务':
                model.set('option1', "如果您的服务并不基于地理位置，建议您优先选择网站");
                model.set('option2', "如果您的服务基于地理位置，建议您优先选择App");
                break;
            case '网站':
                model.set('option1', "让您的网站离完美再近一点，赢得更多的点击和更长的停留");
                model.set('option2', "App可以帮你的网站实现高频的实时互动，黏住更多用户");
                break;
            case 'App':
                model.set('option1', "网站可以帮助您更好地推广和宣传app");
                model.set('option2', "让您的App一直占据手机桌面，让用户每一次访问都是享受");
                break;
            default:
                model.set('option1', "");
                model.set('option2', "");
                break;
        }
        this.$el.html(this.template(model.toJSON()));
    },
    leftPane: function () {
        return this.$('.pane-left');
    },
    rightPane: function () {
        return this.$('.pane-right');
    }
});
