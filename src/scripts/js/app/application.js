(function() {
  define(['backbone', 'marionette', 'app/router', 'app/controller', 'view/navigation', 'view/sidebar_navigation'], function(Backbone, Marionette, Router, Controller, Navigation, Sidebar) {
    var Layout;
    Layout = Marionette.LayoutView.extend({
      regions: {
        content: ".app-content > .content-region",
        sidebar: ".app-content > .nav",
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
        this.commandChannel = new Backbone.Wreqr.Commands();
        this.layout.nav.show(new Navigation());
        this.layout.sidebar.show(new Sidebar({
          commandChannel: this.commandChannel
        }));
        new Router({
          controller: new Controller({
            app: this
          })
        });
        return Backbone.history.start({
          pushState: false,
          root: "/"
        });
      }
    });
  });

}).call(this);
