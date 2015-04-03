(function() {
  define(['backbone', 'marionette', 'templates', 'text!config/nav.json'], function(Backbone, Marionette, templates, data) {
    return Marionette.ItemView.extend({
      initialize: function(options) {
        return this.model = new Backbone.Model({
          nav: JSON.parse(data)
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
        Backbone.history.navigate(el.children().attr("href"), {
          trigger: true
        });
        return console.log('clicked');
      }
    });
  });

}).call(this);
