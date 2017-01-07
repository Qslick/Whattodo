"use strict";
var EventProvider = (function () {
    function EventProvider() {
        this.isInstantiated = false;
        this.event = [];
    }
    EventProvider.prototype.newEvent = function (title, description, priority, startTime, endTime) {
        // if (!this.isInstantiated) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isInstantiated = true;
        // }//end instantiation check
    };
    // -----Getters and Setters-----
    EventProvider.prototype.setTitle = function (title) {
        this.title = title;
    };
    EventProvider.prototype.setDescription = function (description) {
        this.description = description;
    };
    EventProvider.prototype.setPriority = function (priority) {
        this.priority = priority;
    };
    EventProvider.prototype.setStartTime = function (startTime) {
        this.startTime = startTime;
    };
    EventProvider.prototype.setEndTime = function (endTime) {
        this.endTime = endTime;
    };
    EventProvider.prototype.getTitle = function () {
        return this.title;
        //testing
    };
    EventProvider.prototype.getDescription = function () {
        return this.description;
    };
    EventProvider.prototype.getPriority = function () {
        return this.priority;
    };
    EventProvider.prototype.getStartTime = function () {
        return this.startTime;
    };
    EventProvider.prototype.getEndTime = function () {
        return this.endTime;
    };
    EventProvider.prototype.getAll = function () {
        return ("Title: " + this.title
            + "\nDescription: " + this.description
            + "\nPriority: " + this.priority
            + "\nStart Time: " + this.startTime
            + "\nEnd Time: " + this.endTime);
    };
    return EventProvider;
}());
exports.EventProvider = EventProvider;
//# sourceMappingURL=event.provider.js.map