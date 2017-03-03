"use strict";
var dependencyObservable = require("ui/core/dependency-observable");
var view = require("ui/core/view");
var proxy = require("ui/core/proxy");
var ArcProgressBar = (function (_super) {
    __extends(ArcProgressBar, _super);
    function ArcProgressBar() {
        _super.call(this);
    }
    Object.defineProperty(ArcProgressBar.prototype, "progress", {
        get: function () {
            return this._getValue(ArcProgressBar.progressProperty);
        },
        set: function (value) {
            this._setValue(ArcProgressBar.progressProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcProgressBar.prototype, "text", {
        get: function () {
            return this._getValue(ArcProgressBar.textProperty);
        },
        set: function (value) {
            this._setValue(ArcProgressBar.textProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcProgressBar.prototype, "textSize", {
        get: function () {
            return this._getValue(ArcProgressBar.textSizeProperty);
        },
        set: function (value) {
            this._setValue(ArcProgressBar.textSizeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcProgressBar.prototype, "widthProgressBackground", {
        get: function () {
            return this._getValue(ArcProgressBar.widthProgressBackgroundProperty);
        },
        set: function (value) {
            this._setValue(ArcProgressBar.widthProgressBackgroundProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcProgressBar.prototype, "widthProgressBarLine", {
        get: function () {
            return this._getValue(ArcProgressBar.widthProgressBarLineProperty);
        },
        set: function (value) {
            this._setValue(ArcProgressBar.widthProgressBarLineProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcProgressBar.prototype, "backgroundColor", {
        get: function () {
            return this._getValue(ArcProgressBar.backgroundColorProperty);
        },
        set: function (value) {
            this._setValue(ArcProgressBar.backgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcProgressBar.prototype, "progressColor", {
        get: function () {
            return this._getValue(ArcProgressBar.progressColorProperty);
        },
        set: function (value) {
            this._setValue(ArcProgressBar.progressColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    //progress property
    ArcProgressBar.progressProperty = new dependencyObservable.Property("progress", "ArcProgressBar", new proxy.PropertyMetadata(false));
    //text property
    ArcProgressBar.textProperty = new dependencyObservable.Property("text", "ArcProgressBar", new proxy.PropertyMetadata(false));
    //textSize property
    ArcProgressBar.textSizeProperty = new dependencyObservable.Property("textSize", "ArcProgressBar", new proxy.PropertyMetadata(false));
    //widthProgressBackground property
    ArcProgressBar.widthProgressBackgroundProperty = new dependencyObservable.Property("widthProgressBackground", "ArcProgressBar", new proxy.PropertyMetadata(false));
    //widthProgressBarLine property
    ArcProgressBar.widthProgressBarLineProperty = new dependencyObservable.Property("widthProgressBarLine", "ArcProgressBar", new proxy.PropertyMetadata(false));
    //backgroundColor property
    ArcProgressBar.backgroundColorProperty = new dependencyObservable.Property("backgroundColorProperty", "ArcProgressBar", new proxy.PropertyMetadata(false));
    //progressColor property
    ArcProgressBar.progressColorProperty = new dependencyObservable.Property("progressColor", "ArcProgressBar", new proxy.PropertyMetadata(false));
    return ArcProgressBar;
}(view.View));
exports.ArcProgressBar = ArcProgressBar;
//# sourceMappingURL=arcProgressBar-common.js.map