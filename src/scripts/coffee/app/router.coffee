define(['backbone', 'marionette'],
  (Backbone, Marionette) ->
    return Marionette.AppRouter.extend(
      appRoutes:
        "home(_:section)": "home"
        "(/)": "routeHome"
    )
)
