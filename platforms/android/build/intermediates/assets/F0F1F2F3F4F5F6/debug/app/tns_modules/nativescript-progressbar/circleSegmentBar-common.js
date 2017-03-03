"use strict";
var dependencyObservable = require("ui/core/dependency-observable");
var view = require("ui/core/view");
var proxy = require("ui/core/proxy");
var CircleSegmentBar = (function (_super) {
    __extends(CircleSegmentBar, _super);
    function CircleSegmentBar() {
        _super.call(this);
    }
    Object.defineProperty(CircleSegmentBar.prototype, "progress", {
        get: function () {
            return this._getValue(CircleSegmentBar.progressProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.progressProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleSegmentBar.prototype, "text", {
        get: function () {
            return this._getValue(CircleSegmentBar.textProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.textProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleSegmentBar.prototype, "textSize", {
        get: function () {
            return this._getValue(CircleSegmentBar.textSizeProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.textSizeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleSegmentBar.prototype, "widthProgressBackground", {
        get: function () {
            return this._getValue(CircleSegmentBar.widthProgressBackgroundProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.widthProgressBackgroundProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleSegmentBar.prototype, "widthProgressBarLine", {
        get: function () {
            return this._getValue(CircleSegmentBar.widthProgressBarLineProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.widthProgressBarLineProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleSegmentBar.prototype, "backgroundColor", {
        get: function () {
            return this._getValue(CircleSegmentBar.backgroundColorProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.backgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleSegmentBar.prototype, "progressColor", {
        get: function () {
            return this._getValue(CircleSegmentBar.progressColorProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.progressColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleSegmentBar.prototype, "linearGradient", {
        get: function () {
            return this._getValue(CircleSegmentBar.linearGradientProperty);
        },
        set: function (value) {
            this._setValue(CircleSegmentBar.linearGradientProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    //progress property
    CircleSegmentBar.progressProperty = new dependencyObservable.Property("progress", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    //text property
    CircleSegmentBar.textProperty = new dependencyObservable.Property("text", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    //textSize property
    CircleSegmentBar.textSizeProperty = new dependencyObservable.Property("textSize", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    //widthProgressBackground property
    CircleSegmentBar.widthProgressBackgroundProperty = new dependencyObservable.Property("widthProgressBackground", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    //widthProgressBarLine property
    CircleSegmentBar.widthProgressBarLineProperty = new dependencyObservable.Property("widthProgressBarLine", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    //backgroundColor property
    CircleSegmentBar.backgroundColorProperty = new dependencyObservable.Property("backgroundColorProperty", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    //progressColor property
    CircleSegmentBar.progressColorProperty = new dependencyObservable.Property("progressColor", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    //linearGradient property
    CircleSegmentBar.linearGradientProperty = new dependencyObservable.Property("linearGradient", "CircleSegmentBar", new proxy.PropertyMetadata(false));
    return CircleSegmentBar;
}(view.View));
exports.CircleSegmentBar = CircleSegmentBar;
//# sourceMappingURL=circleSegmentBar-common.js.map