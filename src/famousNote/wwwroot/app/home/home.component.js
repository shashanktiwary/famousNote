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
var angular2_mdl_1 = require("angular2-mdl");
var participate_component_1 = require("./participate.component");
var HomeComponent = (function () {
    function HomeComponent(challengesService, authService, dialogService) {
        this.challengesService = challengesService;
        this.authService = authService;
        this.dialogService = dialogService;
    }
    HomeComponent.prototype.tabChanged = function (event) {
        console.log('clicked');
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(function (user) {
            _this._user = user;
        }, function (error) { return console.log(error); });
        this.challengesService.getCurrentChallanges()
            .subscribe(function (challanges) {
            _this.currentChallanges = challanges;
            console.log(challanges);
        });
    };
    HomeComponent.prototype.showDialog = function () {
        var pDialog = this.dialogService.showCustomDialog({
            component: participate_component_1.ParticipateDialogComponent,
            providers: [{ provide: "", useValue: 'Just an example' }],
            isModal: true,
            styles: { 'width': '350px' },
            clickOutsideToClose: true,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        });
        pDialog.subscribe(function (dialogReference) {
            console.log('dialog visible', dialogReference);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html',
        providers: []
    }),
    __metadata("design:paramtypes", [challenges_service_1.ChallengesService, auth_service_1.AuthService, angular2_mdl_1.MdlDialogService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map