(function() {
  define(['underscore', 'backbone', 'marionette', 'templates', 'bootstrap/scrollspy', 'bootstrap/affix'], function(_, Backbone, Marionette, templates, scrollspy) {
    return Marionette.ItemView.extend({
      initialize: function(options) {
        this.model = new Backbone.Model({
          groups: []
        });
        return this.options.commandChannel.setHandler('sidebar:update', _.bind(this.updateSidebar, this));
      },
      template: templates._sidebar_navigation,
      updateSidebar: function(groups) {
        this.model.set({
          'groups': groups
        });
        this.render();
        $('body').scrollspy('refresh');
        return this.$("#sidebar").affix({
          offset: {
            top: this.$("#sidebar").offset().top,
            bottom: 100
          }
        });
      },
      onShow: function() {
        return $('body').scrollspy({
          target: "nav.bs-nav-sidebar",
          offset: 40
        });
      }
    });
  });

}).call(this);
