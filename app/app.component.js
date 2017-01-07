"use strict";
var core_1 = require("@angular/core");
var event_handeler_provider_1 = require("./shared/providers/event-handeler/event-handeler.provider");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    AppComponent.prototype.get1 = function () {
        return this.counter;
    };
    AppComponent.prototype.decreace = function () {
        this.counter--;
        return this.counter;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n     <page-router-outlet></page-router-outlet>\n    ",
            providers: [event_handeler_provider_1.EventHandeler],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map