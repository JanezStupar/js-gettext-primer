(function() {
  define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return Marionette.AppRouter.extend({
      appRoutes: {
        "home": "home",
        "about": "home",
        "(/)": "home"
      }
    });
  });

}).call(this);
