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
var note_1 = require("../models/note");
var SaveNote = (function () {
    function SaveNote(noteService) {
        this.noteService = noteService;
        this.noteModel = new note_1.Note("", "", "", false, false, null, null, null, null);
    }
    SaveNote.prototype.onSubmit = function () {
        this.noteModel["time"] = "say";
        console.log(this.noteModel);
        this.noteService.post(this.noteModel)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.error(error); });
    };
    return SaveNote;
}());
SaveNote = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'save-note.component.html'
    }),
    __metadata("design:paramtypes", [notes_service_1.NoteService])
], SaveNote);
exports.SaveNote = SaveNote;
//# sourceMappingURL=save-note.component.js.map