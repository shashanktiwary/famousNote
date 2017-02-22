import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../shared/challenges.service'

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    characters: string[];
    openedChallenges: any;
    closedChallenges : any;
    currentChallenges: any;
    tabChanged (event):any {
        console.log('clicked');
    }

    constructor(private challengesService: ChallengesService) { }

    ngOnInit() {
        
        this.challengesService.getCurrentChallanges()
            .subscribe(challenges => this.currentChallenges = challenges);
    }
}