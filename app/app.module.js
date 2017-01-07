"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./pages/home/home.component");
var event_add_component_1 = require("./pages/event-add/event-add.component");
var router_2 = require("./shared/router/router");
var event_handeler_provider_1 = require("./shared/providers/event-handeler/event-handeler.provider");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, event_add_component_1.EventAddComponent].concat(router_2.navigatableComponents),
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(router_2.routes),
                forms_1.NativeScriptFormsModule,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [event_handeler_provider_1.EventHandeler],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map