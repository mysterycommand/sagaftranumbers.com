// Generated by CoffeeScript 1.4.0
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","underscore"],function(e,t){var n;n=function(){function n(){this.onChange=r(this.onChange,this);this.label="Wild Spot - 13 week cycle";this.html='<fieldset>\n  It will be broadcast in the following markets:\n  <select name="markets" id="markets" multiple class="chzn-select" data-placeholder="please choose all that apply...">\n    <option value="-1"></option>\n  </select>\n</fieldset>';this.$el=e(this.html);this.$markets=this.$el.find("#markets");this.el=this.$el[0];this.setupOptions();this.$el.on("change","#markets",this.onChange)}n.prototype.setupOptions=function(){var e;this.selectedIndex=-1;this.selectedItem=null;this.options=[{value:4,label:"Minneapolis-St. Paul"},{value:6,label:"Atlanta"},{value:3,label:"Baltimore"},{value:2,label:"Birmingham (Ann, Tusc)"},{value:6,label:"Boston"},{value:3,label:"Charlotte"},{value:"Chicago",label:"Chicago"},{value:2,label:"Cincinnati"},{value:4,label:"Cleveland"},{value:2,label:"Colombus, OH"},{value:7,label:"Dallas-Fort Worth"},{value:4,label:"Denver"},{value:5,label:"Detroit"},{value:2,label:"Grand Rapids-Kalamazoo-Battle Creek"},{value:2,label:"Greenville-Spartanburg-Asheville-Anderson, NC"},{value:2,label:"Harrisburg-Lancaster-Lebanon-York"},{value:2,label:"Hartford-New Haven"},{value:6,label:"Houston"},{value:3,label:"Indianapolis"},{value:2,label:"Kansas City"},{value:2,label:"Las Vegas"},{value:"Los Angeles",label:"Los Angeles"},{value:43,label:"Mexico/Mexico City"},{value:4,label:"Miami"},{value:2,label:"Milwaukee"},{value:4,label:"Montreal"},{value:2,label:"Nashville"},{value:"New York",label:"New York"},{value:2,label:"Norfolk-Portsmouth-Newport News"},{value:4,label:"Orlando-Daytona Beach"},{value:8,label:"Philadelphia"},{value:5,label:"Phoenix"},{value:3,label:"Pittsburgh"},{value:3,label:"Portland, OR"},{value:3,label:"Puerto Rico"},{value:3,label:"Raleigh-Durham"},{value:3,label:"Sacramento-Stockton"},{value:2,label:"San Antonio"},{value:2,label:"Salt Lake City"},{value:3,label:"San Diego"},{value:7,label:"San Francisco"},{value:5,label:"Seattle-Tacoma"},{value:3,label:"St. Louis"},{value:5,label:"Tampa-St. Petersburg"},{value:7,label:"Toronto"},{value:3,label:"Vancouver, B.C."},{value:6,label:"Washington, D.C."},{value:2,label:"West Palm Beach-Ft. Pierce"},{value:0,label:"No markets at this time."},{value:"mailto:Timothy.Ogren@sagaftra.org?subject=SAG-AFTRAnumbers%20Question",label:"Looking for Smaller Markets or State-wide Buys?  Ask Tim"}];e="";t.each(this.options,function(t,n){return e+='<option value="'+n+'" data-value="'+t.value+'">'+t.label+"</option>"});return this.$el.find("select").append(e)};n.prototype.getSelectedItem=function(){return this.selectedItem};n.prototype.onChange=function(e){var t,n;n=this.$markets.val();this.selectedIndex=(n!=null?n.pop():void 0)||-1;this.selectedItem=this.selectedIndex!==-1?this.options[this.selectedIndex]:null;if(!this.selectedItem||this.selectedItem===null)return;if(!isNaN(parseInt(this.selectedItem.value,10)))return;if(this.selectedItem.value.indexOf("mailto")===-1)return;t=window.open(this.selectedItem.value,"mailto");t&&t.open&&!t.closed&&t.close();this.$markets.val(n).trigger("change").trigger("liszt:updated")};return n}();return n})}).call(this);