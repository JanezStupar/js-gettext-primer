define(['underscore', 'backbone', 'marionette', 'view/slides'],
  (_, Backbone, Marionette, SlidesView) ->
    return Marionette.Controller.extend(
      initialize: (options) ->
        @app = options.app

      home: (section) ->
        unless (!_.isUndefined(@app.layout.content.currentView)) and @app.layout.content.currentView.options.page == 'home'
          @app.layout.content.show(new SlidesView(commandChannel: @app.commandChannel, page: 'home', section: section, slides: ["slides/about/_intro"]))

      routeHome: () ->
        Backbone.history.navigate("home", trigger: true)
    )
)