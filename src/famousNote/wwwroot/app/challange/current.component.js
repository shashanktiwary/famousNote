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
var vote_component_1 = require("./vote.component");
var CurrentChallangeComponent = (function () {
    function CurrentChallangeComponent(challengesService, authService, dialogService) {
        this.challengesService = challengesService;
        this.authService = authService;
        this.dialogService = dialogService;
    }
    CurrentChallangeComponent.prototype.ngOnInit = function () {
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
    CurrentChallangeComponent.prototype.openVoteDialog = function (challange) {
        this.dialogService.showCustomDialog({
            component: vote_component_1.VoteDialogComponent,
            providers: [{ provide: vote_component_1.challangeId, useValue: challange._id }],
            isModal: true,
            styles: { 'width': '350px' },
            clickOutsideToClose: true,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        });
    };
    return CurrentChallangeComponent;
}());
CurrentChallangeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'current.component.html'
    }),
    __metadata("design:paramtypes", [challenges_service_1.ChallengesService, auth_service_1.AuthService, angular2_mdl_1.MdlDialogService])
], CurrentChallangeComponent);
exports.CurrentChallangeComponent = CurrentChallangeComponent;
//# sourceMappingURL=current.component.js.map