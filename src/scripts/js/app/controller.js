(function() {
  define(['underscore', 'backbone', 'marionette', 'view/slides'], function(_, Backbone, Marionette, SlidesView) {
    return Marionette.Controller.extend({
      initialize: function(options) {
        return this.app = options.app;
      },
      home: function(section) {
        if (!((!_.isUndefined(this.app.layout.content.currentView)) && this.app.layout.content.currentView.options.page === 'home')) {
          return this.app.layout.content.show(new SlidesView({
            commandChannel: this.app.commandChannel,
            page: 'home',
            section: section,
            slides: ["slides/about/_intro"]
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
