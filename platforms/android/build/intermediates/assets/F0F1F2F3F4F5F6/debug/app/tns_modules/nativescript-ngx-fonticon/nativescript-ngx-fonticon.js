"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var fonticon_pipe_1 = require('./src/app/pipes/fonticon.pipe');
var fonticon_service_1 = require('./src/app/services/fonticon.service');
// for manual imports
__export(require('./src/app/pipes/fonticon.pipe'));
__export(require('./src/app/services/fonticon.service'));
var PIPES = [
    fonticon_pipe_1.TNSFontIconPipe,
    fonticon_pipe_1.TNSFontIconPurePipe
];
var TNSFontIconModule = (function () {
    function TNSFontIconModule() {
    }
    TNSFontIconModule.forRoot = function (providedConfig) {
        fonticon_service_1.TNSFontIconService.config = providedConfig;
        return {
            ngModule: TNSFontIconModule,
            providers: [fonticon_service_1.TNSFontIconService]
        };
    };
    TNSFontIconModule = __decorate([
        core_1.NgModule({
            declarations: PIPES,
            exports: PIPES
        }), 
        __metadata('design:paramtypes', [])
    ], TNSFontIconModule);
    return TNSFontIconModule;
}());
exports.TNSFontIconModule = TNSFontIconModule;
//# sourceMappingURL=nativescript-ngx-fonticon.js.map