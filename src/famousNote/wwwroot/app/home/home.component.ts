import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../shared/challenges.service'
import { AuthService } from '../shared/auth.service';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
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

    constructor(private challengesService: ChallengesService, private authService: AuthService) { }

    ngOnInit() {
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(user => {
                this._user = user;
            });
        this.challengesService.getCurrentChallanges()
            .subscribe(challanges => {
                this.currentChallanges = challanges;
                console.log(challanges);
            });
    }

    clearState() {
        this.authService.clearState();
    }
    getUser() {
        this.authService.getUser();
    }
    removeUser() {
        this.authService.removeUser();
    }
    startSigninMainWindow() {
        this.authService.startSigninMainWindow();
    }
    endSigninMainWindow() {
        this.authService.endSigninMainWindow();
    }
    startSignoutMainWindow() {
        this.authService.startSignoutMainWindow();
    }
    endSignoutMainWindow() {
        this.authService.endSigninMainWindow();
    }

    ngOnDestroy() {
        if (this.loadedUserSub.unsubscribe()) {
            this.loadedUserSub.unsubscribe();
        }
    }
}