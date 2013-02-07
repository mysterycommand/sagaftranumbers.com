// Generated by CoffeeScript 1.4.0
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery'], function($) {
    var Television;
    Television = (function() {

      function Television() {}

      Television.onCameraSessionLineItems = function(rates) {
        var i, j, lineItem, lineItems, numActors, numActorsWardrobe, numDays, numExtras, numExtrasWardrobe;
        numDays = parseInt($('#num-days').val(), 10);
        lineItems = [];
        i = 0;
        while (i++ < numDays) {
          numActors = parseInt($("#day-" + i + "-num-actors").val(), 10);
          numExtras = parseInt($("#day-" + i + "-num-extras").val(), 10);
          numActorsWardrobe = parseInt($("#day-" + i + "-actors-wardrobe").val(), 10);
          numExtrasWardrobe = parseInt($("#day-" + i + "-extras-wardrobe").val(), 10);
          j = 0;
          while (j++ < numActors) {
            lineItem = {
              label: "Day " + i + " Principal Actor " + j,
              first: {
                label: "Initial Session Fee",
                price: rates.session_actor
              },
              items: []
            };
            if (j <= numActorsWardrobe) {
              lineItem.items.push({
                count: 0,
                label: "Wardrobe Fitting",
                price: rates.actor_wardrobe
              });
            }
            lineItems.push(lineItem);
          }
          j = 0;
          while (j++ < numExtras) {
            lineItem = {
              label: "Day " + i + " General Extra " + j,
              first: {
                label: "Initial Session Fee (Unlimited Use)",
                price: rates.session_extra
              },
              items: []
            };
            if (j <= numExtrasWardrobe) {
              lineItem.items.push({
                count: 0,
                label: "Wardrobe Fitting",
                price: rates.extra_wardrobe
              });
            }
            lineItems.push(lineItem);
          }
        }
        return lineItems;
      };

      Television.offCameraSessionLineItems = function(rates) {
        var i, lineItem, lineItems, numActors, numTags, numVersions, tagRate;
        numActors = parseInt($("#num-actors").val(), 10);
        numVersions = parseInt($('#num-versions').val(), 10);
        numTags = parseInt($('#num-tags').val(), 10);
        tagRate = 0;
        if (numTags > 1) {
          tagRate = rates.tag_2_25;
        }
        if (numTags > 25) {
          tagRate = rates.tag_26_50;
        }
        if (numTags > 50) {
          tagRate = rates.tag_51;
        }
        lineItems = [];
        i = 0;
        while (i++ < numActors) {
          lineItem = {
            label: "Principal Actor " + i,
            first: {
              label: "Initial Session Fee",
              price: rates.session_actor
            },
            items: []
          };
          if (numVersions - 1) {
            lineItem.items.push({
              count: numVersions - 1,
              label: "Add'l Versions of the Script",
              price: rates.session_actor
            });
          }
          lineItems.push(lineItem);
        }
        if (tagRate) {
          lineItems.push({
            label: "Tags",
            first: {
              label: "" + (numTags - 1) + " Additional Tags at $ " + (tagRate.toFixed(2)) + " ea.",
              price: tagRate * (numTags - 1)
            },
            items: []
          });
        }
        return lineItems;
      };

      Television.demoSessionLineItems = function(rates) {
        var i, lineItem, lineItems, numActors, numCharacters, numVersions;
        numActors = parseInt($("#num-actors").val(), 10);
        numCharacters = [];
        $('.num-characters').each(function(i, el) {
          return numCharacters[i] = parseInt($(el).val(), 10);
        });
        numVersions = parseInt($('#num-versions').val(), 10);
        lineItems = [];
        i = 0;
        while (i++ < numActors) {
          lineItem = {
            label: "Principal Actor " + i,
            first: {
              label: "Initial Session Fee",
              price: rates.session_actor
            },
            items: []
          };
          if (numCharacters[i - 1] - 1) {
            lineItem.items.push({
              count: numCharacters[i - 1] - 1,
              label: "Add'l Characters/Voices",
              price: rates.session_actor
            });
          }
          if (numVersions - 1) {
            lineItem.items.push({
              count: numVersions - 1,
              label: "Add'l Versions of the Script",
              price: rates.session_actor
            });
          }
          lineItems.push(lineItem);
        }
        return lineItems;
      };

      Television.onCameraUsageLineItems = function(rates) {
        var $markets, broadcastType, chicagoIndex, cities, cityRate, i, internetType, lineItem, lineItems, losAngelesIndex, markets, newYorkIndex, numActors, numDays, numExtras, numUnits, numUses, selected, subscriberRate, subscriberRates, subscribers, unitRate, useRate, useType;
        numDays = parseInt($('#num-days').val(), 10);
        numActors = 0;
        numExtras = 0;
        i = 0;
        while (i++ < numDays) {
          numActors += parseInt($("#day-" + i + "-num-actors").val(), 10);
          numExtras += parseInt($("#day-" + i + "-num-extras").val(), 10);
        }
        useType = parseInt($('#use-type').val(), 10);
        broadcastType = -1;
        internetType = -1;
        switch (useType) {
          case 0:
            broadcastType = parseInt($('#broadcast-type').val(), 10);
            break;
          case 1:
            internetType = parseInt($('#internet-type').val(), 10);
            break;
          case 2:
            broadcastType = parseInt($('#broadcast-type').val(), 10);
            internetType = parseInt($('#internet-type').val(), 10);
        }
        lineItems = [];
        lineItem = {
          label: "",
          items: []
        };
        switch (broadcastType) {
          case 0:
            lineItem = {
              label: "Wild Spot - 13 week cycle",
              items: []
            };
            $markets = $('#markets');
            selected = $markets.val();
            markets = [];
            $(selected).each(function(i, el) {
              return markets[i] = $markets.find("[value=" + el + "]").data('value');
            });
            cities = [];
            cityRate = 0;
            chicagoIndex = markets.indexOf('Chicago');
            if (chicagoIndex !== -1) {
              cities[cities.length] = markets.splice(chicagoIndex, 1)[0];
              cityRate = rates.wild_13_major_chicago;
            }
            losAngelesIndex = markets.indexOf('Los Angeles');
            if (losAngelesIndex !== -1) {
              cities[cities.length] = markets.splice(losAngelesIndex, 1)[0];
              cityRate = rates.wild_13_major_los_angeles;
            }
            newYorkIndex = markets.indexOf('New York');
            if (newYorkIndex !== -1) {
              cities[cities.length] = markets.splice(newYorkIndex, 1)[0];
              cityRate = rates.wild_13_major_new_york;
            }
            if (cities.length === 2) {
              cityRate = rates.wild_13_major_any_2;
            }
            if (cities.length === 3) {
              cityRate = rates.wild_13_major_all_3;
            }
            if (cityRate) {
              lineItem.items.push({
                count: cities.length,
                label: "Major Markets (" + (cities.join(', ')) + ")",
                price: cityRate
              });
            }
            numUnits = markets.length ? markets.reduce(function(t, s) {
              return t + s;
            }) - 1 : 0;
            unitRate = 0;
            if (numUnits > 1) {
              unitRate = rates.wild_13_unit_2_25;
            }
            if (numUnits > 25 || cities.length) {
              unitRate = rates.wild_13_unit_26;
            }
            if (unitRate) {
              lineItem.items.push({
                count: numUnits,
                label: "Add'l Units at $ " + (unitRate.toFixed(2)),
                price: unitRate
              });
            }
            if (!cityRate && !unitRate) {
              lineItem.items.push({
                count: 0,
                label: "Please choose broadcast markets.",
                price: 0
              });
            }
            break;
          case 1:
            lineItem = {
              label: "Local Cable - 13 week cycle",
              items: []
            };
            subscribers = parseInt($('#subscribers').val(), 10);
            subscriberRates = [rates.local_1_50k, rates.local_50k_100k, rates.local_100k_150k, rates.local_150k_200k, rates.local_200k_250k, rates.local_250k_500k, rates.local_500k_750k, rates.local_750k_1m];
            subscriberRate = subscriberRates[subscribers] || 0;
            if (numActors) {
              lineItem.items.push({
                count: numActors,
                label: "Principal Actors",
                price: rates.session_actor + subscriberRate
              });
            }
            if (numExtras) {
              lineItem.items.push({
                count: numExtras,
                label: "General Extras",
                price: rates.session_extra + subscriberRate
              });
            }
            break;
          case 2:
            lineItem = {
              label: "National Cable - 13 week cycle",
              items: []
            };
            if (numActors) {
              lineItem.items.push({
                count: numActors,
                label: "Principal Actors",
                price: rates.national_min
              });
            }
            if (numExtras) {
              lineItem.items.push({
                count: numExtras,
                label: "General Extras",
                price: rates.national_min
              });
            }
            break;
          case 3:
            lineItem = {
              label: "Network Program Commercial",
              items: []
            };
            numUses = parseInt($('#num-uses').val(), 10);
            useRate = 0;
            if (numUses === 2) {
              useRate = rates.network_2;
            }
            if (numUses === 3) {
              useRate = rates.network_3;
            }
            if (numUses < 14) {
              useRate = rates.network_4_13;
            }
            if (numUses >= 14) {
              useRate = rates.network_14;
            }
            if (useRate) {
              lineItem.items.push({
                count: numUses,
                label: "Program Class A Uses",
                price: useRate
              });
            }
        }
        if (broadcastType !== -1) {
          lineItems.push(lineItem);
        }
        switch (internetType) {
          case 0:
            lineItem = {
              label: "Internet or New Media Use",
              items: [
                {
                  count: 0,
                  label: "8 Week Option",
                  price: rates.internet_8_week
                }
              ]
            };
            break;
          case 1:
            lineItem = {
              label: "Internet or New Media Use",
              items: [
                {
                  count: 0,
                  label: "1 Year Option",
                  price: rates.internet_1_year
                }
              ]
            };
        }
        if (internetType !== -1) {
          lineItems.push(lineItem);
        }
        return lineItems;
      };

      Television.offCameraUsageLineItems = function(rates) {
        var $markets, broadcastType, chicagoIndex, cities, cityRate, internetType, lineItem, lineItems, losAngelesIndex, markets, newYorkIndex, numActors, numUnits, numUses, selected, subscriberRate, subscriberRates, subscribers, unitRate, useRate, useType;
        numActors = parseInt($("#num-actors").val(), 10);
        useType = parseInt($('#use-type').val(), 10);
        broadcastType = -1;
        internetType = -1;
        switch (useType) {
          case 0:
            broadcastType = parseInt($('#broadcast-type').val(), 10);
            break;
          case 1:
            internetType = parseInt($('#internet-type').val(), 10);
            break;
          case 2:
            broadcastType = parseInt($('#broadcast-type').val(), 10);
            internetType = parseInt($('#internet-type').val(), 10);
        }
        lineItems = [];
        lineItem = {
          label: "",
          items: []
        };
        switch (broadcastType) {
          case 0:
            lineItem = {
              label: "Wild Spot - 13 week cycle",
              items: []
            };
            $markets = $('#markets');
            selected = $markets.val();
            markets = [];
            $(selected).each(function(i, el) {
              return markets[i] = $markets.find("[value=" + el + "]").data('value');
            });
            cities = [];
            cityRate = 0;
            chicagoIndex = markets.indexOf('Chicago');
            if (chicagoIndex !== -1) {
              cities[cities.length] = markets.splice(chicagoIndex, 1)[0];
              cityRate = rates.wild_13_major_chicago;
            }
            losAngelesIndex = markets.indexOf('Los Angeles');
            if (losAngelesIndex !== -1) {
              cities[cities.length] = markets.splice(losAngelesIndex, 1)[0];
              cityRate = rates.wild_13_major_los_angeles;
            }
            newYorkIndex = markets.indexOf('New York');
            if (newYorkIndex !== -1) {
              cities[cities.length] = markets.splice(newYorkIndex, 1)[0];
              cityRate = rates.wild_13_major_new_york;
            }
            if (cities.length === 2) {
              cityRate = rates.wild_13_major_any_2;
            }
            if (cities.length === 3) {
              cityRate = rates.wild_13_major_all_3;
            }
            if (cityRate) {
              lineItem.items.push({
                count: cities.length,
                label: "Major Markets (" + (cities.join(', ')) + ")",
                price: cityRate
              });
            }
            numUnits = markets.length ? markets.reduce(function(t, s) {
              return t + s;
            }) - 1 : 0;
            unitRate = 0;
            if (numUnits > 1) {
              unitRate = rates.wild_13_unit_2_25;
            }
            if (numUnits > 25 || cities.length) {
              unitRate = rates.wild_13_unit_26;
            }
            if (unitRate) {
              lineItem.items.push({
                count: numUnits,
                label: "Add'l Units at $ " + (unitRate.toFixed(2)),
                price: unitRate
              });
            }
            if (!cityRate && !unitRate) {
              lineItem.items.push({
                count: 0,
                label: "Please choose broadcast markets.",
                price: 0
              });
            }
            break;
          case 1:
            lineItem = {
              label: "Local Cable - 13 week cycle",
              items: []
            };
            subscribers = parseInt($('#subscribers').val(), 10);
            subscriberRates = [rates.local_1_50k, rates.local_50k_100k, rates.local_100k_150k, rates.local_150k_200k, rates.local_200k_250k, rates.local_250k_500k, rates.local_500k_750k, rates.local_750k_1m];
            subscriberRate = subscriberRates[subscribers] || 0;
            if (numActors) {
              lineItem.items.push({
                count: numActors,
                label: "Principal Actors",
                price: rates.session_actor + subscriberRate
              });
            }
            break;
          case 2:
            lineItem = {
              label: "Network Program Commercial",
              items: []
            };
            numUses = parseInt($('#num-uses').val(), 10);
            useRate = 0;
            if (numUses === 2) {
              useRate = rates.network_2;
            }
            if (numUses === 3) {
              useRate = rates.network_3;
            }
            if (numUses < 14) {
              useRate = rates.network_4_13;
            }
            if (numUses >= 14) {
              useRate = rates.network_14;
            }
            if (useRate) {
              lineItem.items.push({
                count: numUses,
                label: "Program Class A Uses",
                price: useRate
              });
            }
        }
        if (broadcastType !== -1) {
          lineItems.push(lineItem);
        }
        switch (internetType) {
          case 0:
            lineItem = {
              label: "Internet or New Media Use",
              items: [
                {
                  count: 0,
                  label: "8 Week Option",
                  price: rates.internet_8_week
                }
              ]
            };
            break;
          case 1:
            lineItem = {
              label: "Internet or New Media Use",
              items: [
                {
                  count: 0,
                  label: "1 Year Option",
                  price: rates.internet_1_year
                }
              ]
            };
        }
        if (internetType !== -1) {
          lineItems.push(lineItem);
        }
        return lineItems;
      };

      return Television;

    })();
    return Television;
  });

}).call(this);
