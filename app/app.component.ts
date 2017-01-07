import { Component } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { EventHandeler } from "./shared/providers/event-handeler/event-handeler.provider";
import { EventAddComponent } from "./pages/event-add/event-add.component";

@Component({
    selector: "my-app",
    template: `
     <page-router-outlet></page-router-outlet>
    `,
    providers: [EventHandeler],
})
export class AppComponent {
 
    counter: number = 16;
 
 get1(){
     return this.counter;
 }

decreace(){
    this.counter--;
    return this.counter;
}
    
}