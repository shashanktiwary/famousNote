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
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // if (this.authService.loggedIn) {
        //     this.router.navigate(['home']);
        //     return;
        // }
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(function (user) {
            _this._user = user;
            if (user)
                _this.router.navigate(['home']);
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.clearState = function () {
        this.authService.clearState();
    };
    LoginComponent.prototype.getUser = function () {
        this.authService.getUser();
    };
    LoginComponent.prototype.removeUser = function () {
        this.authService.removeUser();
    };
    LoginComponent.prototype.startSigninMainWindow = function () {
        this.authService.startSigninMainWindow();
    };
    LoginComponent.prototype.endSigninMainWindow = function () {
        var _this = this;
        this.authService.endSigninMainWindow()
            .then(function (user) {
            _this.router.navigate(['home']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.startSignoutMainWindow = function () {
        this.authService.startSignoutMainWindow();
    };
    LoginComponent.prototype.endSignoutMainWindow = function () {
        this.authService.endSigninMainWindow();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loadedUserSub.unsubscribe()) {
            this.loadedUserSub.unsubscribe();
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map