import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { EventAddComponent } from "./pages/event-add/event-add.component";

import { routes, navigatableComponents } from "./shared/router/router";
import { EventProvider } from "./shared/providers/event/event.provider";
import { EventHandeler } from "./shared/providers/event-handeler/event-handeler.provider";

@NgModule({
    declarations: [AppComponent,
        HomeComponent,
        EventAddComponent,
        ...navigatableComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptFormsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [EventHandeler],
})
export class AppModule { }
