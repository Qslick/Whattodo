import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { EventHandeler } from "../../shared/providers/event-handeler/event-handeler.provider";
import { Database } from "../../shared/database/database";
import listViewModule = require("ui/list-view");
import observableArray = require("data/observable-array");
import labelModule = require("ui/label");
import { Page } from 'ui/page';
import { Progress } from "ui/progress";
import { Couchbase } from "nativescript-couchbase";


import { registerElement, ViewClass } from "nativescript-angular/element-registry";
registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("LineProgressBar", () => require("nativescript-progressbar").LineProgressBar);
registerElement("pb:CircleProgressBar", () => require("nativescript-progressbar").LineProgressBar);

registerElement("fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
  selector: 'my-app',
  templateUrl: "./pages/home/home.html",
  styleUrls: ["pages/home/home.css"],
})


export class HomeComponent implements OnInit {

  hasEvent: boolean = false;
  eventList: any;
  devMode: boolean = true;
  totalProgress = 90;
  progressValue: number = 30;

  testMode = false;
  databaseName = "testdb";
  databaseOutput;

  startTimeDayCycle: string;
  endTimeDayCycle: string;

  @ViewChild("myProgress") progress: ElementRef;


  constructor(private page: Page, private database: Database, private router: Router) {

  }

  ngOnInit() {

    this.startTimeDayCycle = "pm";
    this.endTimeDayCycle = "pm";


    this.eventList = this.database.getEventList();
    if (this.eventList.length > 0) {
      this.hasEvent = true;
    } else {
      this.hasEvent = false;
    }

  }//end if ngOnInit()

  devTest() {
    this.database.reset();
    this.eventList = [];
    this.hasEvent = false;
    alert("data reset");

  }

  testBtn() {

  }


  // public onItemTap(args) {
  //   alert(args);
  // }

  public eventListTap(args) {
    alert(args.key);
  }

  public editBtn(args) {
    let eventData: NavigationExtras = {
      queryParams: {
        "key": args.key,
        "title": args.title,
        "description": args.description,
        "priority": args.priority,
        "startTime": args.startTime,
        "endTime": args.endTime
      }
    };

    this.router.navigate(["/event"], eventData);
  }

  public timeConvert(time: number) {

  }


  devDeleteList() {

  }

  devGenerateEvents() {
    // for (let i: number = 0; i < 50; i++) {
    //   this.eventHandeler.newEvent(
    //     "Event Title: " + (i + 1),
    //     "Description: " + i, 3, 5, 6
    //   );
    //   this.eventList = this.eventHandeler.eventList;
    // }//end of for
    // this.hasEvent = true;
  }


  provide() {
    // this.eventList = this.eventHandeler.eventList;
  }

  public update(eventList) {

    this.eventList = eventList;

    if (this.eventList.length > 0) {
      alert("Block 1 hasEvent = " + this.hasEvent);
      this.hasEvent = true;
    } else {
      this.hasEvent = false;
      alert("Block 2");
    }
    // alert("HomeComponent: " + this.eventList.length);

  }

  // editBtn(eventData: any) {
  // alert("WORKING: " + eventData);
  // }

  extendTimeBtn(args) {//delete button for now
    this.database.deleteEvent(args.key);
    this.eventList = this.database.getEventList();
    if (this.eventList.length > 0) {
      this.hasEvent = false;
    }

  }

}//end of class