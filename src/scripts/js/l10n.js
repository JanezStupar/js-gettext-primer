(function() {
  define(['jed', 'underscore', 'jquery', 'require', 'text!config/facts.json'], function(Jed, _, $, require, facts) {
    var L10nWrapper, _facts, _instance;
    _instance = null;
    _facts = JSON.parse(facts);
    L10nWrapper = (function() {
      function L10nWrapper() {}

      L10nWrapper.prototype.loadLang = function(lang) {
        var def;
        def = $.Deferred();
        require(['translations/' + lang], function(localeData) {
          return def.resolve(localeData);
        });
        return def.promise();
      };

      L10nWrapper.prototype.changeLang = function(lang) {
        var promise;
        if (_.isNull(_instance)) {
          throw new Error('l10n not initialized!');
        }
        promise = this.loadLang(lang);
        return promise.done(_.bind(function(resp) {
          return this.jed.options.locale_data = resp.locale_data;
        }), this);
      };

      L10nWrapper.prototype.gettext = function() {
        return this.jed.gettext.apply(this.jed, arguments);
      };

      L10nWrapper.prototype.sprintf = function() {
        return this.jed.sprintf.apply(this.jed, arguments);
      };

      L10nWrapper.prototype.initialize = function(options) {
        var lang;
        if (_.isUndefined(this.initPromise)) {
          options = options || {};
          lang = options.lang || _facts["defaultLanguage"];
          this.initPromise = this.loadLang(lang);
          this.initPromise.done(_.bind(function(resp) {
            _instance = new Jed({
              "domain": "client",
              "locale_data": resp.locale_data
            });
            this.jed = _instance;
            return window.gettext = _.bind(this.gettext, this);
          }, this));
        }
        return this.initPromise;
      };

      return L10nWrapper;

    })();
    return new L10nWrapper();
  });

}).call(this);
