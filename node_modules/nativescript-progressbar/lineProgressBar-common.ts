import dependencyObservable = require("ui/core/dependency-observable");
import view = require("ui/core/view");
import proxy = require("ui/core/proxy");
import color = require("color");

export class LineProgressBar extends view.View {    

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new dependencyObservable.Property(
        "progress",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get progress(): number {
        return this._getValue(LineProgressBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(LineProgressBar.progressProperty, value);
    }

    //text property
    public static textProperty = new dependencyObservable.Property(
        "text",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get text(): string {
        return this._getValue(LineProgressBar.textProperty);
    }
    set text(value: string) {
        this._setValue(LineProgressBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new dependencyObservable.Property(
        "textSize",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get textSize(): number {
        return this._getValue(LineProgressBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(LineProgressBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new dependencyObservable.Property(
        "widthProgressBackground",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBackground(): number {
        return this._getValue(LineProgressBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(LineProgressBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new dependencyObservable.Property(
        "widthProgressBarLine",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBarLine(): number {
        return this._getValue(LineProgressBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(LineProgressBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new dependencyObservable.Property(
        "backgroundColorProperty",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get backgroundColor(): color.Color {
        return this._getValue(LineProgressBar.backgroundColorProperty);
    }
    set backgroundColor(value: color.Color) {
        this._setValue(LineProgressBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new dependencyObservable.Property(
        "progressColor",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get progressColor(): color.Color {
        return this._getValue(LineProgressBar.progressColorProperty);
    }
    set progressColor(value: color.Color) {
        this._setValue(LineProgressBar.progressColorProperty, value);
    }

    //linearGradient property
    public static linearGradientProperty = new dependencyObservable.Property(
        "linearGradient",
        "LineProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get linearGradient(): boolean {
        return this._getValue(LineProgressBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(LineProgressBar.linearGradientProperty, value);
    }
}