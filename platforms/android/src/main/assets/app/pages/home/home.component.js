"use strict";
var core_1 = require("@angular/core");
var event_handeler_provider_1 = require("../../shared/providers/event-handeler/event-handeler.provider");
var database_1 = require("../../shared/database/database");
var page_1 = require('ui/page');
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("LineProgressBar", function () { return require("nativescript-progressbar").LineProgressBar; });
element_registry_1.registerElement("fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var HomeComponent = (function () {
    function HomeComponent(page, database, eventHandeler) {
        this.page = page;
        this.database = database;
        this.eventHandeler = eventHandeler;
        this.hasEvent = false;
        this.devMode = true;
        this.totalProgress = 90;
        this.progressValue = 30;
        this.testMode = false;
        this.databaseName = "testdb";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.eventList = this.database.getEventList();
        if (this.eventList.length > 0) {
            this.hasEvent = true;
        }
        else {
            this.hasEvent = false;
        }
        // this.eventList = this.eventHandeler.eventList;
        // if (this.eventList.length > 0) {
        //   this.hasEvent = true;
        // } else {
        //   this.hasEvent = false;
        // }
    }; //end if ngOnInit()
    HomeComponent.prototype.devTest = function () {
        var output;
        for (var i in this.eventList) {
            output += "Event " + i + ": "
                + "\n Key: " + this.eventList[i].key
                + "\n Title: " + this.eventList[i].title
                + "\n Description: " + this.eventList[i].description
                + "\n priority: " + this.eventList[i].priority
                + "\n startTime: " + this.eventList[i].startTime
                + "\n endTime: " + this.eventList[i].endTime;
            console.log(output);
        }
    };
    HomeComponent.prototype.testBtn = function () {
    };
    HomeComponent.prototype.eventListTap = function () {
        alert("Tapped");
    };
    HomeComponent.prototype.devDeleteList = function () {
        this.eventHandeler.deleteList();
        this.eventList = this.eventHandeler.eventList;
        this.hasEvent = false;
    };
    HomeComponent.prototype.devGenerateEvents = function () {
        for (var i = 0; i < 50; i++) {
            this.eventHandeler.newEvent("Event Title: " + (i + 1), "Description: " + i, 3, 5, 6);
            this.eventList = this.eventHandeler.eventList;
        } //end of for
        this.hasEvent = true;
    };
    HomeComponent.prototype.provide = function () {
        this.eventList = this.eventHandeler.eventList;
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
    HomeComponent.prototype.editBtn = function () {
    };
    HomeComponent.prototype.extendTimeBtn = function () {
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
        __metadata('design:paramtypes', [page_1.Page, database_1.Database, event_handeler_provider_1.EventHandeler])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent; //end of class
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBRXpFLHdDQUE4QiwrREFBK0QsQ0FBQyxDQUFBO0FBQzlGLHlCQUF5QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSTFELHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUsvQixpQ0FBMkMsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsZUFBZSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFDOUYsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBVS9FO0lBZUUsdUJBQW9CLElBQVUsRUFBVSxRQUFrQixFQUFVLGFBQTRCO1FBQTVFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFiaEcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRTNCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxRQUFRLENBQUM7SUFReEIsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7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LENBQUM7WUFDdEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxvREFBb0Q7SUFFdEQsQ0FBQztJQUVELCtCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQscUNBQWEsR0FBYjtJQUVBLENBQUM7SUE3RkQ7UUFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7bURBQUE7SUFuQjFCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQzs7cUJBQUE7SUFnSEYsb0JBQUM7QUFBRCxDQUFDLEFBN0dELElBNkdDO0FBN0dZLHFCQUFhLGdCQTZHekIsQ0FBQSxDQUFBLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRlbGVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlcnMvZXZlbnQtaGFuZGVsZXIvZXZlbnQtaGFuZGVsZXIucHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCBsaXN0Vmlld01vZHVsZSA9IHJlcXVpcmUoXCJ1aS9saXN0LXZpZXdcIik7XHJcbmltcG9ydCBvYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpO1xyXG5pbXBvcnQgbGFiZWxNb2R1bGUgPSByZXF1aXJlKFwidWkvbGFiZWxcIik7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcclxuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFZpZXdDbGFzcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJMaW5lUHJvZ3Jlc3NCYXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wcm9ncmVzc2JhclwiKS5MaW5lUHJvZ3Jlc3NCYXIpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJmYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2hvbWUvaG9tZS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9ob21lL2hvbWUuY3NzXCJdLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgaGFzRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBldmVudExpc3Q6IGFueTtcclxuICBkZXZNb2RlOiBib29sZWFuID0gdHJ1ZTtcclxuICB0b3RhbFByb2dyZXNzID0gOTA7XHJcbiAgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyID0gMzA7XHJcblxyXG4gIHRlc3RNb2RlID0gZmFsc2U7XHJcbiAgZGF0YWJhc2VOYW1lID0gXCJ0ZXN0ZGJcIjtcclxuICBkYXRhYmFzZU91dHB1dDtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm15UHJvZ3Jlc3NcIikgcHJvZ3Jlc3M6IEVsZW1lbnRSZWY7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlLCBwcml2YXRlIGV2ZW50SGFuZGVsZXI6IEV2ZW50SGFuZGVsZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5ldmVudExpc3QgPSB0aGlzLmRhdGFiYXNlLmdldEV2ZW50TGlzdCgpO1xyXG4gICAgaWYgKHRoaXMuZXZlbnRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5oYXNFdmVudCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0V2ZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRoaXMuZXZlbnRMaXN0ID0gdGhpcy5ldmVudEhhbmRlbGVyLmV2ZW50TGlzdDtcclxuICAgIC8vIGlmICh0aGlzLmV2ZW50TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgIHRoaXMuaGFzRXZlbnQgPSB0cnVlO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgdGhpcy5oYXNFdmVudCA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuICB9Ly9lbmQgaWYgbmdPbkluaXQoKVxyXG5cclxuICBkZXZUZXN0KCkge1xyXG4gICAgbGV0IG91dHB1dDogc3RyaW5nO1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmV2ZW50TGlzdCkge1xyXG4gICAgICBvdXRwdXQgKz0gXCJFdmVudCBcIiArIGkgKyBcIjogXCJcclxuICAgICAgICArIFwiXFxuIEtleTogXCIgKyB0aGlzLmV2ZW50TGlzdFtpXS5rZXlcclxuICAgICAgICArIFwiXFxuIFRpdGxlOiBcIiArIHRoaXMuZXZlbnRMaXN0W2ldLnRpdGxlXHJcbiAgICAgICAgKyBcIlxcbiBEZXNjcmlwdGlvbjogXCIgKyB0aGlzLmV2ZW50TGlzdFtpXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICsgXCJcXG4gcHJpb3JpdHk6IFwiICsgdGhpcy5ldmVudExpc3RbaV0ucHJpb3JpdHlcclxuICAgICAgICArIFwiXFxuIHN0YXJ0VGltZTogXCIgKyB0aGlzLmV2ZW50TGlzdFtpXS5zdGFydFRpbWVcclxuICAgICAgICArIFwiXFxuIGVuZFRpbWU6IFwiICsgdGhpcy5ldmVudExpc3RbaV0uZW5kVGltZTtcclxuICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB0ZXN0QnRuKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGV2ZW50TGlzdFRhcCgpIHtcclxuICAgIGFsZXJ0KFwiVGFwcGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgZGV2RGVsZXRlTGlzdCgpIHtcclxuICAgIHRoaXMuZXZlbnRIYW5kZWxlci5kZWxldGVMaXN0KCk7XHJcbiAgICB0aGlzLmV2ZW50TGlzdCA9IHRoaXMuZXZlbnRIYW5kZWxlci5ldmVudExpc3Q7XHJcbiAgICB0aGlzLmhhc0V2ZW50ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkZXZHZW5lcmF0ZUV2ZW50cygpIHtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCA1MDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRIYW5kZWxlci5uZXdFdmVudChcclxuICAgICAgICBcIkV2ZW50IFRpdGxlOiBcIiArIChpICsgMSksXHJcbiAgICAgICAgXCJEZXNjcmlwdGlvbjogXCIgKyBpLCAzLCA1LCA2XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZXZlbnRMaXN0ID0gdGhpcy5ldmVudEhhbmRlbGVyLmV2ZW50TGlzdDtcclxuICAgIH0vL2VuZCBvZiBmb3JcclxuICAgIHRoaXMuaGFzRXZlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3ZpZGUoKSB7XHJcbiAgICB0aGlzLmV2ZW50TGlzdCA9IHRoaXMuZXZlbnRIYW5kZWxlci5ldmVudExpc3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKGV2ZW50TGlzdCkge1xyXG5cclxuICAgIHRoaXMuZXZlbnRMaXN0ID0gZXZlbnRMaXN0O1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiQmxvY2sgMSBoYXNFdmVudCA9IFwiICsgdGhpcy5oYXNFdmVudCk7XHJcbiAgICAgIHRoaXMuaGFzRXZlbnQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFdmVudCA9IGZhbHNlO1xyXG4gICAgICBhbGVydChcIkJsb2NrIDJcIik7XHJcbiAgICB9XHJcbiAgICAvLyBhbGVydChcIkhvbWVDb21wb25lbnQ6IFwiICsgdGhpcy5ldmVudExpc3QubGVuZ3RoKTtcclxuXHJcbiAgfVxyXG5cclxuICBlZGl0QnRuKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGV4dGVuZFRpbWVCdG4oKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxufS8vZW5kIG9mIGNsYXNzIl19