(function() {
  define(['underscore', 'backbone', 'marionette', 'l10n', 'templates'], function(_, Backbone, Marionette, l10n, templates) {
    var Slide;
    Slide = Marionette.ItemView.extend({
      serializeData: function(model) {
        var page;
        page = this.options.page ? this.options.page + "_" : "";
        return {
          page: page
        };
      },
      initialize: function(options) {
        return this.template = this.model.get('template');
      }
    });
    return Marionette.CollectionView.extend({
      initialize: function(options) {
        return this.collection = new Backbone.Collection(_.map(options.slides, function(e) {
          return {
            template: templates[e]
          };
        }));
      },
      childView: Slide,
      childViewOptions: function() {
        return {
          page: this.options.page
        };
      },
      collectNav: function() {
        return _.map(this.$('h1'), (function(_this) {
          return function(e, i) {
            var retVal, subgroups;
            e = $(e);
            if (!_.isUndefined(e.data('navLabel')) && !_.isUndefined(e.attr('id'))) {
              retVal = {
                href: e.attr('id'),
                title: e.data('navLabel')
              };
              subgroups = _this.$('[data-nav-parent="' + e.attr("id") + '"]');
              if (subgroups.length > 0) {
                subgroups = _.map(subgroups, function(elem, index) {
                  elem = $(elem);
                  if (!_.isUndefined(elem.data('navLabel')) && !_.isUndefined(elem.attr('id'))) {
                    return {
                      href: elem.attr('id'),
                      title: elem.data('navLabel')
                    };
                  }
                });
                retVal = _.extend(retVal, {
                  children: subgroups
                });
              }
              return retVal;
            }
          };
        })(this));
      },
      onShow: function() {
        var el;
        this.options.commandChannel.execute('sidebar:update', this.collectNav(), this.hash);
        if (!_.isUndefined(this.options.section)) {
          el = this.$("#" + this.options.page + "_" + this.options.section);
          if (el.length > 0) {
            return $(document).scrollTop(el.offset().top - 10);
          }
        }
      }
    });
  });

}).call(this);
