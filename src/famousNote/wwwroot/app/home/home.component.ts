import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../shared/challenges.service'
import { AuthService } from '../shared/auth.service';
import { MdlDialogService, MdlDialogReference } from 'angular2-mdl';
import { ParticipateDialogComponent, challangeId } from '../challange/participate.component';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: []
})
export class HomeComponent implements OnInit {
    characters: string[];
    openedChallanges: any;
    closedChallanges: any;
    currentChallanges: any;

    _user: any;
    loadedUserSub: any;

    tabChanged(event): any {
        console.log('clicked');
    }

    constructor(private challengesService: ChallengesService, private authService: AuthService, private dialogService: MdlDialogService) { }

    ngOnInit() {
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(user => {
                this._user = user;
            },
            error => console.log(error));

        this.challengesService.getOpenChallanges()
            .subscribe(challanges => {
                this.currentChallanges = challanges;
                console.log(challanges);
            });
    }

    public showDialog(challange) {

        let pDialog = this.dialogService.showCustomDialog({
            component: ParticipateDialogComponent,
            providers: [{ provide: challangeId, useValue: challange._id }],
            isModal: true,
            styles: { 'width': '350px', 'max-height':'450px' },
            clickOutsideToClose: true,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        });
        pDialog.subscribe((dialogReference: MdlDialogReference) => {
            console.log('dialog visible', dialogReference);
        });
    }
}