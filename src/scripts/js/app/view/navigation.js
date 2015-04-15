(function() {
  define(['backbone', 'marionette', 'templates', 'l10n'], function(Backbone, Marionette, templates, l10n) {
    return Marionette.ItemView.extend({
      initialize: function(options) {
        return this.model = new Backbone.Model({
          nav: {
            "home": l10n.gettext("Home"),
            "about": l10n.gettext("About")
          }
        });
      },
      ui: {
        "links": "ul.nav.navbar-nav"
      },
      events: {
        "click @ui.links > li": "clickLink"
      },
      template: templates._navigation,
      clickLink: function(e) {
        var el;
        e.preventDefault();
        el = $(e.currentTarget);
        return Backbone.history.navigate(el.children().attr("href"), {
          trigger: true
        });
      }
    });
  });

}).call(this);
