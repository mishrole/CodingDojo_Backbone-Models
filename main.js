'use strict';

const _ = require('underscore');
const Backbone = require('backbone');

var StackModel = Backbone.Model.extend({
    defaults: {
        title: null,
        instructor: null,
        language: null
    },
    preinitialize() {
        this.defaults.instructor = "Michael Choi"
    },
    initialize: function() {
    }
});

var rubyOnRails = new StackModel();
rubyOnRails.set({
    'title': 'Ruby on Rails',
    'language': 'Ruby',
});

var mean = new StackModel();
mean.set({
    'title': 'MEAN',
    'language': 'Javascript',
});

var python = new StackModel();
python.set({
    'title': 'Python',
    'language': 'JavaScript',
});

var stacks = [rubyOnRails, mean, python];

console.log(stacks)



// var BookModel = Backbone.Model.extend({
//     defaults: {
//       title: null,
//       author: null
//     },
//     initialize: function() {
//       console.log("I'm alive!");
//     }
// });

// var myBook = new BookModel();
// myBook.set("title", "Where The Wild Things Are");
// console.log(myBook);