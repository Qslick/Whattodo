import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";
import frame = require("ui/frame");
var StackLayout = require("ui/layouts/stack-layout").StackLayout;

import { EventHandeler } from "../../shared/providers/event-handeler/event-handeler.provider";
import { HomeComponent } from "../home/home.component";
import { Database } from "../../shared/database/database";

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('CheckBox', () => require('nativescript-checkbox').CheckBox);

import { SwissArmyKnife } from 'nativescript-swiss-army-knife/nativescript-swiss-army-knife';

import { Toasty } from 'nativescript-toasty'
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import * as TimeDatePicker from 'nativescript-timedatepicker';
import { DatePicker } from "ui/date-picker";
import { ScrollView, ScrollEventData } from 'ui/scroll-view';
import { ListView } from 'ui/list-view';


@Component({
    selector: 'my-app',
    templateUrl: "./pages/event-add/event-add.html",
    styleUrls: ["./pages/event-add/event-add.css"]
})
export class EventAddComponent implements OnInit {

    key: string;
    title: string = "Computer Science";
    description: string = "description I guess";
    startTime: Date;
    endTime: Date;
    icon: number = -1;
    days: boolean[] = [false, false, false, false, false, false, false];
    priorityLevel: number = -1;

    priority: number;


    startTimeCheck: boolean = false;
    endTimeCheck: boolean = false;
    priorityCheck: boolean = true;

    startTimeStr = "4:00 pm";
    endTimeStr = "5:00 pm";

    updateEvent: boolean = false;

    //----------------------------------
    timeDuration: string = "2:39";
    //----------------------------------

    @ViewChild("scroll") scroll: ElementRef;



