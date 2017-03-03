import { Component, OpaqueToken, Inject, HostListener, OnInit } from '@angular/core';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { MdlDialogReference, MdlSnackbarService } from 'angular2-mdl';
import { ChallengesService } from '../shared/challenges.service';

export const challangeId = new OpaqueToken("vote.challangeId");

@Component({
    moduleId: module.id,
    selector: 'vote-dialog',
    templateUrl: 'vote.component.html'
})

export class VoteDialogComponent implements OnInit {

    notes: any;

    constructor(private dialog: MdlDialogReference,
        private challengesService: ChallengesService,
        private mdlSnackbarService: MdlSnackbarService,
        @Inject(challangeId) private challangeId: string) {

        // register a listener if you want to be informed if the dialog is closed.
        this.dialog.onHide().subscribe((user) => {

        });
    }

    ngOnInit() {
        this.getParticipatesNotes();
    }

    getParticipatesNotes() {
        this.notes = this.challengesService.getParticipatesNotes(this.challangeId);
    }

    public voteNote(submitionId: string, note) {
        this.challengesService.vote(submitionId, note._id)
            .subscribe(response => {
                note.voted = true;
            }, err => {

            });
    }

    @HostListener('keydown.esc')
    public onEsc(): void {
        this.dialog.hide();
    }
}