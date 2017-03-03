import { HomeComponent } from "../../pages/home/home.component";
import { EventAddComponent } from "../../pages/event-add/event-add.component";

export const routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "home/:update", component: HomeComponent },
    { path: "event", component: EventAddComponent }
];

export const navigatableComponents = [
    HomeComponent,
    EventAddComponent
];