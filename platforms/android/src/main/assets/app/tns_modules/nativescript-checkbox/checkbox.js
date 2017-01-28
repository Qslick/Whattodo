"use strict";
var view_1 = require("ui/core/view");
var color_1 = require("color");
var platform_1 = require("platform");
var dependency_observable_1 = require("ui/core/dependency-observable");
var proxy_1 = require("ui/core/proxy");
var style = require("ui/styling/style");
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        _super.call(this);
    }
    Object.defineProperty(CheckBox.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "checked", {
        get: function () {
            return this._getValue(CheckBox.checkedProperty);
        },
        set: function (value) {
            this._setValue(CheckBox.checkedProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "text", {
        get: function () {
            return this._getValue(CheckBox.textProperty);
        },
        set: function (value) {
            this._setValue(CheckBox.textProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "fillColor", {
        get: function () {
            return this._fillColor;
        },
        set: function (color) {
            this._fillColor = color;
            if (this._android && platform_1.device.sdkVersion >= "21")
                this._android.setButtonTintList(android.content.res.ColorStateList.valueOf(new color_1.Color(this._fillColor).android));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "tintColor", {
        get: function () {
            return this.fillColor;
        },
        set: function (color) {
            this.fillColor = color;
        },
        enumerable: true,
        configurable: true
    });
    CheckBox.prototype._createUI = function () {
        this._android = new android.widget.CheckBox(this._context, null);
        if (this.text) {
            this._android.setText(this.text);
        }
        if (!this.style.fontSize) {
            this.style.fontSize = 15;
        }
        if (this._android) {
            if (this.fillColor && platform_1.device.sdkVersion >= "21") {
                this._android.setButtonTintList(android.content.res.ColorStateList.valueOf(new color_1.Color(this._fillColor).android));
            }
        }
        var that = new WeakRef(this);
        this._android.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
            get owner() {
                return that.get();
            },
            onCheckedChanged: function (sender, isChecked) {
                if (this.owner) {
                    this.owner._onPropertyChangedFromNative(CheckBox.checkedProperty, isChecked);
                }
            }
        }));
    };
    CheckBox.prototype.toggle = function () {
        this._android.toggle();
    };
    CheckBox.checkedProperty = new dependency_observable_1.Property("checked", "CheckBox", new proxy_1.PropertyMetadata(false));
    CheckBox.textProperty = new dependency_observable_1.Property("text", "CheckBox", new proxy_1.PropertyMetadata(false));
    return CheckBox;
}(view_1.View));
exports.CheckBox = CheckBox;
function onCheckedPropertyChanged(data) {
    var cBox = data.object;
    if (!cBox.android) {
        return;
    }
    cBox.android.setChecked(data.newValue);
}
CheckBox.checkedProperty.metadata.onSetNativeValue = onCheckedPropertyChanged;
function onTextPropertyChanged(data) {
    var cBox = data.object;
    if (!cBox.android) {
        return;
    }
    cBox.android.setText(data.newValue);
}
CheckBox.textProperty.metadata.onSetNativeValue = onTextPropertyChanged;
var CheckBoxStyler = (function () {
    function CheckBoxStyler() {
    }
    CheckBoxStyler.setColorLabelProperty = function (view, newValue) {
        var cb = view._nativeView;
        if (cb) {
            cb.setTextColor(new color_1.Color(newValue).android);
        }
    };
    CheckBoxStyler.setFontInternalProperty = function (view, newValue, nativeValue) {
        var tv = view._nativeView;
        var fontValue = newValue;
        var typeface = fontValue.getAndroidTypeface();
        if (typeface) {
            tv.setTypeface(typeface);
        }
        else {
            tv.setTypeface(nativeValue.typeface);
        }
        if (fontValue.fontSize) {
            tv.setTextSize(fontValue.fontSize);
        }
        else {
            tv.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, nativeValue.size);
        }
    };
    CheckBoxStyler.resetFontInternalProperty = function (view, nativeValue) {
        var tv = view._nativeView;
        if (tv && nativeValue) {
            tv.setTypeface(nativeValue.typeface);
            tv.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, nativeValue.size);
        }
    };
    CheckBoxStyler.getNativeFontInternalValue = function (view) {
        var tv = view._nativeView;
        return {
            typeface: tv.getTypeface(),
            size: tv.getTextSize()
        };
    };
    CheckBoxStyler.resetColorProperty = function (view, nativeValue) {
    };
    CheckBoxStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(CheckBoxStyler.setColorLabelProperty, CheckBoxStyler.resetColorProperty), "CheckBox");
        style.registerHandler(style.fontInternalProperty, new style.StylePropertyChangedHandler(CheckBoxStyler.setFontInternalProperty, CheckBoxStyler.resetFontInternalProperty, CheckBoxStyler.getNativeFontInternalValue), "CheckBox");
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(CheckBoxStyler.setColorLabelProperty, CheckBoxStyler.resetColorProperty), "CheckBox");
    };
    return CheckBoxStyler;
}());
exports.CheckBoxStyler = CheckBoxStyler;
CheckBoxStyler.registerHandlers();
