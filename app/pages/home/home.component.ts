import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EventHandeler } from "../../shared/providers/event-handeler/event-handeler.provider";
import listViewModule = require("ui/list-view");
import observableArray = require("data/observable-array");
import labelModule = require("ui/label");


@Component({
  selector: 'my-app',
  templateUrl: "./pages/home/home.html",
  styleUrls: ["pages/home/home.css"],
})

export class HomeComponent implements OnInit {

  hasEvent: boolean = false;
  eventList = [];
  devMode: boolean = true;


  constructor(private eventHandeler: EventHandeler) {

  }

  ngOnInit() {
    this.eventList = this.eventHandeler.eventList;
    if (this.eventList.length > 0) {
      this.hasEvent = true;
    } else {
      this.hasEvent = false;
    }
  }

  eventListTap(event) {
    // alert("Event Tapped");
    alert("event");
  }

  devTest() {
    if (this.eventList.length > 0) {
      alert("Item Array Length: " + this.eventList.length + "\n" +
        this.eventList[this.eventList.length - 1].getTitle());
    } else {
      alert("Empty List");
    }
  }

  devDeleteList() {
    this.eventHandeler.deleteList();
    this.eventList = this.eventHandeler.eventList;
  this.hasEvent = false;
  }

  devGenerateEvents() {
    for (let i: number = 0; i < 50; i++) {
      this.eventHandeler.newEvent(
        "Event Title: " + (i+1),
        "Description: " + i, 3, 5, 6
      );
      this.eventList = this.eventHandeler.eventList;
    }//end of for
    this.hasEvent = true;
  }

  addEventBtn() {

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

}//end of class