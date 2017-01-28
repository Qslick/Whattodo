"use strict";
var color = require("color");
var common = require("./circleProgressBar-common");
global.moduleMerge(common, exports);
var CircleProgressBar = (function (_super) {
    __extends(CircleProgressBar, _super);
    function CircleProgressBar(context) {
        _super.call(this);
    }
    Object.defineProperty(CircleProgressBar.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    CircleProgressBar.prototype._createUI = function () {
        this._android = new com.natasa.progressviews.CircleProgressBar(this._context);
    };
    return CircleProgressBar;
}(common.CircleProgressBar));
exports.CircleProgressBar = CircleProgressBar;
//progress property
function onProgressPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setProgress(data.newValue);
}
common.CircleProgressBar.progressProperty.metadata.onSetNativeValue = onProgressPropertyChanged;
//text property
function onTextPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setText(data.newValue);
}
common.CircleProgressBar.textProperty.metadata.onSetNativeValue = onTextPropertyChanged;
//textSize property
function onTextSizePropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setTextSize(data.newValue);
}
common.CircleProgressBar.textSizeProperty.metadata.onSetNativeValue = onTextSizePropertyChanged;
//widthProgressBackground property
function onWidthProgressBackgroundPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBackground(data.newValue);
}
common.CircleProgressBar.widthProgressBackgroundProperty.metadata.onSetNativeValue = onWidthProgressBackgroundPropertyChanged;
//widthProgressBarLine property
function onWidthProgressBarLinePropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBarLine(data.newValue);
}
common.CircleProgressBar.widthProgressBarLineProperty.metadata.onSetNativeValue = onWidthProgressBarLinePropertyPropertyChanged;
//backgroundColor property
function onBackgroundColorPropertyPropertyChanged(data) {
    if (color.Color.isValid(data.newValue)) {
        var mycomponent = data.object;
        var droidColor = new color.Color(data.newValue).android;
        mycomponent.android.setBackgroundColor(droidColor);
    }
    else {
        console.log("The background color: " + data.newValue + " is invalid.");
    }
}
common.CircleProgressBar.backgroundColorProperty.metadata.onSetNativeValue = onBackgroundColorPropertyPropertyChanged;
//progressColor property
function onProgressColorPropertyPropertyChanged(data) {
    if (color.Color.isValid(data.newValue)) {
        var mycomponent = data.object;
        var droidColor = new color.Color(data.newValue).android;
        mycomponent.android.setProgressColor(droidColor);
    }
    else {
        console.log("The progress color: " + data.newValue + " is invalid.");
    }
}
common.CircleProgressBar.progressColorProperty.metadata.onSetNativeValue = onProgressColorPropertyPropertyChanged;
//linearGradient property
function onLinearGradientPropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setLinearGradientProgress(data.newValue);
}
common.CircleProgressBar.linearGradientProperty.metadata.onSetNativeValue = onLinearGradientPropertyPropertyChanged;
//# sourceMappingURL=circleProgressBar.android.js.map