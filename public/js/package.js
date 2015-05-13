/**
 * Created by joey on 5/13/15.
 */
var Backbone = require('backbone');
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
    }
});