"use strict";
var dependencyObservable = require("ui/core/dependency-observable");
var view = require("ui/core/view");
var proxy = require("ui/core/proxy");
var LineProgressBar = (function (_super) {
    __extends(LineProgressBar, _super);
    function LineProgressBar() {
        _super.call(this);
    }
    Object.defineProperty(LineProgressBar.prototype, "progress", {
        get: function () {
            return this._getValue(LineProgressBar.progressProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.progressProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineProgressBar.prototype, "text", {
        get: function () {
            return this._getValue(LineProgressBar.textProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.textProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineProgressBar.prototype, "textSize", {
        get: function () {
            return this._getValue(LineProgressBar.textSizeProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.textSizeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineProgressBar.prototype, "widthProgressBackground", {
        get: function () {
            return this._getValue(LineProgressBar.widthProgressBackgroundProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.widthProgressBackgroundProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineProgressBar.prototype, "widthProgressBarLine", {
        get: function () {
            return this._getValue(LineProgressBar.widthProgressBarLineProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.widthProgressBarLineProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineProgressBar.prototype, "backgroundColor", {
        get: function () {
            return this._getValue(LineProgressBar.backgroundColorProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.backgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineProgressBar.prototype, "progressColor", {
        get: function () {
            return this._getValue(LineProgressBar.progressColorProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.progressColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineProgressBar.prototype, "linearGradient", {
        get: function () {
            return this._getValue(LineProgressBar.linearGradientProperty);
        },
        set: function (value) {
            this._setValue(LineProgressBar.linearGradientProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    //progress property
    LineProgressBar.progressProperty = new dependencyObservable.Property("progress", "LineProgressBar", new proxy.PropertyMetadata(false));
    //text property
    LineProgressBar.textProperty = new dependencyObservable.Property("text", "LineProgressBar", new proxy.PropertyMetadata(false));
    //textSize property
    LineProgressBar.textSizeProperty = new dependencyObservable.Property("textSize", "LineProgressBar", new proxy.PropertyMetadata(false));
    //widthProgressBackground property
    LineProgressBar.widthProgressBackgroundProperty = new dependencyObservable.Property("widthProgressBackground", "LineProgressBar", new proxy.PropertyMetadata(false));
    //widthProgressBarLine property
    LineProgressBar.widthProgressBarLineProperty = new dependencyObservable.Property("widthProgressBarLine", "LineProgressBar", new proxy.PropertyMetadata(false));
    //backgroundColor property
    LineProgressBar.backgroundColorProperty = new dependencyObservable.Property("backgroundColorProperty", "LineProgressBar", new proxy.PropertyMetadata(false));
    //progressColor property
    LineProgressBar.progressColorProperty = new dependencyObservable.Property("progressColor", "LineProgressBar", new proxy.PropertyMetadata(false));
    //linearGradient property
    LineProgressBar.linearGradientProperty = new dependencyObservable.Property("linearGradient", "LineProgressBar", new proxy.PropertyMetadata(false));
    return LineProgressBar;
}(view.View));
exports.LineProgressBar = LineProgressBar;
//# sourceMappingURL=lineProgressBar-common.js.map