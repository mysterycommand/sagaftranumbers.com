// Generated by CoffeeScript 1.4.0
(function() {
  var define, log, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore'], function($, _) {
    var Category;
    Category = (function() {

      function Category() {
        this.onChange = __bind(this.onChange, this);
        this.html = "<fieldset>\n	<span style=\"vertical-align: top;\">It's a</span>\n	<span style=\"display: inline-block;\">\n		<input type=\"radio\" name=\"category\" id=\"category-i\" value=\"0\" checked /> <label for=\"category-i\"><a href=\"#category-i-definition\" class=\"term open\">Category I</a></label><br/>\n		<input type=\"radio\" name=\"category\" id=\"category-ii\" value=\"1\" /> <label for=\"category-ii\"><a href=\"#category-ii-definition\" class=\"term open\">Category II</a></label>\n	</span>\n	program.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
        this.setupOptions();
        this.$el.on('change', 'input', this.onChange);
      }

      Category.prototype.setupOptions = function() {
        this.selectedIndex = -1;
        this.selectedItem = null;
        return this.options = ['Category I', 'Category II'];
      };

      Category.prototype.getSelectedItem = function() {
        return this.selectedItem;
      };

      Category.prototype.onChange = function(event) {
        this.selectedIndex = parseInt(event.target.value, 10);
        return this.selectedItem = this.selectedIndex !== -1 ? this.options[this.selectedIndex] : null;
      };

      return Category;

    })();
    return Category;
  });

}).call(this);
