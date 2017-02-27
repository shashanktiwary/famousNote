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
var challenges_service_1 = require("../shared/challenges.service");
var auth_service_1 = require("../shared/auth.service");
var HomeComponent = (function () {
    function HomeComponent(challengesService, authService) {
        this.challengesService = challengesService;
        this.authService = authService;
    }
    HomeComponent.prototype.tabChanged = function (event) {
        console.log('clicked');
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(function (user) {
            _this._user = user;
        });
        this.challengesService.getCurrentChallanges()
            .subscribe(function (challanges) {
            _this.currentChallanges = challanges;
            console.log(challanges);
        });
    };
    HomeComponent.prototype.clearState = function () {
        this.authService.clearState();
    };
    HomeComponent.prototype.getUser = function () {
        this.authService.getUser();
    };
    HomeComponent.prototype.removeUser = function () {
        this.authService.removeUser();
    };
    HomeComponent.prototype.startSigninMainWindow = function () {
        this.authService.startSigninMainWindow();
    };
    HomeComponent.prototype.endSigninMainWindow = function () {
        this.authService.endSigninMainWindow();
    };
    HomeComponent.prototype.startSignoutMainWindow = function () {
        this.authService.startSignoutMainWindow();
    };
    HomeComponent.prototype.endSignoutMainWindow = function () {
        this.authService.endSigninMainWindow();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.loadedUserSub.unsubscribe()) {
            this.loadedUserSub.unsubscribe();
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [challenges_service_1.ChallengesService, auth_service_1.AuthService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map