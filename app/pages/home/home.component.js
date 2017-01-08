"use strict";
var core_1 = require('@angular/core');
var event_handeler_provider_1 = require("../../shared/providers/event-handeler/event-handeler.provider");
var page_1 = require('ui/page');
var element_registry_1 = require('nativescript-angular/element-registry');
element_registry_1.registerElement('Card', function () { return require('nativescript-cardview').CardView; });
var HomeComponent = (function () {
    function HomeComponent(page, eventHandeler) {
        this.page = page;
        this.eventHandeler = eventHandeler;
        this.hasEvent = false;
        this.eventList = [];
        this.devMode = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.eventList = this.eventHandeler.eventList;
        if (this.eventList.length > 0) {
            this.hasEvent = true;
        }
        else {
            this.hasEvent = false;
        }
    };
    HomeComponent.prototype.eventListTap = function (event) {
        // alert("Event Tapped");
        alert("event");
    };
    HomeComponent.prototype.devTest = function () {
        if (this.eventList.length > 0) {
            alert("Item Array Length: " + this.eventList.length + "\n" +
                this.eventList[this.eventList.length - 1].getTitle());
        }
        else {
            alert("Empty List");
        }
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
    HomeComponent.prototype.addEventBtn = function () {
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./pages/home/home.html",
            styleUrls: ["pages/home/home.css"],
        }), 
        __metadata('design:paramtypes', [page_1.Page, event_handeler_provider_1.EventHandeler])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent; //end of class
//# sourceMappingURL=home.component.js.map