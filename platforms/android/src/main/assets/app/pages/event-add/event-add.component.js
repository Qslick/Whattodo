"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var event_handeler_provider_1 = require("../../shared/providers/event-handeler/event-handeler.provider");
var database_1 = require("../../shared/database/database");
var element_registry_1 = require('nativescript-angular/element-registry');
element_registry_1.registerElement('CheckBox', function () { return require('nativescript-checkbox').CheckBox; });
var EventAddComponent = (function () {
    function EventAddComponent(router, database, eventHandeler) {
        this.router = router;
        this.database = database;
        this.eventHandeler = eventHandeler;
        this.checkBool = false;
        this.tuesdayCheck = false;
        this.wednesdayCheck = false;
        this.thursdayCheck = false;
        this.fridayCheck = false;
        this.saturdayCheck = false;
        this.sundayCheck = false;
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
            this.database.newEvent(this.title, this.description, this.priority, this.startTime, this.endTime);
            // this.eventHandeler.newEvent(
            //     this.title,
            //     this.description,
            //     this.priority,
            //     this.startTime,
            //     this.endTime
            // );
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
        if (this.mondayCheck == true) {
            this.mondayCheck = false;
            alert("Button tapped now: " + this.mondayCheck);
        }
        else if (this.mondayCheck == false) {
            this.mondayCheck = true;
            alert("Button tapped now: " + this.mondayCheck);
        }
        else {
            this.mondayCheck = true;
            alert(this.mondayCheck);
        }
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
        __metadata('design:paramtypes', [router_1.Router, database_1.Database, event_handeler_provider_1.EventHandeler])
    ], EventAddComponent);
    return EventAddComponent;
}());
exports.EventAddComponent = EventAddComponent; //end of Class
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LWFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6Qyx3Q0FBOEIsK0RBQStELENBQUMsQ0FBQTtBQUU5Rix5QkFBeUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUxRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFPN0U7SUF5QkksMkJBQW9CLE1BQWMsRUFBVSxRQUFrQixFQUFVLGFBQTRCO1FBQWhGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF2QnBHLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsVUFBSyxHQUFXLGtCQUFrQixDQUFDO1FBQ25DLGdCQUFXLEdBQVcscUJBQXFCLENBQUM7UUFDNUMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUVwQixtQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixpQkFBWSxHQUFZ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QUFDO1NBQ2pELENBQUM7O3lCQUFBO0lBMkhGLHdCQUFDO0FBQUQsQ0FBQyxBQTFIRCxJQTBIQztBQTFIWSx5QkFBaUIsb0JBMEg3QixDQUFBLENBQUEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEV2ZW50SGFuZGVsZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9ldmVudC1oYW5kZWxlci9ldmVudC1oYW5kZWxlci5wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4uL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxucmVnaXN0ZXJFbGVtZW50KCdDaGVja0JveCcsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1jaGVja2JveCcpLkNoZWNrQm94KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9ldmVudC1hZGQvZXZlbnQtYWRkLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9ldmVudC1hZGQvZXZlbnQtYWRkLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRBZGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNoZWNrQm9vbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG1vbmRheUNoZWNrOiBib29sZWFuO1xyXG4gICAgdHVlc2RheUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB3ZWRuZXNkYXlDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdGh1cnNkYXlDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZnJpZGF5Q2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNhdHVyZGF5Q2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN1bmRheUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgdGl0bGU6IHN0cmluZyA9IFwiQ29tcHV0ZXIgU2NpZW5jZVwiO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiZGVzY3JpcHRpb24gSSBndWVzc1wiO1xyXG4gICAgcHJpb3JpdHk6IG51bWJlciA9IDI7XHJcbiAgICBzdGFydFRpbWUgPSA1O1xyXG4gICAgZW5kVGltZSA9IDY7XHJcbiAgICB0aW1lU3RhcnQgPSBcIjQ6MDAgcG1cIjtcclxuICAgIHRpbWVFbmQgPSBcIjU6MDAgcG1cIjtcclxuXHJcbiAgICBzdGFydFRpbWVDaGVjazogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBlbmRUaW1lQ2hlY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpb3JpdHlDaGVjazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlLCBwcml2YXRlIGV2ZW50SGFuZGVsZXI6IEV2ZW50SGFuZGVsZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkb25lQnRuKCkge1xyXG4gXHJcbiAgICAgICAgaWYgKHRoaXMudGl0bGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHRpdGxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kZXNjcmlwdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgZGVzY3JpcHRpb24uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnByaW9yaXR5Q2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBwcmlvcml0eSBsZXZlbC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhcnRUaW1lQ2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBzdGFydCB0aW1lLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbmRUaW1lQ2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYW4gZW5kIHRpbWUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5uZXdFdmVudChcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRUaW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZXZlbnRIYW5kZWxlci5uZXdFdmVudChcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcmlvcml0eSxcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5lbmRUaW1lXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcclxuXHJcbiAgICAgICAgfS8vZW5kIG9mIGVsc2VcclxuXHJcbiAgICB9Ly9lbmQgb2YgbWV0aG9kXHJcblxyXG5cclxuICAgIHByaXZhdGUgcHJpb3JpdHkxKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW9yaXR5MigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmlvcml0eTMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG1vbmRheSgpIHtcclxuICAgICAgICBpZih0aGlzLm1vbmRheUNoZWNrID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLm1vbmRheUNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQnV0dG9uIHRhcHBlZCBub3c6IFwiICsgdGhpcy5tb25kYXlDaGVjayk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubW9uZGF5Q2hlY2sgPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZGF5Q2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGVydChcIkJ1dHRvbiB0YXBwZWQgbm93OiBcIiArIHRoaXMubW9uZGF5Q2hlY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZGF5Q2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGVydCh0aGlzLm1vbmRheUNoZWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0dWVzZGF5KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdlZG5lc2RheSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHVyc2RheSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmcmlkYXkoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F0dXJkYXkoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3VuZGF5KCkge1xyXG5cclxuICAgIH1cclxuXHJcbn0vL2VuZCBvZiBDbGFzcyJdfQ==