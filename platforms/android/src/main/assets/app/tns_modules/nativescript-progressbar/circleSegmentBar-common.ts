import dependencyObservable = require("ui/core/dependency-observable");
import view = require("ui/core/view");
import proxy = require("ui/core/proxy");
import color = require("color");

export class CircleSegmentBar extends view.View {    

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new dependencyObservable.Property(
        "progress",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get progress(): number {
        return this._getValue(CircleSegmentBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(CircleSegmentBar.progressProperty, value);
    }

    //text property
    public static textProperty = new dependencyObservable.Property(
        "text",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get text(): string {
        return this._getValue(CircleSegmentBar.textProperty);
    }
    set text(value: string) {
        this._setValue(CircleSegmentBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new dependencyObservable.Property(
        "textSize",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get textSize(): number {
        return this._getValue(CircleSegmentBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(CircleSegmentBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new dependencyObservable.Property(
        "widthProgressBackground",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBackground(): number {
        return this._getValue(CircleSegmentBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(CircleSegmentBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new dependencyObservable.Property(
        "widthProgressBarLine",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBarLine(): number {
        return this._getValue(CircleSegmentBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(CircleSegmentBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new dependencyObservable.Property(
        "backgroundColorProperty",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get backgroundColor(): color.Color {
        return this._getValue(CircleSegmentBar.backgroundColorProperty);
    }
    set backgroundColor(value: color.Color) {
        this._setValue(CircleSegmentBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new dependencyObservable.Property(
        "progressColor",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get progressColor(): color.Color {
        return this._getValue(CircleSegmentBar.progressColorProperty);
    }
    set progressColor(value: color.Color) {
        this._setValue(CircleSegmentBar.progressColorProperty, value);
    }

    //linearGradient property
    public static linearGradientProperty = new dependencyObservable.Property(
        "linearGradient",
        "CircleSegmentBar",
        new proxy.PropertyMetadata(false)
    );
    get linearGradient(): boolean {
        return this._getValue(CircleSegmentBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(CircleSegmentBar.linearGradientProperty, value);
    }
}