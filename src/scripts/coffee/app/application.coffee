define(['backbone','marionette', 'app/router', 'app/controller', 'view/navigation'],
  (Backbone, Marionette, Router, Controller, Navigation) ->

    Layout = Marionette.LayoutView.extend(
      regions: {
        content: ".app-content > .content-region"
        nav: ".navbar > .container > .content-region"
      }
    )

    return Marionette.Application.extend(
      initialize: (options) ->
        @layout = new Layout(
          el: 'body'
        )

      onStart: (options) ->
        @layout.nav.show(new Navigation())

        new Router(
          controller: new Controller()
        )

        Backbone.history.start(
          pushState: true
          root: "/"
        )
    )
)