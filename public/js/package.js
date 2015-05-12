var Backbone = require('backbone');
Backbone.LocalStorage = require("backbone.localstorage");
var _ = require('underscore');
var $ = require('jquery');
module.exports = Backbone.Model.extend({
    defaults: {
        "type": "",
        "category": "",
        "phase": "",
        "need": "",
        "objective": "",
        "quality": ""
    },
    localStorage:new Backbone.LocalStorage('user-backbone')
});
