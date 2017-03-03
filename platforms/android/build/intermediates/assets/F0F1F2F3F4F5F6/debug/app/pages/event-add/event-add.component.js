"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var page_1 = require("ui/page");
var frame = require("ui/frame");
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var event_handeler_provider_1 = require("../../shared/providers/event-handeler/event-handeler.provider");
var database_1 = require("../../shared/database/database");
var element_registry_1 = require('nativescript-angular/element-registry');
element_registry_1.registerElement('CheckBox', function () { return require('nativescript-checkbox').CheckBox; });
var nativescript_swiss_army_knife_1 = require('nativescript-swiss-army-knife/nativescript-swiss-army-knife');
var nativescript_toasty_1 = require('nativescript-toasty');
var TimeDatePicker = require('nativescript-timedatepicker');
var EventAddComponent = (function () {
    function EventAddComponent(route, router, database, eventHandeler, page) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.database = database;
        this.eventHandeler = eventHandeler;
        this.page = page;
        this.checkBool = false;
        this.tuesdayCheck = false;
        this.wednesdayCheck = false;
        this.thursdayCheck = false;
        this.fridayCheck = false;
        this.saturdayCheck = false;
        this.sundayCheck = false;
        this.title = "Computer Science";
        this.description = "description I guess";
        this.startTimeStr = "4:00 pm";
        this.endTimeStr = "5:00 pm";
        this.startTimeCheck = false;
        this.endTimeCheck = false;
        this.priorityCheck = true;
        this.updateEvent = false;
        //----------------------------------
        this.timeDuration = "2:39";
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
        });
        page = frame.topmost().currentPage;
    } //end of constructor
    EventAddComponent.prototype.ngOnInit = function () {
        var iconScrollList = this.scroll.nativeElement;
        var swiss;
        nativescript_swiss_army_knife_1.SwissArmyKnife.setAndroidNavBarTranslucentFlag();
        // swiss.removeHorizontalScrollBars(iconScrollList);
    };
    EventAddComponent.prototype.doneBtn = function () {
        if (this.title == null) {
            //             let snackbar = new SnackBar();
            //     snackbar.simple('Snackbar').then((args) => {
            //          this.set('jsonResult', JSON.stringify(args));
            //    })
            var toast = new nativescript_toasty_1.Toasty("Please enter a title.", "short", "middle");
            toast.show();
        }
        else if (this.description == null) {
            var toast = new nativescript_toasty_1.Toasty("Please enter a description.", "short");
            toast.show();
        }
        else if (this.priorityCheck == false) {
            var toast = new nativescript_toasty_1.Toasty("Please enter a priority level.", "short");
            toast.show();
        }
        else if (this.startTimeCheck == false) {
            var toast = new nativescript_toasty_1.Toasty("Please enter a start time.", "short");
            toast.show();
        }
        else if (this.endTimeCheck == false) {
            var toast = new nativescript_toasty_1.Toasty("Please enter an end time.", "short");
            toast.show();
        }
        else {
            if (this.updateEvent == true) {
                this.database.editEvent(this.key, this.title, this.description, this.priority, this.startTime, this.endTime);
            }
            else {
                this.database.newEvent(this.title, this.description, this.priority, this.startTime, this.endTime);
            }
            console.log("priority " + this.priority);
            this.router.navigate(["/home"]);
        } //end of else
    }; //end of method
    EventAddComponent.prototype.initalTime = function () {
        var _this = this;
        var date = new Date();
        var mCallback = (function (result) {
            if (result) {
                date.setHours(Number(result.substring(11, 13)));
                date.setMinutes(Number(result.substring(14, 16)));
                _this.endTime = date;
                _this.startTimeStr = date.getHours() + ":" + date.getMinutes();
                console.log(_this.startTimeStr);
            }
            _this.startTimeCheck = true;
        });
        //Initialize the PickerManager (.init(yourCallback, title, initialDate))
        TimeDatePicker.init(mCallback, null, null);
        //Show the dialog
        TimeDatePicker.showTimePickerDialog();
    }; //end of method
    EventAddComponent.prototype.finalTime = function () {
        var _this = this;
        var date = new Date();
        var mCallback = (function (result) {
            if (result) {
                date.setHours(Number(result.substring(11, 13)));
                date.setMinutes(Number(result.substring(14, 16)));
                _this.startTime = date;
                _this.endTimeStr = date.getHours() + ":" + date.getMinutes();
                console.log(_this.endTimeStr);
            }
            _this.endTimeCheck = true;
        });
        //Initialize the PickerManager (.init(yourCallback, title, initialDate))
        TimeDatePicker.init(mCallback, null, null);
        //Show the dialog
        TimeDatePicker.showTimePickerDialog();
    };
    EventAddComponent.prototype.cancelBtn = function () {
        this.router.navigate(["/home"]);
    };
    EventAddComponent.prototype.priority1 = function () {
        console.log(this.priority);
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
        alert(this.priority);
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
    __decorate([
        core_1.ViewChild("scroll"), 
        __metadata('design:type', core_1.ElementRef)
    ], EventAddComponent.prototype, "scroll", void 0);
    EventAddComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./pages/event-add/event-add.html",
            styleUrls: ["./pages/event-add/event-add.css"]
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, router_1.Router, database_1.Database, event_handeler_provider_1.EventHandeler, page_1.Page])
    ], EventAddComponent);
    return EventAddComponent;
}());
exports.EventAddComponent = EventAddComponent; //end of Class
/**--------------
 * ----NOTES-----
 * --------------
 *
 * ---Remember---
 * *Go into the fontAwesome file and comment out the icons that are
 * not being used. It takes up space in the application.
 *
 * ---Issues---
 * *If you enter in data into one of the fields and delete it,
 * it the property in the Typescript is no longer NULL and doesn't,
 * get cought by the 'if(null)' check
 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LWFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5RCxlQUFlLENBQUMsQ0FBQTtBQUN6RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxxQkFBcUIsU0FBUyxDQUFDLENBQUE7QUFDL0IsSUFBTyxLQUFLLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFDbkMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsV0FBVyxDQUFDO0FBRWpFLHdDQUE4QiwrREFBK0QsQ0FBQyxDQUFBO0FBRTlGLHlCQUF5QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTFELGlDQUFnQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3hFLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUU3RSw4Q0FBK0IsNkRBQTZELENBQUMsQ0FBQTtBQUU3RixvQ0FBdUIscUJBQ3ZCLENBQUMsQ0FEMkM7QUFFNUMsSUFBWSxjQUFjLFdBQU0sNkJBQTZCLENBQUMsQ0FBQTtBQVc5RDtJQW1DSSwyQkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQ3JELFFBQWtCLEVBQVUsYUFBNEIsRUFBVSxJQUFVO1FBcEM1RixpQkF5TkM7UUF0THVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNyRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBbEN4RixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFjLEdBQVksS0FBSyxD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SUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQU8sR0FBZjtRQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLHFDQUFTLEdBQWpCO0lBRUEsQ0FBQztJQUVPLG9DQUFRLEdBQWhCO0lBRUEsQ0FBQztJQUVPLGtDQUFNLEdBQWQ7SUFFQSxDQUFDO0lBRU8sb0NBQVEsR0FBaEI7SUFFQSxDQUFDO0lBRU8sa0NBQU0sR0FBZDtJQUVBLENBQUM7SUF4TEQ7UUFBQyxnQkFBUyxDQUFDLFFBQVEsQ0FBQzs7cURBQUE7SUFwQ3hCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDakQsQ0FBQzs7eUJBQUE7SUEwTkYsd0JBQUM7QUFBRCxDQUFDLEFBek5ELElBeU5DO0FBek5ZLHlCQUFpQixvQkF5TjdCLENBQUEsQ0FBQSxjQUFjO0FBR2Y7Ozs7Ozs7Ozs7OztHQVlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IGZyYW1lID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG52YXIgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIikuU3RhY2tMYXlvdXQ7XHJcblxyXG5pbXBvcnQgeyBFdmVudEhhbmRlbGVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvZXZlbnQtaGFuZGVsZXIvZXZlbnQtaGFuZGVsZXIucHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYXRhYmFzZS9kYXRhYmFzZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbnJlZ2lzdGVyRWxlbWVudCgnQ2hlY2tCb3gnLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtY2hlY2tib3gnKS5DaGVja0JveCk7XHJcblxyXG5pbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlL25hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlJztcclxuXHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknXHJcbmltcG9ydCB7IFNuYWNrQmFyLCBTbmFja0Jhck9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIFRpbWVEYXRlUGlja2VyIGZyb20gJ25hdGl2ZXNjcmlwdC10aW1lZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSAndWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2V2ZW50LWFkZC9ldmVudC1hZGQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2V2ZW50LWFkZC9ldmVudC1hZGQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudEFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY2hlY2tCb29sOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbW9uZGF5Q2hlY2s6IGJvb2xlYW47XHJcbiAgICB0dWVzZGF5Q2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHdlZG5lc2RheUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0aHVyc2RheUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBmcmlkYXlDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2F0dXJkYXlDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3VuZGF5Q2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmcgPSBcIkNvbXB1dGVyIFNjaWVuY2VcIjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcImRlc2NyaXB0aW9uIEkgZ3Vlc3NcIjtcclxuICAgIHN0YXJ0VGltZTogRGF0ZTtcclxuICAgIGVuZFRpbWU6IERhdGU7XHJcbiAgICBzdGFydFRpbWVTdHIgPSBcIjQ6MDAgcG1cIjtcclxuICAgIGVuZFRpbWVTdHIgPSBcIjU6MDAgcG1cIjtcclxuXHJcbiAgICBzdGFydFRpbWVDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZW5kVGltZUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcmlvcml0eUNoZWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICB1cGRhdGVFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdGltZUR1cmF0aW9uOiBzdHJpbmcgPSBcIjI6MzlcIjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpb3JpdHk6IGFueTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwic2Nyb2xsXCIpIHNjcm9sbDogRWxlbWVudFJlZjtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlLCBwcml2YXRlIGV2ZW50SGFuZGVsZXI6IEV2ZW50SGFuZGVsZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXNbXCJrZXlcIl0pIHsvL0ZPUiBBVVRPIEZJTEwgRk9SIE1BS0lORyBORVcgRVZFTlQuIERPTlQgRk9SR0VUIFRPIERFTEVURSBUSElTISEhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5ID0gcGFyYW1zW1wia2V5XCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHBhcmFtc1tcInRpdGxlXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHBhcmFtc1tcImRlc2NyaXB0aW9uXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwYXJhbXNbXCJwcmlvcml0eVwiXSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBhcmFtc1tcInN0YXJ0VGltZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBwYXJhbXNbXCJlbmRUaW1lXCJdXHJcbiAgICAgICAgICAgIH0vL2VuZCBvZiBpZlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwYWdlID0gPFBhZ2U+ZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xyXG4gICAgfS8vZW5kIG9mIGNvbnN0cnVjdG9yXHJcblxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgaWNvblNjcm9sbExpc3Q6IFNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBzd2lzczogU3dpc3NBcm15S25pZmU7XHJcblxyXG5Td2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkTmF2QmFyVHJhbnNsdWNlbnRGbGFnKCk7XHJcblxyXG4gICAgICAgIC8vIHN3aXNzLnJlbW92ZUhvcml6b250YWxTY3JvbGxCYXJzKGljb25TY3JvbGxMaXN0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRvbmVCdG4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGl0bGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcclxuICAgICAgICAgICAgLy8gICAgIHNuYWNrYmFyLnNpbXBsZSgnU25hY2tiYXInKS50aGVuKChhcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgIHRoaXMuc2V0KCdqc29uUmVzdWx0JywgSlNPTi5zdHJpbmdpZnkoYXJncykpO1xyXG4gICAgICAgICAgICAvLyAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJQbGVhc2UgZW50ZXIgYSB0aXRsZS5cIiwgXCJzaG9ydFwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChcIlBsZWFzZSBlbnRlciBhIHRpdGxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kZXNjcmlwdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlBsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uLlwiLCBcInNob3J0XCIpO1xyXG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJpb3JpdHlDaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJQbGVhc2UgZW50ZXIgYSBwcmlvcml0eSBsZXZlbC5cIiwgXCJzaG9ydFwiKTtcclxuICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXJ0VGltZUNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlBsZWFzZSBlbnRlciBhIHN0YXJ0IHRpbWUuXCIsIFwic2hvcnRcIik7XHJcbiAgICAgICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbmRUaW1lQ2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUGxlYXNlIGVudGVyIGFuIGVuZCB0aW1lLlwiLCBcInNob3J0XCIpO1xyXG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVFdmVudCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlLmVkaXRFdmVudChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZFRpbWVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlLm5ld0V2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kVGltZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByaW9yaXR5IFwiICsgdGhpcy5wcmlvcml0eSk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcclxuXHJcbiAgICAgICAgfS8vZW5kIG9mIGVsc2VcclxuXHJcbiAgICB9Ly9lbmQgb2YgbWV0aG9kXHJcblxyXG4gICAgcHJpdmF0ZSBpbml0YWxUaW1lKCkge1xyXG4gICAgICAgIGxldCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgbUNhbGxiYWNrID0gKChyZXN1bHQ6IFN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhOdW1iZXIocmVzdWx0LnN1YnN0cmluZygxMSwgMTMpKSk7XHJcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoTnVtYmVyKHJlc3VsdC5zdWJzdHJpbmcoMTQsIDE2KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IGRhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZVN0ciA9IGRhdGUuZ2V0SG91cnMoKSArIFwiOlwiICsgZGF0ZS5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFydFRpbWVTdHIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZUNoZWNrID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0luaXRpYWxpemUgdGhlIFBpY2tlck1hbmFnZXIgKC5pbml0KHlvdXJDYWxsYmFjaywgdGl0bGUsIGluaXRpYWxEYXRlKSlcclxuICAgICAgICBUaW1lRGF0ZVBpY2tlci5pbml0KG1DYWxsYmFjaywgbnVsbCwgbnVsbCk7XHJcblxyXG4gICAgICAgIC8vU2hvdyB0aGUgZGlhbG9nXHJcbiAgICAgICAgVGltZURhdGVQaWNrZXIuc2hvd1RpbWVQaWNrZXJEaWFsb2coKTtcclxuICAgIH0vL2VuZCBvZiBtZXRob2RcclxuXHJcbiAgICBwcml2YXRlIGZpbmFsVGltZSgpIHtcclxuICAgICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IG1DYWxsYmFjayA9ICgocmVzdWx0OiBTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycyhOdW1iZXIocmVzdWx0LnN1YnN0cmluZygxMSwgMTMpKSk7XHJcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoTnVtYmVyKHJlc3VsdC5zdWJzdHJpbmcoMTQsIDE2KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gZGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kVGltZVN0ciA9IGRhdGUuZ2V0SG91cnMoKSArIFwiOlwiICsgZGF0ZS5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5lbmRUaW1lU3RyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmRUaW1lQ2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vSW5pdGlhbGl6ZSB0aGUgUGlja2VyTWFuYWdlciAoLmluaXQoeW91ckNhbGxiYWNrLCB0aXRsZSwgaW5pdGlhbERhdGUpKVxyXG4gICAgICAgIFRpbWVEYXRlUGlja2VyLmluaXQobUNhbGxiYWNrLCBudWxsLCBudWxsKTtcclxuXHJcbiAgICAgICAgLy9TaG93IHRoZSBkaWFsb2dcclxuICAgICAgICBUaW1lRGF0ZVBpY2tlci5zaG93VGltZVBpY2tlckRpYWxvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbEJ0bigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcHJpb3JpdHkxKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJpb3JpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpb3JpdHkyKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW9yaXR5MygpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbW9uZGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vbmRheUNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25kYXlDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhbGVydChcIkJ1dHRvbiB0YXBwZWQgbm93OiBcIiArIHRoaXMubW9uZGF5Q2hlY2spO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb25kYXlDaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmRheUNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWxlcnQoXCJCdXR0b24gdGFwcGVkIG5vdzogXCIgKyB0aGlzLm1vbmRheUNoZWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmRheUNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5tb25kYXlDaGVjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHVlc2RheSgpIHtcclxuICAgICAgICBhbGVydCh0aGlzLnByaW9yaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdlZG5lc2RheSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHVyc2RheSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmcmlkYXkoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F0dXJkYXkoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3VuZGF5KCkge1xyXG5cclxuICAgIH1cclxuXHJcbn0vL2VuZCBvZiBDbGFzc1xyXG5cclxuXHJcbi8qKi0tLS0tLS0tLS0tLS0tXHJcbiAqIC0tLS1OT1RFUy0tLS0tXHJcbiAqIC0tLS0tLS0tLS0tLS0tXHJcbiAqIFxyXG4gKiAtLS1SZW1lbWJlci0tLVxyXG4gKiAqR28gaW50byB0aGUgZm9udEF3ZXNvbWUgZmlsZSBhbmQgY29tbWVudCBvdXQgdGhlIGljb25zIHRoYXQgYXJlXHJcbiAqIG5vdCBiZWluZyB1c2VkLiBJdCB0YWtlcyB1cCBzcGFjZSBpbiB0aGUgYXBwbGljYXRpb24uXHJcbiAqIFxyXG4gKiAtLS1Jc3N1ZXMtLS1cclxuICogKklmIHlvdSBlbnRlciBpbiBkYXRhIGludG8gb25lIG9mIHRoZSBmaWVsZHMgYW5kIGRlbGV0ZSBpdCxcclxuICogaXQgdGhlIHByb3BlcnR5IGluIHRoZSBUeXBlc2NyaXB0IGlzIG5vIGxvbmdlciBOVUxMIGFuZCBkb2Vzbid0LFxyXG4gKiBnZXQgY291Z2h0IGJ5IHRoZSAnaWYobnVsbCknIGNoZWNrXHJcbiAqLyJdfQ==