import { Component, HostListener, OnInit } from '@angular/core';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { MdlDialogReference } from 'angular2-mdl';
import { NoteService } from '../shared/notes.service';

@Component({
    moduleId: module.id,
    selector: 'participate-dialog',
    templateUrl: 'participate.component.html'
})
export class ParticipateDialogComponent implements OnInit {

    notes: any;
    constructor(private dialog: MdlDialogReference, private noteService: NoteService) {

        // register a listener if you want to be informed if the dialog is closed.
        this.dialog.onHide().subscribe((user) => {
            console.log('login dialog hidden');
            if (user) {
                console.log('authenticated user', user);
            }
        });
    }

    ngOnInit() {
        this.getPublishedNotes();
    }

    getPublishedNotes() {
        let reqOption = new RequestOptions();
        reqOption.search = new URLSearchParams();
        reqOption.search.append("published", "ture");

        this.notes = this.noteService.query(reqOption);
    }

    public noteSelected(note, picked) {
        console.log(note, picked);
    }

    public login() {
        console.log('login', this.dialog);
        this.dialog.hide();
    }

    @HostListener('keydown.esc')
    public onEsc(): void {
        this.dialog.hide();
    }
}