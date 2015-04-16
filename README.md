# About
See how easy it is to use proper translation toolkit in your JavaScript application. 

Stop relying on well meant but ultimately horribly harmful solutions such as requirejs/i18n, jquery.18n, etc...

Start using a proper translation toolkit that will cost nothing today, but will solve you months and years of work down 
the road.

You can use this project as a template for your JavaScript application or as an example of implementation.

# Install
    $ git clone git@github.com:JanezStupar/js-gettext-primer.git
    $ sudo npm install
    $ bower install
    $ grunt dev
    
# How it works
[GNU gettext](https://www.gnu.org/software/gettext/) is a translation toolkit used in many Open Source, Free Software
and indeed proprietary software projects.

Instead of using usual key/value semantics with translation strings being stashed away in a resource, you just wrap your
translation strings into gettext() functions (for the record there are other more specialized functions).

Next, parsers are used to extract translations strings directly from code into PO(T) files.

PO files are sent to translators who can then use tools like [Virtaal](http://virtaal.translatehouse.org/) or [PoEdit](http://poedit.net/)
to effectively translate relevant text.

After translators are done, PO files are compiled into a MO format, which is used by standard gettext tools.
Or in our case, we compile PO files into JavaScript or JSON for usage in webapp frontend.

Last the compiled translation files are utilized by the application runtime to deliver correctly translated texts to
the user.
    
# Coming soon(tm)
* Discussion on commonly used translation mechanisms.
* An overview of the gettext workflow.
* Examples on how to translate with gettext correctly.

If you like this project and would like something else it doesn't offer yet, go ahead and let me know
