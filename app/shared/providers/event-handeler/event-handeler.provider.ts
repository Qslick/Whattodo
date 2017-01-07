import { Injectable, Input, Output, EventEmitter } from "@angular/core";
import { EventProvider } from "../event/event.provider";
import { HomeComponent } from "../../../pages/home/home.component";

@Injectable()
export class EventHandeler {

    isInstantiated: boolean = false;
    number: number = 1;
    // home:HomeComponent;

    constructor() { }

     eventList = [];

    public newEvent(title: string, description: string, priority: number, startTime: number, endTime: number) {
        console.log("List Length: " + this.eventList.length);

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

    public deleteList(){
        this.eventList = [];
    }

}//end of CLass