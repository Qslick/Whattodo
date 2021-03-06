"use strict";
var core_1 = require("@angular/core");
var event_provider_1 = require("../event/event.provider");
var couchbaseModule = require("nativescript-couchbase");
var EventHandeler = (function () {
    function EventHandeler() {
        this.isInstantiated = false;
        this.number = 1;
        // home:HomeComponent;
        this.eventList = [];
    }
    EventHandeler.prototype.newEvent = function (title, description, priority, startTime, endTime) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtaGFuZGVsZXIucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1oYW5kZWxlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLCtCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXhELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBSXhEO0lBT0k7UUFMQSxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLHNCQUFzQjtRQUN0QixjQUFTLEdBQUcsRUFBRSxDQUFDO0lBSWYsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsS0FBYSxFQUFFLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLE9BQWU7UUFHcEcsSUFBSSxhQUFhLEdBQUcsSUFBSSw4QkFBYSxFQUFFLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDeEIsV0FBVyxFQUNYLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxDQUNWLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUV0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNsQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDeEIsV0FBVyxFQUNYLFFBQVEsRUFDUixTQUFTLEVBQ1QsT0FBTyxDQUNWLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUcxQyxDQUFDLENBQUEsVUFBVTtJQUNmLENBQUMsRUFBQSx3QkFBd0I7SUFFbEIsa0NBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBMUNMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUE0Q2Isb0JBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBM0NZLHFCQUFhLGdCQTJDekIsQ0FBQSxDQUFBLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFdmVudFByb3ZpZGVyIH0gZnJvbSBcIi4uL2V2ZW50L2V2ZW50LnByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG52YXIgY291Y2hiYXNlTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIik7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXZlbnRIYW5kZWxlciB7XHJcblxyXG4gICAgaXNJbnN0YW50aWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG51bWJlcjogbnVtYmVyID0gMTtcclxuICAgIC8vIGhvbWU6SG9tZUNvbXBvbmVudDtcclxuICAgIGV2ZW50TGlzdCA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3RXZlbnQodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgc3RhcnRUaW1lOiBudW1iZXIsIGVuZFRpbWU6IG51bWJlcikge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGV2ZW50UHJvdmlkZXIgPSBuZXcgRXZlbnRQcm92aWRlcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50TGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBldmVudFByb3ZpZGVyLm5ld0V2ZW50KHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSxcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RbMF0gPSBldmVudFByb3ZpZGVyO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhvbWUudXBkYXRlKHRoaXMuZXZlbnRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZXZlbnRMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZXZlbnRQcm92aWRlci5uZXdFdmVudCh0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUsXHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0W2luZGV4XSA9IGV2ZW50UHJvdmlkZXI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaG9tZS51cGRhdGUodGhpcy5ldmVudExpc3QpO1xyXG5cclxuICAgICAgICB9Ly9lbmQgZWxzZVxyXG4gICAgfS8vZW5kIG9mIG5ld0V2ZW50IE1ldGhvZFxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG59Ly9lbmQgb2YgQ0xhc3MiXX0=