"use strict";
var core_1 = require("@angular/core");
var event_provider_1 = require("../event/event.provider");
var EventHandeler = (function () {
    // home:HomeComponent;
    function EventHandeler() {
        this.isInstantiated = false;
        this.number = 1;
        this.eventList = [];
    }
    EventHandeler.prototype.newEvent = function (title, description, priority, startTime, endTime) {
        console.log("List Length: " + this.eventList.length);
        var eventProvider = new event_provider_1.EventProvider();
        if (this.eventList.length == 0) {
            eventProvider.newEvent(title, description, priority, startTime, endTime);
            this.eventList[0] = eventProvider;
        }
        else {
            var index = this.eventList.length;
            eventProvider.newEvent(title, description, priority, startTime, endTime);
            this.eventList[index] = eventProvider;
        } //end else
    }; //end of newEvent Method
    EventHandeler.prototype.deleteList = function () {
        this.eventList = [];
    };
    EventHandeler = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventHandeler);
    return EventHandeler;
}());
exports.EventHandeler = EventHandeler; //end of CLass
//# sourceMappingURL=event-handeler.provider.js.map