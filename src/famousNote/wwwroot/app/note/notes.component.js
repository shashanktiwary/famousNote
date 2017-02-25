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
var notes_service_1 = require("../shared/notes.service");
var angular2_mdl_1 = require("angular2-mdl");
var Notes = (function () {
    function Notes(noteService, mdlSnackbarService) {
        this.noteService = noteService;
        this.mdlSnackbarService = mdlSnackbarService;
    }
    Notes.prototype.ngOnInit = function () {
        this.notes = this.noteService.query();
    };
    Notes.prototype.publishNote = function (note) {
        var _this = this;
        note.published = true;
        this.noteService.update(note)
            .subscribe(function (response) {
            _this.mdlSnackbarService.showToast("Note published.");
            _this.ngOnInit();
        }, function (error) {
            note.published = false;
            console.error(error);
        });
    };
    return Notes;
}());
Notes = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'notes.component.html'
    }),
    __metadata("design:paramtypes", [notes_service_1.NoteService, angular2_mdl_1.MdlSnackbarService])
], Notes);
exports.Notes = Notes;
//# sourceMappingURL=notes.component.js.map