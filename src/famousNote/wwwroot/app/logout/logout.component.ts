import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    moduleId: module.id,
    template: '<h2> Login out. Please wait.</h2>'
})
export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {
    }

    public ngOnInit() {
        this.authService.startSignoutMainWindow().then(done => {
            this.authService.endSigninMainWindow().then(rsp => {
                this.clearState();
                this.router.navigate(['login']);
            });
        });
    }

    clearState() {
        this.authService.clearState();
    }

    startSignoutMainWindow() {
        this.authService.startSignoutMainWindow();
    }
    endSignoutMainWindow() {
        this.authService.endSigninMainWindow();
    }
}