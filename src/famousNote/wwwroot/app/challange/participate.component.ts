import { Component, OpaqueToken, Inject, HostListener, OnInit } from '@angular/core';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { MdlDialogReference, MdlSnackbarService } from 'angular2-mdl';
import { NoteService } from '../shared/notes.service';
import { ChallengesService } from '../shared/challenges.service';

export const challangeId = new OpaqueToken("challangeId");

@Component({
    moduleId: module.id,
    selector: 'participate-dialog',
    templateUrl: 'participate.component.html'
})

export class ParticipateDialogComponent implements OnInit {

    notes: any;
    selectedNotes = new Array();
    constructor(private dialog: MdlDialogReference,
        private noteService: NoteService,
        private challengesService: ChallengesService,
        private mdlSnackbarService: MdlSnackbarService,
        private router: Router,
        @Inject(challangeId) private challangeId: string) {

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
    }

    public participate() {
        if (this.selectedNotes.length < 1) {
            this.mdlSnackbarService.showToast("Oops forgot to select a note.");
            return;
        }

        var challenge = {
            challangeId: this.challangeId,
            notes: this.selectedNotes,
            submitted: true,
        };
        this.challengesService.participate(challenge)
            .subscribe(response => {
                this.dialog.hide();
                this.mdlSnackbarService.showToast("Submitted");
                this.router.navigate(["home/current"]);
            }, error => {
                this.mdlSnackbarService.showToast("Unable to participate!");
            });
    }

    @HostListener('keydown.esc')
    public onEsc(): void {
        this.dialog.hide();
    }
}