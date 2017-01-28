import { Injectable, Input, Output, EventEmitter } from "@angular/core";
import { EventProvider } from "../event/event.provider";
import { HomeComponent } from "../../../pages/home/home.component";
var couchbaseModule = require("nativescript-couchbase");


@Injectable()
export class EventHandeler {

    isInstantiated: boolean = false;
    number: number = 1;
    // home:HomeComponent;
    eventList = [];

    constructor() {

    }

    public newEvent(title: string, description: string, priority: number, startTime: number, endTime: number) {


        let eventProvider = new EventProvider();
        if (this.eventList.length == 0) {
            eventProvider.newEvent(title,
                description,
                priority,
                startTime,
                endTime
            );
            this.eventList[0] = eventProvider;
            // this.home.update(this.eventList);
        }
        else {
            var index = this.eventList.length;
            eventProvider.newEvent(title,
                description,
                priority,
                startTime,
                endTime
            );
            this.eventList[index] = eventProvider;
            // this.home.update(this.eventList);

        }//end else
    }//end of newEvent Method

    public deleteList() {
        this.eventList = [];
    }

}//end of CLass