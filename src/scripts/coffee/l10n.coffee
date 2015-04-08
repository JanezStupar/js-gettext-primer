define(['jed', 'underscore', 'jquery', 'require', 'text!config/facts.json'],
  (Jed, _, $, require, facts) ->
    _instance = null;
    _facts = JSON.parse(facts)

    class L10nWrapper
      loadLang: (lang) ->
        def = $.Deferred();

        require(['translations/' + lang], (localeData) ->
          def.resolve(localeData)
        )

        return def.promise()

      changeLang: (lang) ->
        if (_.isNull(_instance))
          throw new Error('l10n not initialized!')

        promise = @loadLang(lang)
        promise.done(_.bind((resp) ->
          @jed.options.locale_data = resp.locale_data
        ), @)

      gettext: () ->
        return @jed.gettext.apply(@jed, arguments)

      sprintf: () ->
        return @jed.sprintf.apply(@jed, arguments)

      initialize: (options) ->
        if(_.isUndefined(@initPromise))
          options = options || {}
          lang = options.lang || _facts["defaultLanguage"]

          @initPromise = @loadLang(lang)
          @initPromise.done(_.bind((resp) ->
            _instance = new Jed(
              "domain": "client",
              "locale_data": resp.locale_data
            )
            @jed = _instance

            # A kludge for Jade templates, as Jade doesn't have a sane way
            # to specify helpers we have to expose gettext as global variable
            window.gettext = _.bind(@gettext, @)
          , @))

        return @initPromise

    return new L10nWrapper()
)