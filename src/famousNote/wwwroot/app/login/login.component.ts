import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    loadedUserSub: any;
    _user: any;
    constructor(private authService: AuthService, private router: Router) {
        // if (this.authService.loggedIn) {
        //     this.router.navigate(['home']);
        //     return;
        // }
    }

    public ngOnInit() {
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(user => {
                this._user = user;
                if (user)
                    this.router.navigate(['home']);
            }, error => console.log(error));
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
        this.authService.endSigninMainWindow()
            .then(user => {
                this.router.navigate(['home']);
            })
            .catch(error => {
                console.log(error);
            });
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