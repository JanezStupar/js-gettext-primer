(function() {
  define(['backbone', 'marionette', 'app/router', 'app/controller', 'view/navigation'], function(Backbone, Marionette, Router, Controller, Navigation) {
    var Layout;
    Layout = Marionette.LayoutView.extend({
      regions: {
        content: ".app-content > .content-region",
        nav: ".navbar > .container > .content-region"
      }
    });
    return Marionette.Application.extend({
      initialize: function(options) {
        return this.layout = new Layout({
          el: 'body'
        });
      },
      onStart: function(options) {
        this.layout.nav.show(new Navigation());
        new Router({
          controller: new Controller({
            app: this
          })
        });
        return Backbone.history.start({
          pushState: true,
          root: "/"
        });
      }
    });
  });

}).call(this);
