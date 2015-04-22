define(['underscore', 'backbone', 'marionette', 'templates', 'bootstrap/scrollspy', 'bootstrap/affix'],
  (_, Backbone, Marionette, templates, scrollspy) ->
    return Marionette.ItemView.extend(
      initialize: (options) ->
        @model = new Backbone.Model(groups: [])

        @options.commandChannel.setHandler('sidebar:update', _.bind(@updateSidebar, @))

      template: templates._sidebar_navigation

      updateSidebar: (groups) ->
        @model.set('groups': groups)
        @render()
        $('body').scrollspy('refresh')

        @$("#sidebar").affix(
          offset:
            top: @$("#sidebar").offset().top
            bottom: 100
        )

      onShow: () ->
        $('body').scrollspy(
          target: "nav.bs-nav-sidebar",
          offset: 40
        )
    )
)