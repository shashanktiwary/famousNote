import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { AuthService } from './auth.service';

@Injectable()
export class ChallengesService {

    private root = 'http://localhost:9001/api/'
    constructor(private http: Http, private authService: AuthService) { }

    getCurrentChallanges() {
        return this.authService.AuthGet(this.root + 'challanges')
            .map(response => response.json());
    }

    getOpenChallanges() {
        return this.authService.AuthGet(this.root + 'challenges/opened')
            .map(response => response.json());
    }

    getClosedChallanges() {
        return this.authService.AuthGet(this.root + 'challenges/closed')
            .map(response => response.json());
    }
}