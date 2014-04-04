kendo.data.binders.textToggle = kendo.data.Binder.extend({
    init: function (element, bindings, options) {

        kendo.data.Binder.fn.
                    init.call(
                     this, element, bindings, options
                   );

        var t = $(element);
        this.tt = t.data("textTrue") || "true";
        this.tf = t.data("textFalse") || "false";
    },

    refresh: function () {
        var e = $(this.element);
        if (this.bindings.textToggle.get()) {
            $(this.element).text(this.tt);
        } else {
            $(this.element).text(this.tf);
        }
    }
});