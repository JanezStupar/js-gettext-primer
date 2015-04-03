(function() {
  define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return Marionette.Controller.extend({
      home: function() {
        return console.log('home view');
      }
    });
  });

}).call(this);
