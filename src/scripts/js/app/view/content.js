(function() {
  define(['backbone', 'marionette', 'l10n', 'templates'], function(Backbone, Marionette, l10n, templates) {
    return Marionette.ItemView.extend({
      template: templates._content_base
    });
  });

}).call(this);
