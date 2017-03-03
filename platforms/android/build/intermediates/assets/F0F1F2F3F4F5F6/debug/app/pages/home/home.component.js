"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var database_1 = require("../../shared/database/database");
var page_1 = require('ui/page');
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("LineProgressBar", function () { return require("nativescript-progressbar").LineProgressBar; });
element_registry_1.registerElement("pb:CircleProgressBar", function () { return require("nativescript-progressbar").LineProgressBar; });
element_registry_1.registerElement("fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var HomeComponent = (function () {
    function HomeComponent(page, database, router) {
        this.page = page;
        this.database = database;
        this.router = router;
        this.hasEvent = false;
        this.devMode = true;
        this.totalProgress = 90;
        this.progressValue = 30;
        this.testMode = false;
        this.databaseName = "testdb";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.startTimeDayCycle = "pm";
        this.endTimeDayCycle = "pm";
        this.eventList = this.database.getEventList();
        if (this.eventList.length > 0) {
            this.hasEvent = true;
        }
        else {
            this.hasEvent = false;
        }
    }; //end if ngOnInit()
    HomeComponent.prototype.devTest = function () {
        this.database.reset();
        this.eventList = [];
        this.hasEvent = false;
        alert("data reset");
    };
    HomeComponent.prototype.testBtn = function () {
    };
    // public onItemTap(args) {
    //   alert(args);
    // }
    HomeComponent.prototype.eventListTap = function (args) {
        alert(args.key);
    };
    HomeComponent.prototype.editBtn = function (args) {
        var eventData = {
            queryParams: {
                "key": args.key,
                "title": args.title,
                "description": args.description,
                "priority": args.priority,
                "startTime": args.startTime,
                "endTime": args.endTime
            }
        };
        this.router.navigate(["/event"], eventData);
    };
    HomeComponent.prototype.timeConvert = function (time) {
    };
    HomeComponent.prototype.devDeleteList = function () {
    };
    HomeComponent.prototype.devGenerateEvents = function () {
        // for (let i: number = 0; i < 50; i++) {
        //   this.eventHandeler.newEvent(
        //     "Event Title: " + (i + 1),
        //     "Description: " + i, 3, 5, 6
        //   );
        //   this.eventList = this.eventHandeler.eventList;
        // }//end of for
        // this.hasEvent = true;
    };
    HomeComponent.prototype.provide = function () {
        // this.eventList = this.eventHandeler.eventList;
    };
    HomeComponent.prototype.update = function (eventList) {
        this.eventList = eventList;
        if (this.eventList.length > 0) {
            alert("Block 1 hasEvent = " + this.hasEvent);
            this.hasEvent = true;
        }
        else {
            this.hasEvent = false;
            alert("Block 2");
        }
        // alert("HomeComponent: " + this.eventList.length);
    };
    // editBtn(eventData: any) {
    // alert("WORKING: " + eventData);
    // }
    HomeComponent.prototype.extendTimeBtn = function (args) {
        this.database.deleteEvent(args.key);
        this.eventList = this.database.getEventList();
        if (this.eventList.length > 0) {
            this.hasEvent = false;
        }
    };
    __decorate([
        core_1.ViewChild("myProgress"), 
        __metadata('design:type', core_1.ElementRef)
    ], HomeComponent.prototype, "progress", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./pages/home/home.html",
            styleUrls: ["pages/home/home.css"],
        }), 
        __metadata('design:paramtypes', [page_1.Page, database_1.Database, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent; //end of class
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBQ3pFLHVCQUF5QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTNELHlCQUF5QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSTFELHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUsvQixpQ0FBMkMsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsZUFBZSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFDOUYsa0NBQWUsQ0FBQyxzQkFBc0IsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsZUFBZSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFFbkcsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBUy9FO0lBa0JFLHVCQUFvQixJQUFVLEVBQVUsUUFBa0IsRUFBVSxNQUFjO1FBQTlELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWhCbEYsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRTNCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxRQUFR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RSxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztJQUVILENBQUM7SUE3R0Q7UUFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7bURBQUE7SUF0QjFCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQzs7cUJBQUE7SUFpSUYsb0JBQUM7QUFBRCxDQUFDLEFBOUhELElBOEhDO0FBOUhZLHFCQUFhLGdCQThIekIsQ0FBQSxDQUFBLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRlbGVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvZXZlbnQtaGFuZGVsZXIvZXZlbnQtaGFuZGVsZXIucHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCBsaXN0Vmlld01vZHVsZSA9IHJlcXVpcmUoXCJ1aS9saXN0LXZpZXdcIik7XHJcbmltcG9ydCBvYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpO1xyXG5pbXBvcnQgbGFiZWxNb2R1bGUgPSByZXF1aXJlKFwidWkvbGFiZWxcIik7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcclxuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFZpZXdDbGFzcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJMaW5lUHJvZ3Jlc3NCYXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wcm9ncmVzc2JhclwiKS5MaW5lUHJvZ3Jlc3NCYXIpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJwYjpDaXJjbGVQcm9ncmVzc0JhclwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXByb2dyZXNzYmFyXCIpLkxpbmVQcm9ncmVzc0Jhcik7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJmYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvaG9tZS9ob21lLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2hvbWUvaG9tZS5jc3NcIl0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBoYXNFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGV2ZW50TGlzdDogYW55O1xyXG4gIGRldk1vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHRvdGFsUHJvZ3Jlc3MgPSA5MDtcclxuICBwcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAzMDtcclxuXHJcbiAgdGVzdE1vZGUgPSBmYWxzZTtcclxuICBkYXRhYmFzZU5hbWUgPSBcInRlc3RkYlwiO1xyXG4gIGRhdGFiYXNlT3V0cHV0O1xyXG5cclxuICBzdGFydFRpbWVEYXlDeWNsZTogc3RyaW5nO1xyXG4gIGVuZFRpbWVEYXlDeWNsZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFwibXlQcm9ncmVzc1wiKSBwcm9ncmVzczogRWxlbWVudFJlZjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLnN0YXJ0VGltZURheUN5Y2xlID0gXCJwbVwiO1xyXG4gICAgdGhpcy5lbmRUaW1lRGF5Q3ljbGUgPSBcInBtXCI7XHJcblxyXG5cclxuICAgIHRoaXMuZXZlbnRMaXN0ID0gdGhpcy5kYXRhYmFzZS5nZXRFdmVudExpc3QoKTtcclxuICAgIGlmICh0aGlzLmV2ZW50TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaGFzRXZlbnQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICB9Ly9lbmQgaWYgbmdPbkluaXQoKVxyXG5cclxuICBkZXZUZXN0KCkge1xyXG4gICAgdGhpcy5kYXRhYmFzZS5yZXNldCgpO1xyXG4gICAgdGhpcy5ldmVudExpc3QgPSBbXTtcclxuICAgIHRoaXMuaGFzRXZlbnQgPSBmYWxzZTtcclxuICAgIGFsZXJ0KFwiZGF0YSByZXNldFwiKTtcclxuXHJcbiAgfVxyXG5cclxuICB0ZXN0QnRuKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAvLyAgIGFsZXJ0KGFyZ3MpO1xyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIGV2ZW50TGlzdFRhcChhcmdzKSB7XHJcbiAgICBhbGVydChhcmdzLmtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZWRpdEJ0bihhcmdzKSB7XHJcbiAgICBsZXQgZXZlbnREYXRhOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgIFwia2V5XCI6IGFyZ3Mua2V5LFxyXG4gICAgICAgIFwidGl0bGVcIjogYXJncy50aXRsZSxcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGFyZ3MuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBhcmdzLnByaW9yaXR5LFxyXG4gICAgICAgIFwic3RhcnRUaW1lXCI6IGFyZ3Muc3RhcnRUaW1lLFxyXG4gICAgICAgIFwiZW5kVGltZVwiOiBhcmdzLmVuZFRpbWVcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZXZlbnRcIl0sIGV2ZW50RGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGltZUNvbnZlcnQodGltZTogbnVtYmVyKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGRldkRlbGV0ZUxpc3QoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZGV2R2VuZXJhdGVFdmVudHMoKSB7XHJcbiAgICAvLyBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgNTA7IGkrKykge1xyXG4gICAgLy8gICB0aGlzLmV2ZW50SGFuZGVsZXIubmV3RXZlbnQoXHJcbiAgICAvLyAgICAgXCJFdmVudCBUaXRsZTogXCIgKyAoaSArIDEpLFxyXG4gICAgLy8gICAgIFwiRGVzY3JpcHRpb246IFwiICsgaSwgMywgNSwgNlxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gICB0aGlzLmV2ZW50TGlzdCA9IHRoaXMuZXZlbnRIYW5kZWxlci5ldmVudExpc3Q7XHJcbiAgICAvLyB9Ly9lbmQgb2YgZm9yXHJcbiAgICAvLyB0aGlzLmhhc0V2ZW50ID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcm92aWRlKCkge1xyXG4gICAgLy8gdGhpcy5ldmVudExpc3QgPSB0aGlzLmV2ZW50SGFuZGVsZXIuZXZlbnRMaXN0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShldmVudExpc3QpIHtcclxuXHJcbiAgICB0aGlzLmV2ZW50TGlzdCA9IGV2ZW50TGlzdDtcclxuXHJcbiAgICBpZiAodGhpcy5ldmVudExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICBhbGVydChcIkJsb2NrIDEgaGFzRXZlbnQgPSBcIiArIHRoaXMuaGFzRXZlbnQpO1xyXG4gICAgICB0aGlzLmhhc0V2ZW50ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRXZlbnQgPSBmYWxzZTtcclxuICAgICAgYWxlcnQoXCJCbG9jayAyXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gYWxlcnQoXCJIb21lQ29tcG9uZW50OiBcIiArIHRoaXMuZXZlbnRMaXN0Lmxlbmd0aCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gZWRpdEJ0bihldmVudERhdGE6IGFueSkge1xyXG4gIC8vIGFsZXJ0KFwiV09SS0lORzogXCIgKyBldmVudERhdGEpO1xyXG4gIC8vIH1cclxuXHJcbiAgZXh0ZW5kVGltZUJ0bihhcmdzKSB7Ly9kZWxldGUgYnV0dG9uIGZvciBub3dcclxuICAgIHRoaXMuZGF0YWJhc2UuZGVsZXRlRXZlbnQoYXJncy5rZXkpO1xyXG4gICAgdGhpcy5ldmVudExpc3QgPSB0aGlzLmRhdGFiYXNlLmdldEV2ZW50TGlzdCgpO1xyXG4gICAgaWYgKHRoaXMuZXZlbnRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5oYXNFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59Ly9lbmQgb2YgY2xhc3MiXX0=