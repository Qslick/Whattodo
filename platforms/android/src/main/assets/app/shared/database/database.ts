import { Injectable, Input, Output, EventEmitter } from "@angular/core";
import { EventHandeler } from "../providers/event-handeler/event-handeler.provider";
import { EventProvider } from "../providers/event/event.provider";
import { Couchbase } from "nativescript-couchbase";
// var couchbaseModule = require("nativescript-couchbase");

@Injectable()
export class Database {

    private eventList = [];

    private eventDatabase: any; //Database
    private lookupDatabase: any; //Database

    private lookupDocument: any; //Document: contains the current index of events

    private lookupDocumentKey: string = "events"; //defining keys for database, should never change

    constructor() {
        console.log("Database: constructor()");
        this.eventDatabase = new Couchbase("event_db"); //initalizing Database
        this.lookupDatabase = new Couchbase("lookup_db"); //initalizing Database

        this.lookupDocument = this.lookupDatabase.getDocument(this.lookupDocumentKey); //creating single document with unchanging key


        let lookupDoc = {
            index: "-1",
            number_of_events: "-1"
        };

        if (!this.lookupDocument) { //initalizing document if document does not exist
            this.lookupDatabase.createDocument(lookupDoc, this.lookupDocumentKey);
            console.log("initalizing lookupDocument: " + this.lookupDocument);
        }
        this.updateList();
        // this.reset();
    }
    // updateDocument(key, data)
    // createDocument(data, key)

    // event = { //createing event and storeing it's key inside
    //         key: numOfEvents,
    //         title: title,
    //         description: description,
    //         priority: priority,
    //         startTime: startTime,
    //         endTime: endTime
    //     };


    public deleteEvent(key: string) {
        this.eventDatabase.deleteDocument(key);

        let number_of_eventNew = this.lookupDatabase.getDocument(this.lookupDocumentKey).number_of_events;
        let indexCurrentNew = this.lookupDatabase.getDocument(this.lookupDocumentKey).index;

        number_of_eventNew = String((Number(number_of_eventNew)-1));
        indexCurrentNew = String((Number(indexCurrentNew)-1));

        this.lookupDatabase.updateDocument(this.lookupDocumentKey, {
            index: indexCurrentNew,
            number_of_events: number_of_eventNew
        });
        this.eventList[key] = this.eventList[this.eventList.length-1];
        this.eventList[this.eventList.length-1] = null;
    }
    
    public reset() {

        let index = this.lookupDatabase.getDocument(this.lookupDocumentKey).number_of_events
        index = Number(index);
        for (let t = 0; t < index; t++) {
            let eventKeys = String(t);
            this.eventDatabase.deleteDocument(eventKeys);
        }

        this.lookupDatabase.updateDocument(this.lookupDocumentKey, {
            index: "-1",
            number_of_events: "-1"
        });
        this.eventList = [];

        console.log("DB RESET");
    }

    public editEvent(key: string, title: string, description: string, priority: number, startTime: Date, endTime: Date, icon:number) {
        this.eventDatabase.updateDocument(key, {
            key: key,
            title: title,
            description: description,
            priority: priority,
           startTimeHour: startTime.getHours(),
            startTimeMinute: startTime.getMinutes(),
            endTimeHour: endTime.getHours(),
            endTimeMinute: endTime.getMinutes(),
            icon: icon
        });
        this.updateList();
    }

    public newEvent(title: string, description: string, priority: number, startTime: Date, endTime: Date, icon: number) {

        let numOfEvents = this.lookupDatabase.getDocument(this.lookupDocumentKey).index;
        numOfEvents = Number(numOfEvents);

        let adjustedNumEvents = numOfEvents + 2;

        adjustedNumEvents = String(adjustedNumEvents);

        numOfEvents += 1;
        numOfEvents = String(numOfEvents);

        // let startTimeStr = startTime.getHours() + "." + startTime.getMinutes();
        // let endTimeStr = endTime.getHours() + "." + endTime.getMinutes();

        let event = { //createing event and storeing it's key inside
            key: numOfEvents,
            title: title,
            description: description,
            priority: priority,
            startTimeHour: startTime.getHours(),
            startTimeMinute: startTime.getMinutes(),
            endTimeHour: endTime.getHours(),
            endTimeMinute: endTime.getMinutes(),
            icon: icon
        };

        this.eventDatabase.createDocument(event, numOfEvents);
        this.lookupDatabase.updateDocument(this.lookupDocumentKey, {
            index: numOfEvents,
            number_of_events: adjustedNumEvents
        });
        this.updateList();
    }//end of newEvent

    public updateList() {
        let index = this.lookupDatabase.getDocument(this.lookupDocumentKey).number_of_events
        index = Number(index);
        for (let t = 0; t < index; t++) {
            let eventKeys = String(t);
            this.eventList[t] = (this.eventDatabase.getDocument(eventKeys));
        }
    }//end of updateList

    public getEventList() {
        return this.eventList;
    }
}