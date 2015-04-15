define(['backbone', 'marionette', 'view/content'],
  (Backbone, Marionette, ContentView) ->
    return Marionette.Controller.extend(
      initialize: (options) ->
        @app = options.app
      home: ->
        console.log('home view')
        @app.layout.content.show(new ContentView())
    )
)