kendo.data.binders.cssIf = kendo.data.Binder.extend({

    init: function (element, bindings, options) {
        kendo.data.Binder.fn.
                init.call(
                    this, element, bindings, options
                );

        var t = $(element);
        this.c = t.data("class") || t.data("classTrue") || "enabled";
        this.nc = t.data("class") || t.data("classFalse") || "disabled";
        this.o = t.data("operator");
        this.v = t.data("value");
        this.x = t.data("classNone");
    },

    refresh: function () {
        var w = this.bindings.cssIf.get(),
           a = false,
           e = $(this.element)
        if (w === undefined || w === null) {
            if (this.x !== undefined) {
                e.addClass(this.x);
            }
        }
        else {
            if (this.o === "=" && w === this.v) {
                a = true;
            } else if (this.o === ">" && w > this.v) {
                a = true;
            } else if (this.o === "<" && w < this.v) {
                a = true;
            } else if (this.o === ">=" && w >= this.v) {
                a = true;
            } else if (this.o === "<=" && w <= this.v) {
                a = true;
            } else if (this.o === "!=" && w !== this.v) {
                a = true;
            }
            if (a) {
                e.addClass(this.c);
                if (this.c !== this.nc) {
                    e.removeClass(this.nc);
                }
            } else {
                e.removeClass(this.c);
                if (this.c !== this.nc) {
                    e.addClass(this.nc);
                }
            }
        }
    }
});