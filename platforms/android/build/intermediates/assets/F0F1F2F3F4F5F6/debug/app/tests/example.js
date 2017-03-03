var reflect = require("reflect-metadata");
var component = require("../app.component");
var home_component = require("../pages/home/home.component");
var event_add_component = require("../pages/event-add/event-add.component");
var event_handeler = require("../shared/providers/event-handeler/event-handeler.provider");

describe("Add event Test: ", function () {


    var title = "CS is Cool!";
    var description = "description I guess";
    var priority = 2;
    var endTime = 7;
    var endTime = 6;
    var timeStart = "4:00 pm";
    var timeEnd = "5:00 pm";

    beforeEach(function () {
        appComponent = new component.AppComponent();
        homeComponent = new home_component.HomeComponent();
        eventComponent = new event_add_component.EventAddComponent();
        eventHandeler = new event_handeler.EventHandeler();
    });


    it("Adding events to handeler list", function () {
        eventHandeler.newEvent(this.title, this.description,
            this.priority, this.startTime, this.endTime);

        eventHandeler.newEvent(this.title, this.description,
            this.priority, this.startTime, this.endTime)

        expect(eventHandeler.eventList.length).toEqual(2);
    });

    it("HomeComponent retrieve list from Shared Provider", function () {
        eventHandeler.newEvent(this.title, this.description,
            this.priority, this.startTime, this.endTime)

        homeComponent.provide();
        expect(homeComponent.eventList[0].title).toBe("CS is cool!");
    });

});//end of Main Describe



    // var appComponent;
    // var eventComponent;
    // var eventHandeler;

