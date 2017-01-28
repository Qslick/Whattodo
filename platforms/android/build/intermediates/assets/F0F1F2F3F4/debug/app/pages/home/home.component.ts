import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
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

  @ViewChild("myProgress") progress: ElementRef;


  constructor(private page: Page, private database: Database, private eventHandeler: EventHandeler) {

  }


  ngOnInit() {

    this.eventList = this.database.getEventList();
    if (this.eventList.length > 0) {
      this.hasEvent = true;
    } else {
      this.hasEvent = false;
    }


    // this.eventList = this.eventHandeler.eventList;
    // if (this.eventList.length > 0) {
    //   this.hasEvent = true;
    // } else {
    //   this.hasEvent = false;
    // }

  }//end if ngOnInit()

  devTest() {
    let output: string;
    for (var i in this.eventList) {
      output += "Event " + i + ": "
        + "\n Key: " + this.eventList[i].key
        + "\n Title: " + this.eventList[i].title
        + "\n Description: " + this.eventList[i].description
        + "\n priority: " + this.eventList[i].priority
        + "\n startTime: " + this.eventList[i].startTime
        + "\n endTime: " + this.eventList[i].endTime;
      console.log(output);
    }

  }

  testBtn() {

  }

  eventListTap() {
    alert("Tapped");
  }

  devDeleteList() {
    this.eventHandeler.deleteList();
    this.eventList = this.eventHandeler.eventList;
    this.hasEvent = false;
  }

  devGenerateEvents() {
    for (let i: number = 0; i < 50; i++) {
      this.eventHandeler.newEvent(
        "Event Title: " + (i + 1),
        "Description: " + i, 3, 5, 6
      );
      this.eventList = this.eventHandeler.eventList;
    }//end of for
    this.hasEvent = true;
  }


  provide() {
    this.eventList = this.eventHandeler.eventList;
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

  editBtn() {

  }

  extendTimeBtn() {

  }



}//end of class