"use strict";
var core_1 = require("@angular/core");
var event_handeler_provider_1 = require("../../shared/providers/event-handeler/event-handeler.provider");
var page_1 = require('ui/page');
var fs = require("file-system");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("LineProgressBar", function () { return require("nativescript-progressbar").LineProgressBar; });
element_registry_1.registerElement("fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var HomeComponent = (function () {
    function HomeComponent(page, eventHandeler) {
        this.page = page;
        this.eventHandeler = eventHandeler;
        this.hasEvent = false;
        this.eventList = [];
        this.devMode = true;
        this.totalProgress = 90;
        this.progressValue = 30;
        this.saveData();
        this.readData();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.eventList = this.eventHandeler.eventList;
        if (this.eventList.length > 0) {
            this.hasEvent = true;
        }
        else {
            this.hasEvent = false;
        }
        var documentsFolder = fs.knownFolders.documents();
        var currentAppFolder = fs.knownFolders.currentApp();
        var tempFolder = fs.knownFolders.temp();
        var testPath = "///test.txt";
        // Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
        this.documents = fs.path.normalize(documentsFolder.path + testPath);
        this.currentApp = fs.path.normalize(currentAppFolder.path + testPath);
        this.temp = fs.path.normalize(tempFolder.path + testPath);
    }; //end if ngOnInit()
    HomeComponent.prototype.saveData = function () {
        var documentsFolder = fs.knownFolders.documents();
        var path = fs.path.join(documentsFolder.path, "FileFromPath.txt");
        var file = fs.File.fromPath(path);
        // Writing text to the file.
        // file.write(this.eventHandeler.eventList)
        //   .then(result => {
        //     // Succeeded writing to the file.
        //     file.readText().then(res => {
        //       // Succeeded read from file.
        //       // this.isContentSaved = true;
        //       // this.savedContent = res;
        //       console.log("File content: " + res);
        //     });
        //   }).catch(err => {
        //     console.log(err.stack);
        //   });;
    };
    HomeComponent.prototype.readData = function () {
        var documentsFolder = fs.knownFolders.documents();
        var path = fs.path.join(documentsFolder.path, "FileFromPath.txt");
        var file = fs.File.fromPath(path);
        console.log("File Read Data: " + file.readText());
    };
    HomeComponent.prototype.eventListTap = function () {
        // alert("Event Tapped");
        alert("Tapped");
    };
    HomeComponent.prototype.devTest = function () {
        alert("Dev Test Method");
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
    HomeComponent.prototype.testBtn = function () {
        console.log("Fab Tapped");
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
        __metadata('design:paramtypes', [page_1.Page, event_handeler_provider_1.EventHandeler])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent; //end of class
//# sourceMappingURL=home.component.js.map