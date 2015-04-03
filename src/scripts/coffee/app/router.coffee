define(['backbone', 'marionette'],
  (Backbone, Marionette) ->
    return Marionette.AppRouter.extend(
      appRoutes:
        "home": "home"
        "about": "home"
    )
)
