"use strict";
var home_component_1 = require("../../pages/home/home.component");
var event_add_component_1 = require("../../pages/event-add/event-add.component");
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "home/:update", component: home_component_1.HomeComponent },
    { path: "event", component: event_add_component_1.EventAddComponent }
];
exports.navigatableComponents = [
    home_component_1.HomeComponent,
    event_add_component_1.EventAddComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQkFBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQUNoRSxvQ0FBa0MsMkNBQTJDLENBQUMsQ0FBQTtBQUVqRSxjQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTtDQUNsRCxDQUFDO0FBRVcsNkJBQXFCLEdBQUc7SUFDakMsOEJBQWE7SUFDYix1Q0FBaUI7Q0FDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFdmVudEFkZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9wYWdlcy9ldmVudC1hZGQvZXZlbnQtYWRkLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJob21lLzp1cGRhdGVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZXZlbnRcIiwgY29tcG9uZW50OiBFdmVudEFkZENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIEV2ZW50QWRkQ29tcG9uZW50XHJcbl07Il19