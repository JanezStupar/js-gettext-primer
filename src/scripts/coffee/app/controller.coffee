define(['backbone', 'marionette'],
  (Backbone, Marionette) ->
    return Marionette.Controller.extend(
      home: ->
        console.log('home view')
    )
)