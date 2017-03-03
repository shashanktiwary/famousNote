import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../shared/challenges.service'
import { AuthService } from '../shared/auth.service';
import { MdlDialogService, MdlDialogReference } from 'angular2-mdl';
import { ParticipateDialogComponent } from './participate.component';
import { VoteDialogComponent, challangeId } from './vote.component';

@Component({
    moduleId: module.id,
    templateUrl: 'current.component.html'
})
export class CurrentChallangeComponent implements OnInit {
    currentChallanges: any;
    _user: any;
    loadedUserSub: any;

    constructor(private challengesService: ChallengesService, private authService: AuthService, private dialogService: MdlDialogService) { }

    ngOnInit() {
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(user => {
                this._user = user;
            },
            error => console.log(error));

        this.challengesService.getCurrentChallanges()
            .subscribe(challanges => {
                this.currentChallanges = challanges;
                console.log(challanges);
            });
    }

    openVoteDialog(challange) {
        this.dialogService.showCustomDialog({
            component: VoteDialogComponent,
            providers: [{ provide: challangeId, useValue: challange._id }],
            isModal: true,
            styles: { 'width': '350px' },
            clickOutsideToClose: true,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        });
    }
}