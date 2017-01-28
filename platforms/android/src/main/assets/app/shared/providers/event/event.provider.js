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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFjSTtRQUpRLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLFVBQUssR0FBRyxFQUFFLENBQUM7SUFJbkIsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsS0FBYSxFQUFFLFdBQW1CLEVBQzlDLFFBQWdCLEVBQUUsU0FBaUIsRUFDbkMsT0FBZTtRQUVmLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQiw2QkFBNkI7SUFDakMsQ0FBQztJQUdELGdDQUFnQztJQUN6QixnQ0FBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLFdBQW1CO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTSxtQ0FBVyxHQUFsQixVQUFtQixRQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsU0FBaUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLGtDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQixTQUFTO0lBQ2IsQ0FBQztJQUVNLHNDQUFjLEdBQXJCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLG9DQUFZLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVNLGtDQUFVLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsQ0FDSCxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7Y0FDcEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVc7Y0FDcEMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRO2NBQzlCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTO2NBQ2pDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQztBQXJGWSxxQkFBYSxnQkFxRnpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIEV2ZW50UHJvdmlkZXIge1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwcmlvcml0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IGFueTtcclxuICAgIHByaXZhdGUgZW5kVGltZTogYW55O1xyXG5cclxuICAgIHByaXZhdGUgaXNJbnN0YW50aWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZW1wdHlMaXN0OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBldmVudCA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3RXZlbnQodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgICAgICBwcmlvcml0eTogbnVtYmVyLCBzdGFydFRpbWU6IG51bWJlcixcclxuICAgICAgICBlbmRUaW1lOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmlzSW5zdGFudGlhdGVkKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcclxuICAgICAgICB0aGlzLmlzSW5zdGFudGlhdGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyB9Ly9lbmQgaW5zdGFudGlhdGlvbiBjaGVja1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAtLS0tLUdldHRlcnMgYW5kIFNldHRlcnMtLS0tLVxyXG4gICAgcHVibGljIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFByaW9yaXR5KHByaW9yaXR5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXJ0VGltZShzdGFydFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRFbmRUaW1lKGVuZFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgICAgIC8vdGVzdGluZ1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXJ0VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVuZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFwiVGl0bGU6IFwiICsgdGhpcy50aXRsZVxyXG4gICAgICAgICAgICArIFwiXFxuRGVzY3JpcHRpb246IFwiICsgdGhpcy5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICArIFwiXFxuUHJpb3JpdHk6IFwiICsgdGhpcy5wcmlvcml0eVxyXG4gICAgICAgICAgICArIFwiXFxuU3RhcnQgVGltZTogXCIgKyB0aGlzLnN0YXJ0VGltZVxyXG4gICAgICAgICAgICArIFwiXFxuRW5kIFRpbWU6IFwiICsgdGhpcy5lbmRUaW1lXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIC0tLS0tR2V0dGVycyBhbmQgU2V0dGVycy0tLS0tXHJcbn0iXX0=