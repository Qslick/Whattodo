"use strict";
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
// var couchbaseModule = require("nativescript-couchbase");
var Database = (function () {
    function Database() {
        this.eventList = [];
        this.lookupDocumentKey = "events"; //defining keys for database, should never change
        console.log("Database: constructor()");
        this.eventDatabase = new nativescript_couchbase_1.Couchbase("event_db"); //initalizing Database
        this.lookupDatabase = new nativescript_couchbase_1.Couchbase("lookup_db"); //initalizing Database
        this.lookupDocument = this.lookupDatabase.getDocument(this.lookupDocumentKey); //creating single document with unchanging key
        var lookupDoc = {
            index: "-1",
            number_of_events: "-1"
        };
        if (!this.lookupDocument) {
            this.lookupDatabase.createDocument(lookupDoc, this.lookupDocumentKey);
            console.log("initalizing lookupDocument: " + this.lookupDocument);
        }
        this.updateList();
        // this.reset();
    }
    // updateDocument(key, data)
    // createDocument(data, key)
    Database.prototype.reset = function () {
        console.log("DB RESET");
        this.lookupDatabase.updateDocument(this.lookupDocumentKey, {
            index: "-1",
            number_of_events: "-1"
        });
    };
    Database.prototype.newEvent = function (title, description, priority, startTime, endTime) {
        var numOfEvents = this.lookupDatabase.getDocument(this.lookupDocumentKey).index;
        numOfEvents = Number(numOfEvents);
        var adjustedNumEvents = numOfEvents + 2;
        adjustedNumEvents = String(adjustedNumEvents);
        numOfEvents += 1;
        numOfEvents = String(numOfEvents);
        var event = {
            key: numOfEvents,
            title: title,
            description: description,
            priority: priority,
            startTime: startTime,
            endTime: endTime
        };
        this.eventDatabase.createDocument(event, numOfEvents);
        this.lookupDatabase.updateDocument(this.lookupDocumentKey, {
            index: numOfEvents,
            number_of_events: adjustedNumEvents
        });
        this.updateList();
    }; //end of newEvent
    Database.prototype.updateList = function () {
        var index = this.lookupDatabase.getDocument(this.lookupDocumentKey).number_of_events;
        index = Number(index);
        for (var t = 0; t < index; t++) {
            var eventKeys = String(t);
            this.eventList[t] = (this.eventDatabase.getDocument(eventKeys));
        }
    }; //end of updateList
    Database.prototype.getEventList = function () {
        return this.eventList;
    };
    Database = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Database);
    return Database;
}());
exports.Database = Database; //end of CLass
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBR3hFLHVDQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELDJEQUEyRDtBQUczRDtJQVdJO1FBVFEsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU9mLHNCQUFpQixHQUFXLFFBQVEsQ0FBQyxDQUFDLGlEQUFpRDtRQUczRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGtDQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGtDQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFFeEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztRQUc3SCxJQUFJLFNBQVMsR0FBRztZQUNaLEtBQUssRUFBRSxJQUFJO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QixDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixnQkFBZ0I7SUFDcEIsQ0FBQztJQUNELDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFFNUIsd0JBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3ZELEtBQUssRUFBRSxJQUFJO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQVEsR0FBZixVQUFnQixLQUFhLEVBQUUsV0FBbUIsRUFBRSxRQUFnQixFQUFFLFNBQWlCLEVBQUUsT0FBZTtRQUVwRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDaEYsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsQyxJQUFJLGlCQUFpQixHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxDLElBQUksS0FBSyxHQUFHO1lBQ1IsR0FBRyxFQUFFLFdBQVc7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixXQUFXLEVBQUUsV0FBVztZQUN4QixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN2RCxLQUFLLEVBQUUsV0FBVztZQUNsQixnQkFBZ0IsRUFBRSxpQkFBaUI7U0FDdEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBQSxpQkFBaUI7SUFFWCw2QkFBVSxHQUFqQjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFBO1FBQ3BGLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztJQUNMLENBQUMsRUFBQSxtQkFBbUI7SUFFYiwrQkFBWSxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFuRkw7UUFBQyxpQkFBVSxFQUFFOztnQkFBQTtJQXFGYixlQUFDO0FBQUQsQ0FBQyxBQXBGRCxJQW9GQztBQXBGWSxnQkFBUSxXQW9GcEIsQ0FBQSxDQUFBLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRlbGVyIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9ldmVudC1oYW5kZWxlci9ldmVudC1oYW5kZWxlci5wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBFdmVudFByb3ZpZGVyIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9ldmVudC9ldmVudC5wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xyXG4vLyB2YXIgY291Y2hiYXNlTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBldmVudExpc3QgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGV2ZW50RGF0YWJhc2U6IGFueTsgLy9EYXRhYmFzZVxyXG4gICAgcHJpdmF0ZSBsb29rdXBEYXRhYmFzZTogYW55OyAvL0RhdGFiYXNlXHJcblxyXG4gICAgcHJpdmF0ZSBsb29rdXBEb2N1bWVudDogYW55OyAvL0RvY3VtZW50OiBjb250YWlucyB0aGUgY3VycmVudCBpbmRleCBvZiBldmVudHNcclxuXHJcbiAgICBwcml2YXRlIGxvb2t1cERvY3VtZW50S2V5OiBzdHJpbmcgPSBcImV2ZW50c1wiOyAvL2RlZmluaW5nIGtleXMgZm9yIGRhdGFiYXNlLCBzaG91bGQgbmV2ZXIgY2hhbmdlXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZTogY29uc3RydWN0b3IoKVwiKTtcclxuICAgICAgICB0aGlzLmV2ZW50RGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKFwiZXZlbnRfZGJcIik7IC8vaW5pdGFsaXppbmcgRGF0YWJhc2VcclxuICAgICAgICB0aGlzLmxvb2t1cERhdGFiYXNlID0gbmV3IENvdWNoYmFzZShcImxvb2t1cF9kYlwiKTsgLy9pbml0YWxpemluZyBEYXRhYmFzZVxyXG5cclxuICAgICAgICB0aGlzLmxvb2t1cERvY3VtZW50ID0gdGhpcy5sb29rdXBEYXRhYmFzZS5nZXREb2N1bWVudCh0aGlzLmxvb2t1cERvY3VtZW50S2V5KTsgLy9jcmVhdGluZyBzaW5nbGUgZG9jdW1lbnQgd2l0aCB1bmNoYW5naW5nIGtleVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGxvb2t1cERvYyA9IHtcclxuICAgICAgICAgICAgaW5kZXg6IFwiLTFcIixcclxuICAgICAgICAgICAgbnVtYmVyX29mX2V2ZW50czogXCItMVwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxvb2t1cERvY3VtZW50KSB7IC8vaW5pdGFsaXppbmcgZG9jdW1lbnQgaWYgZG9jdW1lbnQgZG9lcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgdGhpcy5sb29rdXBEYXRhYmFzZS5jcmVhdGVEb2N1bWVudChsb29rdXBEb2MsIHRoaXMubG9va3VwRG9jdW1lbnRLZXkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXRhbGl6aW5nIGxvb2t1cERvY3VtZW50OiBcIiArIHRoaXMubG9va3VwRG9jdW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICAvLyB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGVEb2N1bWVudChrZXksIGRhdGEpXHJcbiAgICAvLyBjcmVhdGVEb2N1bWVudChkYXRhLCBrZXkpXHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEQiBSRVNFVFwiKTtcclxuICAgICAgICB0aGlzLmxvb2t1cERhdGFiYXNlLnVwZGF0ZURvY3VtZW50KHRoaXMubG9va3VwRG9jdW1lbnRLZXksIHtcclxuICAgICAgICAgICAgaW5kZXg6IFwiLTFcIixcclxuICAgICAgICAgICAgbnVtYmVyX29mX2V2ZW50czogXCItMVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0V2ZW50KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIsIHN0YXJ0VGltZTogbnVtYmVyLCBlbmRUaW1lOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IG51bU9mRXZlbnRzID0gdGhpcy5sb29rdXBEYXRhYmFzZS5nZXREb2N1bWVudCh0aGlzLmxvb2t1cERvY3VtZW50S2V5KS5pbmRleDtcclxuICAgICAgICBudW1PZkV2ZW50cyA9IE51bWJlcihudW1PZkV2ZW50cyk7XHJcblxyXG4gICAgICAgIGxldCBhZGp1c3RlZE51bUV2ZW50cyA9IG51bU9mRXZlbnRzICsgMjtcclxuXHJcbiAgICAgICAgYWRqdXN0ZWROdW1FdmVudHMgPSBTdHJpbmcoYWRqdXN0ZWROdW1FdmVudHMpO1xyXG5cclxuICAgICAgICBudW1PZkV2ZW50cyArPSAxO1xyXG4gICAgICAgIG51bU9mRXZlbnRzID0gU3RyaW5nKG51bU9mRXZlbnRzKTtcclxuXHJcbiAgICAgICAgbGV0IGV2ZW50ID0geyAvL2NyZWF0ZWluZyBldmVudCBhbmQgc3RvcmVpbmcgaXQncyBrZXkgaW5zaWRlXHJcbiAgICAgICAgICAgIGtleTogbnVtT2ZFdmVudHMsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICAgICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICBlbmRUaW1lOiBlbmRUaW1lXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudERhdGFiYXNlLmNyZWF0ZURvY3VtZW50KGV2ZW50LCBudW1PZkV2ZW50cyk7XHJcbiAgICAgICAgdGhpcy5sb29rdXBEYXRhYmFzZS51cGRhdGVEb2N1bWVudCh0aGlzLmxvb2t1cERvY3VtZW50S2V5LCB7XHJcbiAgICAgICAgICAgIGluZGV4OiBudW1PZkV2ZW50cyxcclxuICAgICAgICAgICAgbnVtYmVyX29mX2V2ZW50czogYWRqdXN0ZWROdW1FdmVudHNcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuICAgIH0vL2VuZCBvZiBuZXdFdmVudFxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVMaXN0KCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubG9va3VwRGF0YWJhc2UuZ2V0RG9jdW1lbnQodGhpcy5sb29rdXBEb2N1bWVudEtleSkubnVtYmVyX29mX2V2ZW50c1xyXG4gICAgICAgIGluZGV4ID0gTnVtYmVyKGluZGV4KTtcclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IGluZGV4OyB0KyspIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50S2V5cyA9IFN0cmluZyh0KTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RbdF0gPSAodGhpcy5ldmVudERhdGFiYXNlLmdldERvY3VtZW50KGV2ZW50S2V5cykpO1xyXG4gICAgICAgIH1cclxuICAgIH0vL2VuZCBvZiB1cGRhdGVMaXN0XHJcblxyXG4gICAgcHVibGljIGdldEV2ZW50TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudExpc3Q7XHJcbiAgICB9XHJcblxyXG59Ly9lbmQgb2YgQ0xhc3MiXX0=