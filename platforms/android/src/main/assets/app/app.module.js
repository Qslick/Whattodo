"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require('nativescript-radiobutton/angular');
var nativescript_ngx_fonticon_1 = require('nativescript-ngx-fonticon');
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
                angular_1.RadioButtonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(router_2.routes),
                forms_1.NativeScriptFormsModule,
                platform_1.NativeScriptModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': 'font-awesome.css'
                })
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [event_handeler_provider_1.EventHandeler, database_1.Database],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx5QkFBbUMsK0JBQStCLENBQUMsQ0FBQTtBQUNuRSx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUN2RSxzQkFBd0MsNEJBQ3hDLENBQUMsQ0FEbUU7QUFDcEUsd0JBQWtDLGtDQUVsQyxDQUFDLENBRm1FO0FBRXBFLDBDQUFrQywyQkFBMkIsQ0FBQyxDQUFBO0FBRTlELDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLCtCQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVELG9DQUFrQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBRTFFLHVCQUE4Qyx3QkFBd0IsQ0FBQyxDQUFBO0FBRXZFLHdDQUE4QiwyREFBMkQsQ0FBQyxDQUFBO0FBQzFGLHlCQUF5Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBc0J0RDtJQUFBO0lBQXlCLENBQUM7SUFwQjFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsNEJBQVksRUFDdkIsOEJBQWEsRUFDYix1Q0FBaUIsU0FFZCw4QkFBcUIsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLDZCQUFrQjtnQkFDeEIsMkJBQWlCO2dCQUNqQixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxlQUFNLENBQUM7Z0JBQ3hDLCtCQUF1QjtnQkFDdkIsNkJBQWtCO2dCQUNsQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSxrQkFBa0I7aUJBQzNCLENBQUM7YUFDTDtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLHVDQUFhLEVBQUUsbUJBQVEsQ0FBQztTQUN2QyxDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtcmFkaW9idXR0b24vYW5ndWxhcidcclxuXHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEV2ZW50QWRkQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZXZlbnQtYWRkL2V2ZW50LWFkZC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vc2hhcmVkL3JvdXRlci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRQcm92aWRlciB9IGZyb20gXCIuL3NoYXJlZC9wcm92aWRlcnMvZXZlbnQvZXZlbnQucHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRIYW5kZWxlciB9IGZyb20gXCIuL3NoYXJlZC9wcm92aWRlcnMvZXZlbnQtaGFuZGVsZXIvZXZlbnQtaGFuZGVsZXIucHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9zaGFyZWQvZGF0YWJhc2UvZGF0YWJhc2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBFdmVudEFkZENvbXBvbmVudCxcclxuXHJcbiAgICAgICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIFJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICAgICAgJ2ZhJzogJ2ZvbnQtYXdlc29tZS5jc3MnXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgICBwcm92aWRlcnM6IFtFdmVudEhhbmRlbGVyLCBEYXRhYmFzZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==