    constructor(private route: ActivatedRoute, private router: Router,
        private database: Database, private eventHandeler: EventHandeler) {
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
        });

        // page = <Page>frame.topmost().currentPage;
    }//end of constructor



    ngOnInit() {

    }

    ngAfterViewInit(): void {
        //  let scrollViewIcon: ScrollView = this.scroll.nativeElement;
        //  SwissArmyKnife.removeHorizontalScrollBars(StackLayout);
    }

    doneBtn() {
        if (this.title == null) {
            //             let snackbar = new SnackBar();
            //     snackbar.simple('Snackbar').then((args) => {
            //          this.set('jsonResult', JSON.stringify(args));
            //    })
            const toast = new Toasty("Please enter a title.", "short", "middle");
            toast.show();
            // alert("Please enter a title.");
        }
        else if (this.description == null) {
            const toast = new Toasty("Please enter a description.", "short");
            toast.show();
        }
        else if (this.priorityLevel == -1) {
            const toast = new Toasty("Please enter a priority level.", "short");
            toast.show();
        }
        else if (this.startTimeCheck == false) {
            const toast = new Toasty("Please enter a start time.", "short");
            toast.show();
        }
        else if (this.endTimeCheck == false) {
            const toast = new Toasty("Please enter an end time.", "short");
            toast.show();
        } else if (this.days[0] == false && this.days[1] == false && this.days[2] == false &&
            this.days[3] == false && this.days[4] == false && this.days[5] == false && this.days[6] == false) {
            const toast = new Toasty("Please Select what day your event is on.", "short");
            toast.show();
        }
        else {
            if (this.updateEvent == true) {
                this.database.editEvent(
                    this.key,
                    this.title,
                    this.description,
                    this.priorityLevel,
                    this.startTime,
                    this.endTime,
                    this.icon,

                );
            } else {
                this.database.newEvent(
                    this.title,
                    this.description,
                    this.priorityLevel,
                    this.startTime,
                    this.endTime,
                    this.icon,
                );
            }
            console.log("priority " + this.priority);
            this.router.navigate(["/home"]);

        }//end of else

    }//end of method

    private initalTime() {
        let date: Date = new Date();
        let mCallback = ((result: String) => {
            if (result) {

                date.setHours(Number(result.substring(11, 13)));
                date.setMinutes(Number(result.substring(14, 16)));

                this.endTime = date;
                this.startTimeStr = date.getHours() + ":" + date.getMinutes();

                console.log(this.startTimeStr);

            }
            this.startTimeCheck = true;
        });
        //Initialize the PickerManager (.init(yourCallback, title, initialDate))
        TimeDatePicker.init(mCallback, null, null);

        //Show the dialog
        TimeDatePicker.showTimePickerDialog();
    }//end of method

    private finalTime() {
        let date: Date = new Date();
        let mCallback = ((result: String) => {
            if (result) {
                date.setHours(Number(result.substring(11, 13)));
                date.setMinutes(Number(result.substring(14, 16)));

                this.startTime = date;
                this.endTimeStr = date.getHours() + ":" + date.getMinutes();

                console.log(this.endTimeStr);

            }
            this.endTimeCheck = true;
        });
        //Initialize the PickerManager (.init(yourCallback, title, initialDate))
        TimeDatePicker.init(mCallback, null, null);

        //Show the dialog
        TimeDatePicker.showTimePickerDialog();
    }

    cancelBtn() {
        this.router.navigate(["/home"]);
    }


    private priority1() {
        this.priorityLevel = 0;
        // console.log(this.priorityLevel);
    }

    private priority2() {
        this.priorityLevel = 1;
        // console.log(this.priorityLevel);
    }

    private priority3() {
        this.priorityLevel = 2;
        // console.log(this.priorityLevel);
    }


    private monday() {
        if (this.days[0] == true) {
            this.days[0] = false;
            console.log("Button tapped now: " + this.days[0]);
        } else if (this.days[0] == false) {
            this.days[0] = true;
            console.log("Button tapped now: " + this.days[0]);
        }
    }

    private tuesday() {
        if (this.days[1] == true) {
            this.days[1] = false;
            console.log("Button tapped now: " + this.days[1]);
        } else if (this.days[1] == false) {
            this.days[1] = true;
            console.log("Button tapped now: " + this.days[1]);
        }
    }

    private wednesday() {
        if (this.days[2] == true) {
            this.days[2] = false;
            console.log("Button tapped now: " + this.days[2]);
        } else if (this.days[2] == false) {
            this.days[2] = true;
            console.log("Button tapped now: " + this.days[2]);
        }
    }

    private thursday() {
        if (this.days[3] == true) {
            this.days[3] = false;
            console.log("Button tapped now: " + this.days[3]);
        } else if (this.days[3] == false) {
            this.days[3] = true;
            console.log("Button tapped now: " + this.days[3]);
        }
    }

    private friday() {
        if (this.days[4] == true) {
            this.days[4] = false;
            console.log("Button tapped now: " + this.days[4]);
        } else if (this.days[4] == false) {
            this.days[4] = true;
            console.log("Button tapped now: " + this.days[4]);
        }
    }

    private saturday() {
        if (this.days[5] == true) {
            this.days[5] = false;
            console.log("Button tapped now: " + this.days[5]);
        } else if (this.days[5] == false) {
            this.days[5] = true;
            console.log("Button tapped now: " + this.days[5]);
        }
    }

    private sunday() {
        if (this.days[6] == true) {
            this.days[6] = false;
            console.log("Button tapped now: " + this.days[6]);
        } else if (this.days[6] == false) {
            this.days[6] = true;
            console.log("Button tapped now: " + this.days[6]);
        }
    }

    private icon1(iconId) {
        this.icon = iconId;
        console.log("icon " + this.icon + " tapped.");
    }
}//end of Class


/**--------------
 * ----NOTES-----
 * --------------
 * 
 * ---Remember---
 * *Go into the fontAwesome file and comment out the icons that are
 * not being used. It takes up space in the application.
 * 
 * ---Issues---
 * *If you enter in data into one of the fields and delete it,
 * it the property in the Typescript is no longer NULL and doesn't,
 * get cought by the 'if(null)' check
 */