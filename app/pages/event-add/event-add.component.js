"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var event_handeler_provider_1 = require("../../shared/providers/event-handeler/event-handeler.provider");
var EventAddComponent = (function () {
    function EventAddComponent(router, eventHandeler) {
        this.router = router;
        this.eventHandeler = eventHandeler;
        this.title = "Computer Science";
        this.description = "description I guess";
        this.priority = 2;
        this.startTime = 5;
        this.endTime = 6;
        this.timeStart = "4:00 pm";
        this.timeEnd = "5:00 pm";
        this.startTimeCheck = true;
        this.endTimeCheck = true;
        this.priorityCheck = true;
    }
    EventAddComponent.prototype.ngOnInit = function () {
    };
    EventAddComponent.prototype.jasmine_doneBtn = function () {
    };
    EventAddComponent.prototype.doneBtn = function () {
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
            this.eventHandeler.newEvent(this.title, this.description, this.priority, this.startTime, this.endTime);
            this.router.navigate(["/home"]);
        } //end of else
    }; //end of method
    EventAddComponent.prototype.priority1 = function () {
    };
    EventAddComponent.prototype.priority2 = function () {
    };
    EventAddComponent.prototype.priority3 = function () {
    };
    EventAddComponent.prototype.monday = function () {
    };
    EventAddComponent.prototype.tuesday = function () {
    };
    EventAddComponent.prototype.wednesday = function () {
    };
    EventAddComponent.prototype.thursday = function () {
    };
    EventAddComponent.prototype.friday = function () {
    };
    EventAddComponent.prototype.saturday = function () {
    };
    EventAddComponent.prototype.sunday = function () {
    };
    EventAddComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./pages/event-add/event-add.html",
            styleUrls: ["./pages/event-add/event-add.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, event_handeler_provider_1.EventHandeler])
    ], EventAddComponent);
    return EventAddComponent;
}());
exports.EventAddComponent = EventAddComponent; //end of Class
//# sourceMappingURL=event-add.component.js.map