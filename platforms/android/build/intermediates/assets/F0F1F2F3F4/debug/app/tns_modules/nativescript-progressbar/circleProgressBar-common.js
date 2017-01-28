"use strict";
var dependencyObservable = require("ui/core/dependency-observable");
var view = require("ui/core/view");
var proxy = require("ui/core/proxy");
var CircleProgressBar = (function (_super) {
    __extends(CircleProgressBar, _super);
    function CircleProgressBar() {
        _super.call(this);
    }
    Object.defineProperty(CircleProgressBar.prototype, "progress", {
        get: function () {
            return this._getValue(CircleProgressBar.progressProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.progressProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleProgressBar.prototype, "text", {
        get: function () {
            return this._getValue(CircleProgressBar.textProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.textProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleProgressBar.prototype, "textSize", {
        get: function () {
            return this._getValue(CircleProgressBar.textSizeProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.textSizeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleProgressBar.prototype, "widthProgressBackground", {
        get: function () {
            return this._getValue(CircleProgressBar.widthProgressBackgroundProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.widthProgressBackgroundProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleProgressBar.prototype, "widthProgressBarLine", {
        get: function () {
            return this._getValue(CircleProgressBar.widthProgressBarLineProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.widthProgressBarLineProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleProgressBar.prototype, "backgroundColor", {
        get: function () {
            return this._getValue(CircleProgressBar.backgroundColorProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.backgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleProgressBar.prototype, "progressColor", {
        get: function () {
            return this._getValue(CircleProgressBar.progressColorProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.progressColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleProgressBar.prototype, "linearGradient", {
        get: function () {
            return this._getValue(CircleProgressBar.linearGradientProperty);
        },
        set: function (value) {
            this._setValue(CircleProgressBar.linearGradientProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    //progress property
    CircleProgressBar.progressProperty = new dependencyObservable.Property("progress", "CircleProgressBar", new proxy.PropertyMetadata(false));
    //text property
    CircleProgressBar.textProperty = new dependencyObservable.Property("text", "CircleProgressBar", new proxy.PropertyMetadata(false));
    //textSize property
    CircleProgressBar.textSizeProperty = new dependencyObservable.Property("textSize", "CircleProgressBar", new proxy.PropertyMetadata(false));
    //widthProgressBackground property
    CircleProgressBar.widthProgressBackgroundProperty = new dependencyObservable.Property("widthProgressBackground", "CircleProgressBar", new proxy.PropertyMetadata(false));
    //widthProgressBarLine property
    CircleProgressBar.widthProgressBarLineProperty = new dependencyObservable.Property("widthProgressBarLine", "CircleProgressBar", new proxy.PropertyMetadata(false));
    //backgroundColor property
    CircleProgressBar.backgroundColorProperty = new dependencyObservable.Property("backgroundColorProperty", "CircleProgressBar", new proxy.PropertyMetadata(false));
    //progressColor property
    CircleProgressBar.progressColorProperty = new dependencyObservable.Property("progressColor", "CircleProgressBar", new proxy.PropertyMetadata(false));
    //linearGradient property
    CircleProgressBar.linearGradientProperty = new dependencyObservable.Property("linearGradient", "CircleProgressBar", new proxy.PropertyMetadata(false));
    return CircleProgressBar;
}(view.View));
exports.CircleProgressBar = CircleProgressBar;
//# sourceMappingURL=circleProgressBar-common.js.map