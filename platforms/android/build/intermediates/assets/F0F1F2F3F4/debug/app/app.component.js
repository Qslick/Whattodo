"use strict";
var core_1 = require("@angular/core");
var event_handeler_provider_1 = require("./shared/providers/event-handeler/event-handeler.provider");
var database_1 = require("./shared/database/database");
var couchbaseModule = require("nativescript-couchbase");
var AppComponent = (function () {
    function AppComponent(database) {
        this.database = database;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n     <page-router-outlet></page-router-outlet>\n    ",
            providers: [event_handeler_provider_1.EventHandeler],
        }), 
        __metadata('design:paramtypes', [database_1.Database])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyx3Q0FBOEIsMkRBQTJELENBQUMsQ0FBQTtBQUUxRix5QkFBeUIsNEJBQTRCLENBQUMsQ0FBQTtBQUN0RCxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQVN4RDtJQUVFLHNCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQztJQVQ3QztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsd0RBRVQ7WUFDRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBYSxDQUFDO1NBQzdCLENBQUM7O29CQUFBO0lBTUYsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLG9CQUFZLGVBS3hCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRlbGVyIH0gZnJvbSBcIi4vc2hhcmVkL3Byb3ZpZGVycy9ldmVudC1oYW5kZWxlci9ldmVudC1oYW5kZWxlci5wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBFdmVudEFkZENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2V2ZW50LWFkZC9ldmVudC1hZGQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4vc2hhcmVkL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbnZhciBjb3VjaGJhc2VNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbRXZlbnRIYW5kZWxlcl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZSl7ICB9XHJcblxyXG4gICAgXHJcbn0iXX0=