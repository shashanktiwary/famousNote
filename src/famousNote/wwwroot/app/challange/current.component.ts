import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../shared/challenges.service'
import { AuthService } from '../shared/auth.service';
import { MdlDialogService, MdlDialogReference } from 'angular2-mdl';
import { ParticipateDialogComponent } from './participate.component';

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
}