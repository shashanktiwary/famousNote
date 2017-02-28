import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    private loadedUserSub: any;
    private _user: any;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.loadedUserSub = this.authService.userLoadededEvent
            .subscribe(user => {
                console.log('called app user callback');
                this._user = user;
            },
            error => console.log(error));
    }
}