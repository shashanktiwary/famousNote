import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../shared/challenges.service'

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    characters: string[];
    openedChallanges: any;
    closedChallanges : any;
    currentChallanges: any;
    tabChanged (event):any {
        console.log('clicked');
    }

    constructor(private challengesService: ChallengesService) { }

    ngOnInit() {
        
        this.challengesService.getCurrentChallanges()
            .subscribe(challanges => {
                this.currentChallanges = challanges;
                console.log(challanges);
            });
    }
}