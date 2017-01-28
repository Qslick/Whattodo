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
var database_1 = require("./shared/database/database");
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
            providers: [event_handeler_provider_1.EventHandeler, database_1.Database],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx5QkFBbUMsK0JBQStCLENBQUMsQ0FBQTtBQUNuRSx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUN2RSxzQkFBd0MsNEJBRXhDLENBQUMsQ0FGbUU7QUFFcEUsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsK0JBQThCLDZCQUE2QixDQUFDLENBQUE7QUFDNUQsb0NBQWtDLHVDQUF1QyxDQUFDLENBQUE7QUFFMUUsdUJBQThDLHdCQUF3QixDQUFDLENBQUE7QUFFdkUsd0NBQThCLDJEQUEyRCxDQUFDLENBQUE7QUFDMUYseUJBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFpQnREO0lBQUE7SUFBeUIsQ0FBQztJQWYxQjtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQ3ZCLDhCQUFhLEVBQ2IsdUNBQWlCLFNBRWQsOEJBQXFCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyw2QkFBa0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLGVBQU0sQ0FBQztnQkFDeEMsK0JBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsdUNBQWEsRUFBRSxtQkFBUSxDQUFDO1NBQ3ZDLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFdmVudEFkZENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2V2ZW50LWFkZC9ldmVudC1hZGQuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL3NoYXJlZC9yb3V0ZXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEV2ZW50UHJvdmlkZXIgfSBmcm9tIFwiLi9zaGFyZWQvcHJvdmlkZXJzL2V2ZW50L2V2ZW50LnByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGVsZXIgfSBmcm9tIFwiLi9zaGFyZWQvcHJvdmlkZXJzL2V2ZW50LWhhbmRlbGVyL2V2ZW50LWhhbmRlbGVyLnByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4vc2hhcmVkL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgRXZlbnRBZGRDb21wb25lbnQsXHJcblxyXG4gICAgICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c10sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgICBwcm92aWRlcnM6IFtFdmVudEhhbmRlbGVyLCBEYXRhYmFzZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==