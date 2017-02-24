import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/notes.service';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Component({
    moduleId: module.id,
    templateUrl: 'notes.component.html'
})

export class Notes implements OnInit {
    public notes: Observable<Note[]>

    constructor(private noteService: NoteService) { }
    
    ngOnInit() {
        this.notes = this.noteService.query();
    }
}