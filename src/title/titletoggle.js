kendo.data.binders.titleToggle = kendo.data.Binder.extend({
    init: function (element, bindings, options) {

        kendo.data.Binder.fn.
                    init.call(
                     this, element, bindings, options
                   );

        var t = $(element);
        this.tt = t.data("titleTrue") || "true";
        this.tf = t.data("titleFalse") || "false";
    },

    refresh: function () {
        var e = $(this.element);
        if (this.bindings.cssToggle.get()) {
            $(this.element).attr("title", this.tt);
        } else {
            $(this.element).attr("title", this.tf);
        }
    }
});