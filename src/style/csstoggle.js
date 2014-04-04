kendo.data.binders.cssToggle = kendo.data.Binder.extend({

    init: function (element, bindings, options) {

        kendo.data.Binder.fn.
                    init.call(
                     this, element, bindings, options
                   );

        var t = $(element);
        this.c = t.data("class") || t.data("classTrue") || "enabled";
        this.nc = t.data("class") || t.data("classFalse") || "disabled";
    },

    refresh: function () {
        var e = $(this.element);
        if (this.bindings.cssToggle.get()) {
            e.addClass(this.c);
        } else {
            e.removeClass(this.c);
            if (this.c !== this.nc) {
                e.addClass(this.nc);
            }
        }
    }

});