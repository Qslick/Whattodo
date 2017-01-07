import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { EventHandeler } from "../../shared/providers/event-handeler/event-handeler.provider";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'my-app',
    templateUrl: "./pages/event-add/event-add.html",
    styleUrls: ["./pages/event-add/event-add.css"]
})
export class EventAddComponent implements OnInit {

    title: string = "Computer Science";
    description: string = "description I guess";
    priority: number = 2;
    startTime = 5;
    endTime = 6;
    timeStart = "4:00 pm";
    timeEnd = "5:00 pm";

    startTimeCheck: boolean = true;
    endTimeCheck: boolean = true;
    priorityCheck: boolean = true;


    constructor(private router: Router, private eventHandeler: EventHandeler) {

    }

    ngOnInit(){
        
    }

jasmine_doneBtn(){
    
}

    doneBtn() {
 
        if (this.title == null) {
            alert("Please enter a title.");
        }
        else if (this.description == null) {
            alert("Please enter a description.");
        }
        else if (this.priorityCheck == false) {
            alert("Please enter a priority level.");
        }
        else if (this.startTimeCheck == false) {
            alert("Please enter a start time.");
        }
        else if (this.endTimeCheck == false) {
            alert("Please enter an end time.");
        }
        else {
            this.eventHandeler.newEvent(
                this.title,
                this.description,
                this.priority,
                this.startTime,
                this.endTime
            );
            this.router.navigate(["/home"]);

        }//end of else

    }//end of method


    private priority1() {

    }

    private priority2() {

    }

    private priority3() {

    }


    private monday() {

    }

    private tuesday() {

    }

    private wednesday() {

    }

    private thursday() {

    }

    private friday() {

    }

    private saturday() {

    }

    private sunday() {

    }

}//end of Class