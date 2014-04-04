kendo.data.binders.textFormat = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        kendo.data.Binder.fn.
               init.call(
                   this, element, bindings, options
               );

        var t = $(element);
        this.f = t.data("format");
        this.m = t.data("trim");
        this.n = t.data("none");
    },

    refresh: function () {
        var t = $(this.element),
            v = this.bindings.textFormat.get(),
            w = this.m

        if (this.n !== undefined && (v === undefined || v === null)) {
            t.html(this.n);
        } else {
            var x = kendo.toString(v, this.f);
            if (w !== undefined && x.length > w) {
                x = x.substr(0, w) + "...";
            }
            t.html(x);
        }
    }
});