define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["_navigation"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (brand, id, nav, undefined) {
buf.push("<!--Created by janez on 4/1/15.--><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"#\" class=\"navbar-brand\">" + (jade.escape((jade_interp = brand) == null ? '' : jade_interp)) + "</a></div><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
      var val = $$obj[key];

if ( (id == key))
{
buf.push("<li class=\"active\"><a" + (jade.attr("href", '' + (key) + '', true, false)) + ">" + (jade.escape((jade_interp = val) == null ? '' : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '' + (key) + '', true, false)) + ">" + (jade.escape((jade_interp = val) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;      var val = $$obj[key];

if ( (id == key))
{
buf.push("<li class=\"active\"><a" + (jade.attr("href", '' + (key) + '', true, false)) + ">" + (jade.escape((jade_interp = val) == null ? '' : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '' + (key) + '', true, false)) + ">" + (jade.escape((jade_interp = val) == null ? '' : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div>");}.call(this,"brand" in locals_for_with?locals_for_with.brand:typeof brand!=="undefined"?brand:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"nav" in locals_for_with?locals_for_with.nav:typeof nav!=="undefined"?nav:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["App"]["Templates"]["_sidebar_navigation"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (groups, undefined) {
buf.push("<!--Created by janez on 4/20/15.--><nav class=\"col-xs-3 bs-nav-sidebar hidden-print hidden-xs hidden-sm\"><ul id=\"sidebar\" data-spy=\"affix\" class=\"nav nav-stacked\">");
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var group = $$obj[i];

buf.push("<li><a" + (jade.attr("href", "#" + (group.href) + "", true, false)) + ">" + (jade.escape((jade_interp = group.title) == null ? '' : jade_interp)) + "</a>");
if ( group.children)
{
buf.push("<ul class=\"nav nav-stacked\">");
// iterate group.children
;(function(){
  var $$obj = group.children;
  if ('number' == typeof $$obj.length) {

    for (var j = 0, $$l = $$obj.length; j < $$l; j++) {
      var subgroup = $$obj[j];

buf.push("<li><a" + (jade.attr("href", "#" + (subgroup.href) + "", true, false)) + ">" + (jade.escape((jade_interp = subgroup.title) == null ? '' : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var j in $$obj) {
      $$l++;      var subgroup = $$obj[j];

buf.push("<li><a" + (jade.attr("href", "#" + (subgroup.href) + "", true, false)) + ">" + (jade.escape((jade_interp = subgroup.title) == null ? '' : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</li>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var group = $$obj[i];

buf.push("<li><a" + (jade.attr("href", "#" + (group.href) + "", true, false)) + ">" + (jade.escape((jade_interp = group.title) == null ? '' : jade_interp)) + "</a>");
if ( group.children)
{
buf.push("<ul class=\"nav nav-stacked\">");
// iterate group.children
;(function(){
  var $$obj = group.children;
  if ('number' == typeof $$obj.length) {

    for (var j = 0, $$l = $$obj.length; j < $$l; j++) {
      var subgroup = $$obj[j];

buf.push("<li><a" + (jade.attr("href", "#" + (subgroup.href) + "", true, false)) + ">" + (jade.escape((jade_interp = subgroup.title) == null ? '' : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var j in $$obj) {
      $$l++;      var subgroup = $$obj[j];

buf.push("<li><a" + (jade.attr("href", "#" + (subgroup.href) + "", true, false)) + ">" + (jade.escape((jade_interp = subgroup.title) == null ? '' : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</li>");
    }

  }
}).call(this);

buf.push("</ul></nav>");}.call(this,"groups" in locals_for_with?locals_for_with.groups:typeof groups!=="undefined"?groups:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};

this["App"]["Templates"]["slides/about/_intro"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (page) {
buf.push("<!--Created by janez on 4/23/15.--><div><h1" + (jade.attr("id", "" + (page) + "welcome", true, false)) + (jade.attr("data-nav-label", "" + (gettext('Welcome')) + "", true, false)) + ">" + (jade.escape((jade_interp = gettext("Welcome to js-gettext-primer")) == null ? '' : jade_interp)) + "</h1><p>" + (jade.escape((jade_interp = gettext("This is a short primer on using gettext in pure JavaScript applications.")) == null ? '' : jade_interp)) + "</p><!-- L10n: This string contains an HTML anchor (<a></a> element). Consult the HTML translation guidelines.--><p>" + (((jade_interp = gettext("To see an example of a working gettext implementation using Coffee, Jade and Marionette, have a look at the <a href='https://github.com/JanezStupar/js-gettext-primer'>source</a>. Feel free to take inspiration and/or this project as a starting point for your translation enabaled JS application.")) == null ? '' : jade_interp)) + "</p><h2" + (jade.attr("id", "" + (page) + "what-is-gettext", true, false)) + (jade.attr("data-nav-label", '' + (gettext("What is gettext?")) + '', true, false)) + (jade.attr("data-nav-parent", '' + (page) + 'welcome', true, false)) + ">" + (jade.escape((jade_interp = gettext("What is gettext?")) == null ? '' : jade_interp)) + "<!-- L10n: This string contains an HTML anchor (<a></a> element). Consult the HTML translation guidelines.--></h2><p>" + (((jade_interp = gettext("The following description has been quoted from the official <a href='https://www.gnu.org/software/gettext/'>GNU gettext page</a>.")) == null ? '' : jade_interp)) + "</p><blockquote><p>" + (jade.escape((jade_interp = gettext("Usually, programs are written and documented in English, and use English at execution time for interacting with users. This is true not only from within GNU, but also in a great deal of proprietary and free software. Using a common language is quite handy for communication between developers, maintainers and users from all countries. On the other hand, most people are less comfortable with English than with their own native language, and would rather be using their mother tongue for day to day's work, as far as possible. Many would simply love seeing their computer screen showing a lot less of English, and far more of their own language. ")) == null ? '' : jade_interp)) + "</p><p>" + (jade.escape((jade_interp = gettext("GNU `gettext' is an important step for the GNU Translation Project, as it is an asset on which we may build many other steps. This package offers to programmers, translators, and even users, a well integrated set of tools and documentation. Specifically, the GNU `gettext' utilities are a set of tools that provides a framework to help other GNU packages produce multi-lingual messages. These tools include a set of conventions about how programs should be written to support message catalogs, a directory and file naming organization for the message catalogs themselves, a runtime library supporting the retrieval of translated messages, and a few stand-alone programs to massage in various ways the sets of translatable strings, or already translated strings...")) == null ? '' : jade_interp)) + "</p></blockquote><!-- L10n: This string contains an HTML anchor (<a></a> element). Consult the HTML translation guidelines.--><p>" + (((jade_interp = gettext("And here is another one, this one I borrowed from the <a href='http://slexaxton.github.io/Jed/'>Jed project</a>.")) == null ? '' : jade_interp)) + "</p><blockquote><p>" + (jade.escape((jade_interp = gettext("Gettext is an old translation standard. It solves a unique set of problems when dealing with things like pluralization and positional interpolation. There are implementations of gettext in nearly every language (including javascript)...")) == null ? '' : jade_interp)) + "</p></blockquote><h2" + (jade.attr("id", "" + (page) + "why-gettext", true, false)) + (jade.attr("data-nav-label", '' + (gettext("Why should I care?")) + '', true, false)) + (jade.attr("data-nav-parent", '' + (page) + 'welcome', true, false)) + ">" + (jade.escape((jade_interp = gettext("Why should I care?")) == null ? '' : jade_interp)) + "</h2><!-- L10n: This string contains an HTML anchor (<a></a> element). Consult the HTML translation guidelines.--><p>" + (((jade_interp = gettext("There are many ways of translating JavaScript applications. But the sad fact is that vast majority of them suck in non-obvious ways, which will haunt you down the road if you end up using them. Besides gettext, the only other translation toolkit for JavaScript applications that I am aware of and that doesn't suck right from the get go is <a href='http://i18next.com/index.html'>i18next</a>.")) == null ? '' : jade_interp)) + "</p><p>" + (jade.escape((jade_interp = gettext("The chief reason for why these other translation toolkits do a bad job, is because they are built by people who usually speak English or indeed languages from a single language family and not much else. To put it another way, most of the regular translation toolkits are as useful for translating applications, as ASCII is for internationalized text representation. That is, not a whole lot.")) == null ? '' : jade_interp)) + "</p><p>" + (jade.escape((jade_interp = gettext("A good (useful) translation toolkit needs to have following properties:")) == null ? '' : jade_interp)) + "<ul><li>" + (jade.escape((jade_interp = gettext("String interpolation")) == null ? '' : jade_interp)) + "</li><li>" + (jade.escape((jade_interp = gettext("Support for proper pluralization")) == null ? '' : jade_interp)) + "</li><li>" + (jade.escape((jade_interp = gettext("A way of passing translation context to the translators")) == null ? '' : jade_interp)) + "</li><li>" + (jade.escape((jade_interp = gettext("Translation software/tools")) == null ? '' : jade_interp)) + "</li></ul></p><p>" + (jade.escape((jade_interp = gettext("And while gettext does indeed seem complex comparing to some naive translation toolkits, there is a good reason for that. Languages are different and translating is an immensely complex topic which should not be underestimated. The good news is that doing translations right and using gettext is quite simple if you do it from the get go.")) == null ? '' : jade_interp)) + "</p></div>");}.call(this,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined));;return buf.join("");
};

return this["App"]["Templates"];

});