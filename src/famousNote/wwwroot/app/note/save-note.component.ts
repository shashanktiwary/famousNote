import { Component } from '@angular/core';
import { NoteService } from '../shared/notes.service';
import { Note } from '../models/note';
import { MdlSnackbarService } from 'angular2-mdl';

@Component({
    moduleId: module.id,
    templateUrl: 'save-note.component.html'
})

export class SaveNote {
    public noteModel = new Note("", "", "", false, false, null, null, null, null);

    constructor(private noteService: NoteService, private mdlSnackbarService: MdlSnackbarService) { }

    onSubmit() {
        (<any>this.noteModel)["time"] = "say";

        console.log(this.noteModel);
        this.noteService.post(this.noteModel)
            .subscribe(
            response => {
                this.mdlSnackbarService.showToast("Note saved.");
                this.noteModel = new Note("", "", "", false, false, null, null, null, null);
            },
            error => console.error(error)
            );
    }


}
