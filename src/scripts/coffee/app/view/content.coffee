define(['underscore', 'backbone', 'marionette', 'l10n', 'templates'], (_, Backbone, Marionette, l10n, templates) ->
  return Marionette.ItemView.extend(

    serializeData: (model) ->
      page = if @options.page then @options.page + "_" else ""
      return {
        page: page
      }

    template: templates._content_base

    collectNav: () ->
      # Collect entries for sidebar navigation view
      return _.map(@$('h1'), (e, i) =>
        e = $(e)
        if !_.isUndefined(e.data('navLabel')) && !_.isUndefined(e.attr('id'))
          retVal = {
            href: e.attr('id')
            title: e.data('navLabel')
          }

          subgroups = @$('[data-nav-parent="' + e.attr("id") + '"]')
          if subgroups.length > 0
            subgroups = _.map(subgroups, (elem, index) ->
              elem = $(elem)
              if !_.isUndefined(elem.data('navLabel')) && !_.isUndefined(elem.attr('id'))
                return {
                  href: elem.attr('id')
                  title: elem.data('navLabel')
                }
            )
            retVal = _.extend(retVal, children: subgroups)

          return retVal
      )
    onShow: () ->
      # Pass the document structure to the sidebar navigator
      @options.commandChannel.execute('sidebar:update', @collectNav(), @hash)

      # scroll to the linked element
      unless _.isUndefined(@options.section)
        el = this.$("#" + @options.page + "_" + @options.section )
        if el.length > 0
          $(document).scrollTop(el.offset().top - 10)
  )
)