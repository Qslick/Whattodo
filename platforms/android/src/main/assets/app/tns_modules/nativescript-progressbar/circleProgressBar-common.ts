import dependencyObservable = require("ui/core/dependency-observable");
import view = require("ui/core/view");
import proxy = require("ui/core/proxy");
import color = require("color");

export class CircleProgressBar extends view.View {    

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new dependencyObservable.Property(
        "progress",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get progress(): number {
        return this._getValue(CircleProgressBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(CircleProgressBar.progressProperty, value);
    }

    //text property
    public static textProperty = new dependencyObservable.Property(
        "text",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get text(): string {
        return this._getValue(CircleProgressBar.textProperty);
    }
    set text(value: string) {
        this._setValue(CircleProgressBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new dependencyObservable.Property(
        "textSize",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get textSize(): number {
        return this._getValue(CircleProgressBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(CircleProgressBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new dependencyObservable.Property(
        "widthProgressBackground",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBackground(): number {
        return this._getValue(CircleProgressBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(CircleProgressBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new dependencyObservable.Property(
        "widthProgressBarLine",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBarLine(): number {
        return this._getValue(CircleProgressBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(CircleProgressBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new dependencyObservable.Property(
        "backgroundColorProperty",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get backgroundColor(): color.Color {
        return this._getValue(CircleProgressBar.backgroundColorProperty);
    }
    set backgroundColor(value: color.Color) {
        this._setValue(CircleProgressBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new dependencyObservable.Property(
        "progressColor",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get progressColor(): color.Color {
        return this._getValue(CircleProgressBar.progressColorProperty);
    }
    set progressColor(value: color.Color) {
        this._setValue(CircleProgressBar.progressColorProperty, value);
    }

    //linearGradient property
    public static linearGradientProperty = new dependencyObservable.Property(
        "linearGradient",
        "CircleProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get linearGradient(): boolean {
        return this._getValue(CircleProgressBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(CircleProgressBar.linearGradientProperty, value);
    }
}