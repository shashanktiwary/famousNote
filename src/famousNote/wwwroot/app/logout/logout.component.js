"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../shared/auth.service");
var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.startSignoutMainWindow().then(function (done) {
            _this.authService.endSigninMainWindow().then(function (rsp) {
                _this.clearState();
                _this.router.navigate(['login']);
            });
        });
    };
    LogoutComponent.prototype.clearState = function () {
        this.authService.clearState();
    };
    LogoutComponent.prototype.startSignoutMainWindow = function () {
        this.authService.startSignoutMainWindow();
    };
    LogoutComponent.prototype.endSignoutMainWindow = function () {
        this.authService.endSigninMainWindow();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        template: '<h2> Login out. Please wait.</h2>'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map