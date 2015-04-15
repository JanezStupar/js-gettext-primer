(function() {
  define(['backbone', 'marionette', 'view/content'], function(Backbone, Marionette, ContentView) {
    return Marionette.Controller.extend({
      initialize: function(options) {
        return this.app = options.app;
      },
      home: function() {
        console.log('home view');
        return this.app.layout.content.show(new ContentView());
      }
    });
  });

}).call(this);
