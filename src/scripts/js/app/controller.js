(function() {
  define(['underscore', 'backbone', 'marionette', 'view/content'], function(_, Backbone, Marionette, ContentView) {
    return Marionette.Controller.extend({
      initialize: function(options) {
        return this.app = options.app;
      },
      home: function(section) {
        if (!((!_.isUndefined(this.app.layout.content.currentView)) && this.app.layout.content.currentView.options.page === 'home')) {
          console.log('home view');
          return this.app.layout.content.show(new ContentView({
            commandChannel: this.app.commandChannel,
            page: 'home',
            section: section
          }));
        }
      },
      routeHome: function() {
        return Backbone.history.navigate("home", {
          trigger: true
        });
      }
    });
  });

}).call(this);
