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
var auth_service_1 = require("./auth.service");
var ChallengesService = (function () {
    function ChallengesService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.root = 'http://localhost:9001/api/';
    }
    ChallengesService.prototype.getCurrentChallanges = function () {
        return this.authService.AuthGet(this.root + 'challanges/current')
            .map(function (response) { return response.json(); });
    };
    ChallengesService.prototype.getOpenChallanges = function () {
        return this.authService.AuthGet(this.root + 'challanges')
            .map(function (response) { return response.json(); });
    };
    ChallengesService.prototype.getClosedChallanges = function () {
        return this.authService.AuthGet(this.root + 'challanges/closed')
            .map(function (response) { return response.json(); });
    };
    ChallengesService.prototype.participate = function (challange) {
        return this.authService.AuthPost(this.root + "submitions", challange)
            .map(function (response) { return response.json(); });
    };
    return ChallengesService;
}());
ChallengesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, auth_service_1.AuthService])
], ChallengesService);
exports.ChallengesService = ChallengesService;
//# sourceMappingURL=challenges.service.js.map