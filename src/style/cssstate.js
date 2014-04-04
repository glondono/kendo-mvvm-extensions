kendo.data.binders.cssState = kendo.data.Binder.extend({

    init: function (element, bindings, options) {

        kendo.data.Binder.fn.
                    init.call(
                     this, element, bindings, options
                   );

        var target = $(element);

        statePairs = target.data("classStates").split(",");
        ar = [];
        for (var e in statePairs) {
            var pair = statePairs[e].split(":");
            ar.push(
              kendo.format("\"{0}\":\"{1}\"",
                           pair[0].trim(),
                           pair[1].trim()
                          )
            );
        }
        this.states = JSON.parse(
                        kendo.format("{{0}}", ar.join(",")
                      )
        );
        this.else = target.data("none");
    },

    refresh: function () {
        var target = $(this.element);
        for (var removeCss in this.states) {
            target.removeClass(this.states[removeCss]);
        }
        var setCss = this.states
                     [
                       this.bindings.cssState.get()
        ];
        if (setCss === undefined) {
            if (this.else !== undefined) {
                target.addClass(this.else);
            }
        }
        else {
            target.removeClass(this.else);
        }
        target.addClass(setCss);
    }
});