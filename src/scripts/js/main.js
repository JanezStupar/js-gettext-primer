(function() {
  requirejs.config({
    enforceDefine: true,
    paths: {
      jquery: 'bower_components/jquery/jquery.min',
      jade: 'bower_components/jade/runtime',
      app: "scripts/js/app",
      template: "scripts/js/templates"
    }
  });

  define(['template'], function(templates) {
    return console.log('app is alive');
  });

}).call(this);
