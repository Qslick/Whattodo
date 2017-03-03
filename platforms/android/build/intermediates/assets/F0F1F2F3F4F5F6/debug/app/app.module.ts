import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { RadioButtonModule } from 'nativescript-radiobutton/angular'

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { EventAddComponent } from "./pages/event-add/event-add.component";

import { routes, navigatableComponents } from "./shared/router/router";
import { EventProvider } from "./shared/providers/event/event.provider";
import { EventHandeler } from "./shared/providers/event-handeler/event-handeler.provider";
import { Database } from "./shared/database/database";

@NgModule({
    declarations: [AppComponent,
        HomeComponent,
        EventAddComponent,

        ...navigatableComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        RadioButtonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptFormsModule,
        NativeScriptModule,
        TNSFontIconModule.forRoot({
            'fa': 'font-awesome.css'
        })
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [EventHandeler, Database],
})
export class AppModule { }
