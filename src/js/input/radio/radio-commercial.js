// Generated by CoffeeScript 1.4.0
(function() {
  // var define, log, root;

  // root = this;

  // log = root.log;

  // define = root.define;

  define(['jquery', 'underscore', 'input/radio/actor-announcer-singer', 'input/version', 'input/tag', 'input/radio/use'], function($, _, ActorAnnouncerSinger, Version, Tag, Use) {
    var RadioCommercial;
    RadioCommercial = (function() {

      function RadioCommercial() {
        var _this = this;
        this.label = "Radio Commercial";
        this.value = "radio_commercial";
        this.definitionId = "radio-commercial";
        this.headsUpItems = ['Lifts', 'Non-broadcast use'];
        this.steps = [new ActorAnnouncerSinger(), new Version(), new Tag(), new Use()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      RadioCommercial.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return RadioCommercial;

    })();
    return RadioCommercial;
  });

}).call(this);
