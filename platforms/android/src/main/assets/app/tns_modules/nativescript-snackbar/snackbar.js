"use strict";
var frame_1 = require('ui/frame');
var color_1 = require('color');
var SnackBar = (function () {
    function SnackBar() {
        this._snackCallback = android.support.design.widget.Snackbar.Callback.extend({
            resolve: null,
            onDismissed: function (snackbar, event) {
                if (event != 1) {
                    this.resolve({
                        command: "Dismiss",
                        reason: _getReason(event),
                        event: event
                    });
                }
            }
        });
    }
    SnackBar.prototype.simple = function (snackText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (snackText) {
                    _this._snackbar = android.support.design.widget.Snackbar.make(frame_1.topmost().currentPage.android, snackText, 3000);
                    var callback = new _this._snackCallback();
                    callback.resolve = resolve;
                    _this._snackbar.setCallback(callback);
                    _this._snackbar.show();
                }
                else {
                    reject('snackText is required');
                }
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    SnackBar.prototype.action = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!options.actionText)
                    options.actionText = "Close";
                if (!options.hideDelay)
                    options.hideDelay = 3000;
                _this._snackbar = android.support.design.widget.Snackbar.make(frame_1.topmost().currentPage.android, options.snackText, options.hideDelay);
                var listener = new android.view.View.OnClickListener({
                    onClick: (function (args) {
                        resolve({
                            command: "Action",
                            reason: _getReason(1),
                            event: args
                        });
                    })
                });
                _this._snackbar.setAction(options.actionText, listener);
                if (options.actionTextColor) {
                    _this._snackbar.setActionTextColor(new color_1.Color(options.actionTextColor).android);
                }
                var callback = new _this._snackCallback();
                callback.resolve = resolve;
                _this._snackbar.setCallback(callback);
                _this._snackbar.show();
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    SnackBar.prototype.dismiss = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._snackbar) {
                try {
                    _this._snackbar.dismiss();
                    setTimeout(function () {
                        resolve({
                            action: "Dismiss",
                            reason: _getReason(3)
                        });
                    }, 200);
                }
                catch (ex) {
                    reject(ex);
                }
            }
            else {
                resolve({
                    action: "None",
                    message: "No actionbar to dismiss"
                });
            }
        });
    };
    return SnackBar;
}());
exports.SnackBar = SnackBar;
function _getReason(value) {
    if (value === 1) {
        return "Action";
    }
    else if (value === 4) {
        return "Consecutive";
    }
    else if (value === 3) {
        return "Manual";
    }
    else if (value === 0) {
        return "Swipe";
    }
    else if (value === 2) {
        return "Timeout";
    }
}
//# sourceMappingURL=snackbar.js.map