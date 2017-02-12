"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var event_handeler_provider_1 = require("../../shared/providers/event-handeler/event-handeler.provider");
var database_1 = require("../../shared/database/database");
var element_registry_1 = require('nativescript-angular/element-registry');
element_registry_1.registerElement('CheckBox', function () { return require('nativescript-checkbox').CheckBox; });
var EventAddComponent = (function () {
    function EventAddComponent(route, router, database, eventHandeler) {
        var _this = this;
        this.route = route;
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
        this.updateEvent = false;
        this.route.queryParams.subscribe(function (params) {
            if (params["key"]) {
                _this.updateEvent = true;
                _this.key = params["key"];
                _this.title = params["title"];
                _this.description = params["description"],
                    _this.priority = params["priority"],
                    _this.startTime = params["startTime"],
                    _this.endTime = params["endTime"];
            } //end of if
            // this.key = params["key"];
            // this.title = params["title"];
            // this.description = params["description"],
            //     this.priority = params["priority"],
            //     this.startTime = params["startTime"],
            //     this.endTime = params["endTime"]
        });
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
            if (this.updateEvent == true) {
                this.database.editEvent(this.key, this.title, this.description, this.priority, this.startTime, this.endTime);
            }
            else {
                this.database.newEvent(this.title, this.description, this.priority, this.startTime, this.endTime);
            }
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
        __metadata('design:paramtypes', [router_2.ActivatedRoute, router_1.Router, database_1.Database, event_handeler_provider_1.EventHandeler])
    ], EventAddComponent);
    return EventAddComponent;
}());
exports.EventAddComponent = EventAddComponent; //end of Class
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LWFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUVqRCx3Q0FBOEIsK0RBQStELENBQUMsQ0FBQTtBQUU5Rix5QkFBeUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUxRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFPN0U7SUE0QkksMkJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLFFBQWtCLEVBQVUsYUFBNEI7UUE1QnZJLGlCQW1KQztRQXZIdUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBMUJuSSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzdCLFVBQUssR0FBVyxrQkFBa0IsQ0FBQztRQUNuQyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO1FBQzVDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixjQUFTLEdB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SUFtSkM7QUFuSlkseUJBQWlCLG9CQW1KN0IsQ0FBQSxDQUFBLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRIYW5kZWxlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXJzL2V2ZW50LWhhbmRlbGVyL2V2ZW50LWhhbmRlbGVyLnByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YWJhc2UvZGF0YWJhc2VcIjtcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5yZWdpc3RlckVsZW1lbnQoJ0NoZWNrQm94JywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWNoZWNrYm94JykuQ2hlY2tCb3gpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2V2ZW50LWFkZC9ldmVudC1hZGQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2V2ZW50LWFkZC9ldmVudC1hZGQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudEFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY2hlY2tCb29sOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbW9uZGF5Q2hlY2s6IGJvb2xlYW47XHJcbiAgICB0dWVzZGF5Q2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHdlZG5lc2RheUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0aHVyc2RheUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBmcmlkYXlDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2F0dXJkYXlDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3VuZGF5Q2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmcgPSBcIkNvbXB1dGVyIFNjaWVuY2VcIjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcImRlc2NyaXB0aW9uIEkgZ3Vlc3NcIjtcclxuICAgIHByaW9yaXR5OiBudW1iZXIgPSAyO1xyXG4gICAgc3RhcnRUaW1lID0gNTtcclxuICAgIGVuZFRpbWUgPSA2O1xyXG4gICAgdGltZVN0YXJ0ID0gXCI0OjAwIHBtXCI7XHJcbiAgICB0aW1lRW5kID0gXCI1OjAwIHBtXCI7XHJcblxyXG4gICAgc3RhcnRUaW1lQ2hlY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZW5kVGltZUNoZWNrOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaW9yaXR5Q2hlY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHVwZGF0ZUV2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZSwgcHJpdmF0ZSBldmVudEhhbmRlbGVyOiBFdmVudEhhbmRlbGVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtc1tcImtleVwiXSkgey8vRk9SIEFVVE8gRklMTCBGT1IgTUFLSU5HIE5FVyBFVkVOVC4gRE9OVCBGT1JHRVQgVE8gREVMRVRFIFRISVMhISFcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXkgPSBwYXJhbXNbXCJrZXlcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gcGFyYW1zW1widGl0bGVcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcGFyYW1zW1wiZGVzY3JpcHRpb25cIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHBhcmFtc1tcInByaW9yaXR5XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGFyYW1zW1wic3RhcnRUaW1lXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IHBhcmFtc1tcImVuZFRpbWVcIl1cclxuICAgICAgICAgICAgfS8vZW5kIG9mIGlmXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmtleSA9IHBhcmFtc1tcImtleVwiXTtcclxuICAgICAgICAgICAgLy8gdGhpcy50aXRsZSA9IHBhcmFtc1tcInRpdGxlXCJdO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRlc2NyaXB0aW9uID0gcGFyYW1zW1wiZGVzY3JpcHRpb25cIl0sXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnByaW9yaXR5ID0gcGFyYW1zW1wicHJpb3JpdHlcIl0sXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXJ0VGltZSA9IHBhcmFtc1tcInN0YXJ0VGltZVwiXSxcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZW5kVGltZSA9IHBhcmFtc1tcImVuZFRpbWVcIl1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRvbmVCdG4oKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0aXRsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGVzY3JpcHRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcmlvcml0eUNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJpb3JpdHkgbGV2ZWwuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXJ0VGltZUNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgc3RhcnQgdGltZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZW5kVGltZUNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGFuIGVuZCB0aW1lLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZUV2ZW50ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuZWRpdEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kVGltZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UubmV3RXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRUaW1lXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcclxuXHJcbiAgICAgICAgfS8vZW5kIG9mIGVsc2VcclxuXHJcbiAgICB9Ly9lbmQgb2YgbWV0aG9kXHJcblxyXG5cclxuICAgIHByaXZhdGUgcHJpb3JpdHkxKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW9yaXR5MigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmlvcml0eTMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG1vbmRheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb25kYXlDaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZGF5Q2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgYWxlcnQoXCJCdXR0b24gdGFwcGVkIG5vdzogXCIgKyB0aGlzLm1vbmRheUNoZWNrKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW9uZGF5Q2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25kYXlDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQnV0dG9uIHRhcHBlZCBub3c6IFwiICsgdGhpcy5tb25kYXlDaGVjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb25kYXlDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMubW9uZGF5Q2hlY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHR1ZXNkYXkoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2VkbmVzZGF5KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRodXJzZGF5KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZyaWRheSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXR1cmRheSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdW5kYXkoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufS8vZW5kIG9mIENsYXNzIl19