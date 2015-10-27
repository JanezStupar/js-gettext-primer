(function() {
  requirejs.config({
    enforceDefine: true,
    paths: {
      text: 'bower_components/requirejs-text/text',
      jed: 'bower_components/jed/jed',
      jquery: 'bower_components/jquery/dist/jquery.min',
      jade: 'bower_components/jade/runtime',
      underscore: "bower_components/underscore/underscore",
      backbone: "bower_components/backbone/backbone",
      marionette: "bower_components/marionette/lib/backbone.marionette",
      bootstrap: "bower_components/bootstrap-stylus/js",
      app: "scripts/js/app",
      l10n: "scripts/js/l10n",
      templates: "scripts/js/templates",
      translations: "scripts/translations",
      config: "scripts/js/app/config",
      view: 'scripts/js/app/view',
      collection: 'scripts/js/app/collection'
    },
    shim: {
      "bootstrap/scrollspy": {
        deps: ["jquery"],
        exports: "$.fn.scrollspy"
      },
      "bootstrap/affix": {
        deps: ["jquery"],
        exports: "$.fn.affix"
      }
    }
  });

  define(['underscore', 'l10n', 'app/application'], function(_, l10n, Application) {
    return l10n.initialize().done(function() {
      var app;
      app = new Application();
      return app.start();
    });
  });

}).call(this);
