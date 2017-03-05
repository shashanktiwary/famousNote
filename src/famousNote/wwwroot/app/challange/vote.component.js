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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var angular2_mdl_1 = require("angular2-mdl");
var challenges_service_1 = require("../shared/challenges.service");
exports.challangeId = new core_1.OpaqueToken("vote.challangeId");
var VoteDialogComponent = (function () {
    function VoteDialogComponent(dialog, challengesService, mdlSnackbarService, challangeId) {
        this.dialog = dialog;
        this.challengesService = challengesService;
        this.mdlSnackbarService = mdlSnackbarService;
        this.challangeId = challangeId;
        // register a listener if you want to be informed if the dialog is closed.
        this.dialog.onHide().subscribe(function (user) {
        });
    }
    VoteDialogComponent.prototype.ngOnInit = function () {
        this.getParticipatesNotes();
    };
    VoteDialogComponent.prototype.getParticipatesNotes = function () {
        this.notes = this.challengesService.getParticipatesNotes(this.challangeId);
    };
    VoteDialogComponent.prototype.voteNote = function (submitionId, note) {
        this.challengesService.vote(submitionId, note.notes._id)
            .subscribe(function (response) {
            note.voted = true;
        }, function (err) {
        });
    };
    VoteDialogComponent.prototype.onEsc = function () {
        this.dialog.hide();
    };
    return VoteDialogComponent;
}());
__decorate([
    core_1.HostListener('keydown.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VoteDialogComponent.prototype, "onEsc", null);
VoteDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'vote-dialog',
        templateUrl: 'vote.component.html'
    }),
    __param(3, core_1.Inject(exports.challangeId)),
    __metadata("design:paramtypes", [angular2_mdl_1.MdlDialogReference,
        challenges_service_1.ChallengesService,
        angular2_mdl_1.MdlSnackbarService, String])
], VoteDialogComponent);
exports.VoteDialogComponent = VoteDialogComponent;
//# sourceMappingURL=vote.component.js.map