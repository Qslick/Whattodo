import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { EventHandeler } from "../../shared/providers/event-handeler/event-handeler.provider";
import listViewModule = require("ui/list-view");
import observableArray = require("data/observable-array");
import labelModule = require("ui/label");
import { Page } from 'ui/page';
import { Progress } from "ui/progress";
import * as fs from "file-system";

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
  eventList = [];
  devMode: boolean = true;
  totalProgress = 90;
  progressValue: number = 30;

  @ViewChild("myProgress") progress: ElementRef;

  documents: any;
  currentApp: any;
  temp: any;

  constructor(private page: Page, private eventHandeler: EventHandeler) {
    this.saveData();
    this.readData();
  }

  ngOnInit() {
    this.eventList = this.eventHandeler.eventList;
    if (this.eventList.length > 0) {
      this.hasEvent = true;
    } else {
      this.hasEvent = false;
    }

    let documentsFolder = fs.knownFolders.documents();
    let currentAppFolder = fs.knownFolders.currentApp();
    let tempFolder = fs.knownFolders.temp();

    let testPath = "///test.txt";
    // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
    this.documents = fs.path.normalize(documentsFolder.path + testPath);
    this.currentApp = fs.path.normalize(currentAppFolder.path + testPath);
    this.temp = fs.path.normalize(tempFolder.path + testPath);

  }//end if ngOnInit()

  saveData() {
    let documentsFolder = fs.knownFolders.documents();
    let path = fs.path.join(documentsFolder.path, "FileFromPath.txt");
    let file = fs.File.fromPath(path);

    // Writing text to the file.
    // file.write(this.eventHandeler.eventList)
    //   .then(result => {
    //     // Succeeded writing to the file.
    //     file.readText().then(res => {
    //       // Succeeded read from file.
    //       // this.isContentSaved = true;
    //       // this.savedContent = res;
    //       console.log("File content: " + res);
    //     });
    //   }).catch(err => {
    //     console.log(err.stack);
    //   });;
  }

  readData() {
    let documentsFolder = fs.knownFolders.documents();
    let path = fs.path.join(documentsFolder.path, "FileFromPath.txt");
    let file = fs.File.fromPath(path);
console.log("File Read Data: " + file.readText());
  }

  eventListTap() {
    // alert("Event Tapped");
    alert("Tapped");
  }

  devTest() {
alert("Dev Test Method");
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

  testBtn() {
    console.log("Fab Tapped");
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