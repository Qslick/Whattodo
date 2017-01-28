import viewModule = require("ui/core/view");

import observable = require("data/observable");
import dependencyObservable = require("ui/core/dependency-observable");
import color = require("color");

import common = require("./circleSegmentBar-common");
global.moduleMerge(common, exports);

export class CircleSegmentBar extends common.CircleSegmentBar {
    
    private _android: any;

    get android(): any {
        return this._android;
    }

    public _createUI() {
        this._android = new com.natasa.progressviews.CircleSegmentBar(this._context);
    }
    
    
    constructor(context) {
        super();
    }

}


//progress property
function onProgressPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setProgress(data.newValue);
}
common.CircleSegmentBar.progressProperty.metadata.onSetNativeValue = onProgressPropertyChanged;

//text property
function onTextPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setText(data.newValue);
}
common.CircleSegmentBar.textProperty.metadata.onSetNativeValue = onTextPropertyChanged;

//textSize property
function onTextSizePropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setTextSize(data.newValue);
}
common.CircleSegmentBar.textSizeProperty.metadata.onSetNativeValue = onTextSizePropertyChanged;

//widthProgressBackground property
function onWidthProgressBackgroundPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBackground(data.newValue);
}
common.CircleSegmentBar.widthProgressBackgroundProperty.metadata.onSetNativeValue = onWidthProgressBackgroundPropertyChanged;

//widthProgressBarLine property
function onWidthProgressBarLinePropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setWidthProgressBarLine(data.newValue);
}
common.CircleSegmentBar.widthProgressBarLineProperty.metadata.onSetNativeValue = onWidthProgressBarLinePropertyPropertyChanged;

//backgroundColor property
function onBackgroundColorPropertyPropertyChanged(data) {
    if(color.Color.isValid(data.newValue)){
        var mycomponent = data.object;
        var droidColor = new color.Color(data.newValue).android;
        mycomponent.android.setBackgroundColor(droidColor);
    } else {
        console.log("The background color: " + data.newValue + " is invalid.");
    }
}
common.CircleSegmentBar.backgroundColorProperty.metadata.onSetNativeValue = onBackgroundColorPropertyPropertyChanged;

//progressColor property
function onProgressColorPropertyPropertyChanged(data) {
    if(color.Color.isValid(data.newValue)){
        var mycomponent = data.object;
        var droidColor = new color.Color(data.newValue).android;
        mycomponent.android.setProgressColor(droidColor);
    } else {
        console.log("The progress color: " + data.newValue + " is invalid.");
    }
}
common.CircleSegmentBar.progressColorProperty.metadata.onSetNativeValue = onProgressColorPropertyPropertyChanged;

//linearGradient property
function onLinearGradientPropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.android.setLinearGradientProgress(data.newValue);
}
common.CircleSegmentBar.linearGradientProperty.metadata.onSetNativeValue = onLinearGradientPropertyPropertyChanged;
