"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ChallengesService = (function () {
    function ChallengesService(http) {
        this.http = http;
        this.root = 'http://localhost:9001/';
    }
    ChallengesService.prototype.getCurrentChallanges = function () {
        return this.http.get(this.root + 'api/challanges')
            .map(function (response) { return response.json(); });
    };
    ChallengesService.prototype.getOpenChallanges = function () {
        return this.http.get('api/challenges/opened')
            .map(function (response) { return response.json(); });
    };
    ChallengesService.prototype.getClosedChallanges = function () {
        return this.http.get('api/challenges/closed')
            .map(function (response) { return response.json(); });
    };
    return ChallengesService;
}());
ChallengesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChallengesService);
exports.ChallengesService = ChallengesService;
//# sourceMappingURL=challenges.service.js.map