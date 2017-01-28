import { Component } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { EventHandeler } from "./shared/providers/event-handeler/event-handeler.provider";
import { EventAddComponent } from "./pages/event-add/event-add.component";
import { Database } from "./shared/database/database";
var couchbaseModule = require("nativescript-couchbase");

@Component({
    selector: "my-app",
    template: `
     <page-router-outlet></page-router-outlet>
    `,
    providers: [EventHandeler],
})
export class AppComponent {

  constructor(private database: Database){  }

    
}