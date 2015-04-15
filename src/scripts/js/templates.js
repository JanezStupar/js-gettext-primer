define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["_content_base"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--Created by janez on 4/9/15.--><div class=\"col-md-8\"><h1>" + (jade.escape((jade_interp = gettext("Welcome to js-gettext-primer")) == null ? '' : jade_interp)) + "</h1><p>" + (jade.escape((jade_interp = gettext("This primer is a work in progress. Content coming soon (tm)!")) == null ? '' : jade_interp)) + "</p></div>");;return buf.join("");
};

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

return this["App"]["Templates"];

});