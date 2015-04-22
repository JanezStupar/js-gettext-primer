define(['underscore', 'backbone', 'marionette', 'view/content'],
  (_, Backbone, Marionette, ContentView) ->
    return Marionette.Controller.extend(
      initialize: (options) ->
        @app = options.app

      home: (section) ->
        unless (!_.isUndefined(@app.layout.content.currentView)) and @app.layout.content.currentView.options.page == 'home'
          console.log('home view')
          @app.layout.content.show(new ContentView(commandChannel: @app.commandChannel, page: 'home', section: section))

      routeHome: () ->
        Backbone.history.navigate("home", trigger: true)
    )
)