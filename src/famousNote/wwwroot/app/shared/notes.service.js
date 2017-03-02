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
var NoteService = (function () {
    function NoteService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.root = 'http://localhost:9002/api/';
    }
    NoteService.prototype.query = function (options) {
        return this.authService.AuthGet(this.root + 'notes', options)
            .map(function (response) { return response.json(); });
    };
    NoteService.prototype.post = function (note, options) {
        return this.authService.AuthPost(this.root + 'notes', note, options)
            .map(function (response) { return response.json(); });
    };
    NoteService.prototype.update = function (note, options) {
        return this.authService.AuthPut(this.root + ("notes/" + note._id), note, options)
            .map(function (response) { return response.json(); });
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, auth_service_1.AuthService])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=notes.service.js.map