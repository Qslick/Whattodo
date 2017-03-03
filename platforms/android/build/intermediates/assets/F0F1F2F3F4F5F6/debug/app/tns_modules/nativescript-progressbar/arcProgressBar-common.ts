import dependencyObservable = require("ui/core/dependency-observable");
import view = require("ui/core/view");
import proxy = require("ui/core/proxy");
import color = require("color");

export class ArcProgressBar extends view.View {    

    constructor() {
        super();
    }

    //progress property
    public static progressProperty = new dependencyObservable.Property(
        "progress",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get progress(): number {
        return this._getValue(ArcProgressBar.progressProperty);
    }
    set progress(value: number) {
        this._setValue(ArcProgressBar.progressProperty, value);
    }

    //text property
    public static textProperty = new dependencyObservable.Property(
        "text",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get text(): string {
        return this._getValue(ArcProgressBar.textProperty);
    }
    set text(value: string) {
        this._setValue(ArcProgressBar.textProperty, value);
    }

    //textSize property
    public static textSizeProperty = new dependencyObservable.Property(
        "textSize",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get textSize(): number {
        return this._getValue(ArcProgressBar.textSizeProperty);
    }
    set textSize(value: number) {
        this._setValue(ArcProgressBar.textSizeProperty, value);
    }

    //widthProgressBackground property
    public static widthProgressBackgroundProperty = new dependencyObservable.Property(
        "widthProgressBackground",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBackground(): number {
        return this._getValue(ArcProgressBar.widthProgressBackgroundProperty);
    }
    set widthProgressBackground(value: number) {
        this._setValue(ArcProgressBar.widthProgressBackgroundProperty, value);
    }

    //widthProgressBarLine property
    public static widthProgressBarLineProperty = new dependencyObservable.Property(
        "widthProgressBarLine",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get widthProgressBarLine(): number {
        return this._getValue(ArcProgressBar.widthProgressBarLineProperty);
    }
    set widthProgressBarLine(value: number) {
        this._setValue(ArcProgressBar.widthProgressBarLineProperty, value);
    }

    //backgroundColor property
    public static backgroundColorProperty = new dependencyObservable.Property(
        "backgroundColorProperty",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get backgroundColor(): color.Color {
        return this._getValue(ArcProgressBar.backgroundColorProperty);
    }
    set backgroundColor(value: color.Color) {
        this._setValue(ArcProgressBar.backgroundColorProperty, value);
    }

    //progressColor property
    public static progressColorProperty = new dependencyObservable.Property(
        "progressColor",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get progressColor(): color.Color {
        return this._getValue(ArcProgressBar.progressColorProperty);
    }
    set progressColor(value: color.Color) {
        this._setValue(ArcProgressBar.progressColorProperty, value);
    }
/*
    //linearGradient property
    public static linearGradientProperty = new dependencyObservable.Property(
        "linearGradient",
        "ArcProgressBar",
        new proxy.PropertyMetadata(false)
    );
    get linearGradient(): boolean {
        return this._getValue(ArcProgressBar.linearGradientProperty);
    }
    set linearGradient(value: boolean) {
        this._setValue(ArcProgressBar.linearGradientProperty, value);
    }
*/
}