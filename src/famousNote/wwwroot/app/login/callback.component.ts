import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'callback.component.html'
})
export class CallbackComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {
    }

    public ngOnInit() {
        this.endSigninMainWindow();
    }

    endSigninMainWindow() {
        this.authService.endSigninMainWindow()
            .then(user => {
                this.authService.loggedIn = true;
                this.authService.currentUser = user;
                this.router.navigate(['home']);
            })
            .catch(error => {
                console.log(error);
            });
    }

}