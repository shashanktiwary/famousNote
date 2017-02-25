import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/notes.service';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { MdlSnackbarService } from 'angular2-mdl';

@Component({
    moduleId: module.id,
    templateUrl: 'notes.component.html'
})

export class Notes implements OnInit {
    public notes: Observable<Note[]>;

    constructor(private noteService: NoteService, private mdlSnackbarService: MdlSnackbarService) { }

    ngOnInit() {
        this.notes = this.noteService.query();
    }

    public publishNote(note) {
        note.published = true;
        this.noteService.update(note)
            .subscribe(
            response => {
                this.mdlSnackbarService.showToast("Note published.");
                this.ngOnInit();
            },
            error =>{
                note.published = false;
                console.error(error);
            });
    }
}