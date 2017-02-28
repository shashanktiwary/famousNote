import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'unauthorized.component.html'
})
export class UnauthorizedComponent {
    constructor(private router: Router) { }
    redirectToLogin() {
        this.router.navigate(['login']);
    }
}