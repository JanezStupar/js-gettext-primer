requirejs.config(
  enforceDefine: true

  paths:
    text: 'bower_components/requirejs-text/text'
    jquery: 'bower_components/jquery/dist/jquery.min'
    jade: 'bower_components/jade/runtime'
    underscore: "bower_components/underscore/underscore"
    backbone: "bower_components/backbone/backbone"
    marionette: "bower_components/marionette/lib/backbone.marionette"
    app: "scripts/js/app"
    templates: "scripts/js/templates"
    config: "scripts/js/app/config"
    view: 'scripts/js/app/view'
)

define(['app/application'],
  (Application) ->
    console.log('app is alive')
    app = new Application()
    app.start()
)