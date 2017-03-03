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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var angular2_mdl_1 = require("angular2-mdl");
var notes_service_1 = require("../shared/notes.service");
var challenges_service_1 = require("../shared/challenges.service");
exports.challangeId = new core_1.OpaqueToken("challangeId");
var ParticipateDialogComponent = (function () {
    function ParticipateDialogComponent(dialog, noteService, challengesService, mdlSnackbarService, router, challangeId) {
        this.dialog = dialog;
        this.noteService = noteService;
        this.challengesService = challengesService;
        this.mdlSnackbarService = mdlSnackbarService;
        this.router = router;
        this.challangeId = challangeId;
        this.selectedNotes = new Array();
        // register a listener if you want to be informed if the dialog is closed.
        this.dialog.onHide().subscribe(function (user) {
            console.log('login dialog hidden');
            if (user) {
                console.log('authenticated user', user);
            }
        });
    }
    ParticipateDialogComponent.prototype.ngOnInit = function () {
        this.getPublishedNotes();
    };
    ParticipateDialogComponent.prototype.getPublishedNotes = function () {
        var reqOption = new http_1.RequestOptions();
        reqOption.search = new http_1.URLSearchParams();
        reqOption.search.append("published", "ture");
        this.notes = this.noteService.query(reqOption);
    };
    ParticipateDialogComponent.prototype.noteSelected = function (note, picked) {
        if (picked.checked && this.selectedNotes.length > 3) {
            picked = false;
            return;
        }
        if (!picked.checked && this.selectedNotes.length == 0) {
            return;
        }
        if (picked.checked) {
            this.selectedNotes.push(note);
        }
        if (!picked.checked) {
            this.selectedNotes.splice(this.selectedNotes.indexOf(note), 1);
        }
        console.log(this.selectedNotes);
    };
    ParticipateDialogComponent.prototype.participate = function () {
        var _this = this;
        var challenge = {
            challangeId: this.challangeId,
            notes: this.selectedNotes,
            submitted: true,
        };
        this.challengesService.participate(challenge)
            .subscribe(function (response) {
            _this.dialog.hide();
            _this.mdlSnackbarService.showToast("Submitted");
            _this.router.navigate(["home/current"]);
        }, function (error) {
            _this.mdlSnackbarService.showToast("Unable to participate!");
        });
    };
    ParticipateDialogComponent.prototype.onEsc = function () {
        this.dialog.hide();
    };
    return ParticipateDialogComponent;
}());
__decorate([
    core_1.HostListener('keydown.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParticipateDialogComponent.prototype, "onEsc", null);
ParticipateDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'participate-dialog',
        templateUrl: 'participate.component.html'
    }),
    __param(5, core_1.Inject(exports.challangeId)),
    __metadata("design:paramtypes", [angular2_mdl_1.MdlDialogReference,
        notes_service_1.NoteService,
        challenges_service_1.ChallengesService,
        angular2_mdl_1.MdlSnackbarService,
        router_1.Router, String])
], ParticipateDialogComponent);
exports.ParticipateDialogComponent = ParticipateDialogComponent;
//# sourceMappingURL=participate.component.js.map