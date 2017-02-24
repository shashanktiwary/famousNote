import { Component } from '@angular/core';
import { NoteService } from '../shared/notes.service';
import { Note } from '../models/note';

@Component({
    moduleId: module.id,
    templateUrl: 'save-note.component.html'
})

export class SaveNote {
    public noteModel = new Note("", "", "", false, false, null, null, null, null);

    constructor(private noteService: NoteService) { }

    onSubmit() {
        (<any>this.noteModel)["time"] = "say";

        console.log(this.noteModel);
        this.noteService.post(this.noteModel)
            .subscribe(
            response => console.log(response),
            error => console.error(error)
            );
    }
}
