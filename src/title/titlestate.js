kendo.data.binders.titleState = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        kendo.data.Binder.fn.
                    init.call(
                     this, element, bindings, options
                   );

        var target = $(element);

        statePairs = target.data("titleStates").split(",");
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
    },

    refresh: function () {
        var target = $(this.element);
        var t = this.states
                     [
                       this.bindings.titleState.get()
        ];
        target.attr("title", t);
    }
});