define(['backbone', 'marionette', 'templates', 'text!config/nav.json'],
  (Backbone, Marionette, templates, data) ->
    return Marionette.ItemView.extend(
      initialize: (options) ->
        this.model = new Backbone.Model(
          nav: JSON.parse(data)
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
        console.log('clicked')
    )
)