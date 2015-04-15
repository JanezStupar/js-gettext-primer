define(['backbone', 'marionette', 'l10n', 'templates'], (Backbone, Marionette, l10n, templates) ->
  return Marionette.ItemView.extend(
    template: templates._content_base
  )
)