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
//# sourceMappingURL=router.js.map