"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var database_1 = require("../../shared/database/database");
var page_1 = require('ui/page');
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("LineProgressBar", function () { return require("nativescript-progressbar").LineProgressBar; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBQ3pFLHVCQUF5QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTNELHlCQUF5QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSTFELHFCQUFxQixTQUFTLENBQUMsQ0FBQTtBQUsvQixpQ0FBMkMsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsZUFBZSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFDOUYsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBVS9FO0lBZUUsdUJBQW9CLElBQVUsRUFBVSxRQUFrQixFQUFVLE1BQWM7UUFBOUQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYmxGLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO0lBUXhCLENBQUM7SUFHRCxnQ0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FB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QUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDOztxQkFBQTtJQTBIRixvQkFBQztBQUFELENBQUMsQUF2SEQsSUF1SEM7QUF2SFkscUJBQWEsZ0JBdUh6QixDQUFBLENBQUEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGVsZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb3ZpZGVycy9ldmVudC1oYW5kZWxlci9ldmVudC1oYW5kZWxlci5wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IGxpc3RWaWV3TW9kdWxlID0gcmVxdWlyZShcInVpL2xpc3Qtdmlld1wiKTtcclxuaW1wb3J0IG9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIik7XHJcbmltcG9ydCBsYWJlbE1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9sYWJlbFwiKTtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgVmlld0NsYXNzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkxpbmVQcm9ncmVzc0JhclwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXByb2dyZXNzYmFyXCIpLkxpbmVQcm9ncmVzc0Jhcik7XHJcbnJlZ2lzdGVyRWxlbWVudChcImZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvaG9tZS9ob21lLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2hvbWUvaG9tZS5jc3NcIl0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBoYXNFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGV2ZW50TGlzdDogYW55O1xyXG4gIGRldk1vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHRvdGFsUHJvZ3Jlc3MgPSA5MDtcclxuICBwcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSAzMDtcclxuXHJcbiAgdGVzdE1vZGUgPSBmYWxzZTtcclxuICBkYXRhYmFzZU5hbWUgPSBcInRlc3RkYlwiO1xyXG4gIGRhdGFiYXNlT3V0cHV0O1xyXG5cclxuICBAVmlld0NoaWxkKFwibXlQcm9ncmVzc1wiKSBwcm9ncmVzczogRWxlbWVudFJlZjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5ldmVudExpc3QgPSB0aGlzLmRhdGFiYXNlLmdldEV2ZW50TGlzdCgpO1xyXG4gICAgaWYgKHRoaXMuZXZlbnRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5oYXNFdmVudCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0V2ZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICB9Ly9lbmQgaWYgbmdPbkluaXQoKVxyXG5cclxuICBkZXZUZXN0KCkge1xyXG4gICAgdGhpcy5kYXRhYmFzZS5yZXNldCgpO1xyXG4gICAgdGhpcy5ldmVudExpc3QgPSBbXTtcclxuICAgIHRoaXMuaGFzRXZlbnQgPSBmYWxzZTtcclxuICAgIGFsZXJ0KFwiZGF0YSByZXNldFwiKTtcclxuXHJcbiAgfVxyXG5cclxuICB0ZXN0QnRuKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAvLyAgIGFsZXJ0KGFyZ3MpO1xyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIGV2ZW50TGlzdFRhcChhcmdzKSB7XHJcbiAgICBhbGVydChhcmdzLmtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZWRpdEJ0bihhcmdzKSB7XHJcbiAgICBsZXQgZXZlbnREYXRhOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgIFwia2V5XCI6IGFyZ3Mua2V5LFxyXG4gICAgICAgIFwidGl0bGVcIjogYXJncy50aXRsZSxcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGFyZ3MuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgXCJwcmlvcml0eVwiOiBhcmdzLnByaW9yaXR5LFxyXG4gICAgICAgIFwic3RhcnRUaW1lXCI6IGFyZ3Muc3RhcnRUaW1lLFxyXG4gICAgICAgIFwiZW5kVGltZVwiOiBhcmdzLmVuZFRpbWVcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZXZlbnRcIl0sIGV2ZW50RGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZGV2RGVsZXRlTGlzdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBkZXZHZW5lcmF0ZUV2ZW50cygpIHtcclxuICAgIC8vIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCA1MDsgaSsrKSB7XHJcbiAgICAvLyAgIHRoaXMuZXZlbnRIYW5kZWxlci5uZXdFdmVudChcclxuICAgIC8vICAgICBcIkV2ZW50IFRpdGxlOiBcIiArIChpICsgMSksXHJcbiAgICAvLyAgICAgXCJEZXNjcmlwdGlvbjogXCIgKyBpLCAzLCA1LCA2XHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyAgIHRoaXMuZXZlbnRMaXN0ID0gdGhpcy5ldmVudEhhbmRlbGVyLmV2ZW50TGlzdDtcclxuICAgIC8vIH0vL2VuZCBvZiBmb3JcclxuICAgIC8vIHRoaXMuaGFzRXZlbnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3ZpZGUoKSB7XHJcbiAgICAvLyB0aGlzLmV2ZW50TGlzdCA9IHRoaXMuZXZlbnRIYW5kZWxlci5ldmVudExpc3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKGV2ZW50TGlzdCkge1xyXG5cclxuICAgIHRoaXMuZXZlbnRMaXN0ID0gZXZlbnRMaXN0O1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiQmxvY2sgMSBoYXNFdmVudCA9IFwiICsgdGhpcy5oYXNFdmVudCk7XHJcbiAgICAgIHRoaXMuaGFzRXZlbnQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFdmVudCA9IGZhbHNlO1xyXG4gICAgICBhbGVydChcIkJsb2NrIDJcIik7XHJcbiAgICB9XHJcbiAgICAvLyBhbGVydChcIkhvbWVDb21wb25lbnQ6IFwiICsgdGhpcy5ldmVudExpc3QubGVuZ3RoKTtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBlZGl0QnRuKGV2ZW50RGF0YTogYW55KSB7XHJcbiAgLy8gYWxlcnQoXCJXT1JLSU5HOiBcIiArIGV2ZW50RGF0YSk7XHJcbiAgLy8gfVxyXG5cclxuICBleHRlbmRUaW1lQnRuKGFyZ3MpIHsvL2RlbGV0ZSBidXR0b24gZm9yIG5vd1xyXG4gICAgdGhpcy5kYXRhYmFzZS5kZWxldGVFdmVudChhcmdzLmtleSk7XHJcbiAgICB0aGlzLmV2ZW50TGlzdCA9IHRoaXMuZGF0YWJhc2UuZ2V0RXZlbnRMaXN0KCk7XHJcbiAgICBpZiAodGhpcy5ldmVudExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmhhc0V2ZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxufS8vZW5kIG9mIGNsYXNzIl19