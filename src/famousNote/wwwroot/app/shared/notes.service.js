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
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
        this.root = 'http://localhost:9002/api/';
    }
    NoteService.prototype.query = function () {
        return this.http.get(this.root + 'notes')
            .map(function (response) { return response.json(); });
    };
    NoteService.prototype.post = function (note) {
        return this.http.post(this.root + 'notes', note)
            .map(function (response) { return response.json(); });
    };
    NoteService.prototype.update = function (note) {
        console.log(note);
        return this.http.put(this.root + ("notes/" + note._id), note)
            .map(function (response) { return response.json(); });
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=notes.service.js.map