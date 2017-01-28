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

    reset() {
        console.log("DB RESET");
        this.lookupDatabase.updateDocument(this.lookupDocumentKey, {
            index: "-1",
            number_of_events: "-1"
        });
    }

    public newEvent(title: string, description: string, priority: number, startTime: number, endTime: number) {

        let numOfEvents = this.lookupDatabase.getDocument(this.lookupDocumentKey).index;
        numOfEvents = Number(numOfEvents);

        let adjustedNumEvents = numOfEvents + 2;

        adjustedNumEvents = String(adjustedNumEvents);

        numOfEvents += 1;
        numOfEvents = String(numOfEvents);

        let event = { //createing event and storeing it's key inside
            key: numOfEvents,
            title: title,
            description: description,
            priority: priority,
            startTime: startTime,
            endTime: endTime
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

}//end of CLass