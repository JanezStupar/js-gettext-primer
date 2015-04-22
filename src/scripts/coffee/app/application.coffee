define(['backbone','marionette', 'app/router', 'app/controller', 'view/navigation', 'view/sidebar_navigation'],
  (Backbone, Marionette, Router, Controller, Navigation, Sidebar) ->

    Layout = Marionette.LayoutView.extend(
      regions: {
        content: ".app-content > .content-region"
        sidebar: ".app-content > .nav"
        nav: ".navbar > .container > .content-region"
      }
    )

    return Marionette.Application.extend(
      initialize: (options) ->
        @layout = new Layout(
          el: 'body'
        )

      onStart: (options) ->
        @commandChannel = new Backbone.Wreqr.Commands()

        @layout.nav.show(new Navigation())
        @layout.sidebar.show(new Sidebar({commandChannel: @commandChannel}))

        new Router(
          controller: new Controller(
            app: this
          )
        )

        Backbone.history.start(
          pushState: false
          root: "/"
        )
    )
)