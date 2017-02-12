import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { EventHandeler } from "../../shared/providers/event-handeler/event-handeler.provider";
import { HomeComponent } from "../home/home.component";
import { Database } from "../../shared/database/database";

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('CheckBox', () => require('nativescript-checkbox').CheckBox);

@Component({
    selector: 'my-app',
    templateUrl: "./pages/event-add/event-add.html",
    styleUrls: ["./pages/event-add/event-add.css"]
})
export class EventAddComponent implements OnInit {

    checkBool: boolean = false;

    mondayCheck: boolean;
    tuesdayCheck: boolean = false;
    wednesdayCheck: boolean = false;
    thursdayCheck: boolean = false;
    fridayCheck: boolean = false;
    saturdayCheck: boolean = false;
    sundayCheck: boolean = false;

    key: string;
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

    updateEvent: boolean = false;


    constructor(private route: ActivatedRoute, private router: Router, private database: Database, private eventHandeler: EventHandeler) {
        this.route.queryParams.subscribe(params => {
            if (params["key"]) {//FOR AUTO FILL FOR MAKING NEW EVENT. DONT FORGET TO DELETE THIS!!!
                this.updateEvent = true;
                this.key = params["key"];
                this.title = params["title"];
                this.description = params["description"],
                    this.priority = params["priority"],
                    this.startTime = params["startTime"],
                    this.endTime = params["endTime"]
            }//end of if

            // this.key = params["key"];
            // this.title = params["title"];
            // this.description = params["description"],
            //     this.priority = params["priority"],
            //     this.startTime = params["startTime"],
            //     this.endTime = params["endTime"]

        });
    }

    ngOnInit() {

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
            if (this.updateEvent == true) {
                this.database.editEvent(
                    this.key,
                    this.title,
                    this.description,
                    this.priority,
                    this.startTime,
                    this.endTime
                );
            } else {
                this.database.newEvent(
                    this.title,
                    this.description,
                    this.priority,
                    this.startTime,
                    this.endTime
                );
            }
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
        if (this.mondayCheck == true) {
            this.mondayCheck = false;
            alert("Button tapped now: " + this.mondayCheck);
        } else if (this.mondayCheck == false) {
            this.mondayCheck = true;
            alert("Button tapped now: " + this.mondayCheck);
        } else {
            this.mondayCheck = true;
            alert(this.mondayCheck);
        }
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