(function() {
  define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return Marionette.AppRouter.extend({
      appRoutes: {
        "home(_:section)": "home",
        "(/)": "routeHome"
      }
    });
  });

}).call(this);
