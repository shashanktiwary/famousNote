import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class ChallengesService {

    constructor(private http: Http) { }

    getCurrentChallanges() {
        return this.http.get('api/challenges/current')
            .map(response => response.json())
    }

    getOpenChallanges() {
        return this.http.get('api/challenges/opened')
            .map(response => response.json())
    }

    getClosedChallanges() {
        return this.http.get('api/challenges/closed')
            .map(response => response.json())
    }
}