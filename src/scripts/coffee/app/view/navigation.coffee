define(['backbone', 'marionette', 'templates', 'l10n'],
  (Backbone, Marionette, templates, l10n) ->
    return Marionette.ItemView.extend(
      initialize: (options) ->
        @model = new Backbone.Model(
          nav:
            "home": l10n.gettext("Home")
            "about": l10n.gettext("About")
        )

      ui:
        "links": "ul.nav.navbar-nav"

      events:
        "click @ui.links > li": "clickLink"

      template: templates._navigation

      clickLink: (e) ->
        e.preventDefault();
        el = $(e.currentTarget)
        Backbone.history.navigate(el.children().attr("href"), trigger: true)
    )
)