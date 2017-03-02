"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var app_routing_1 = require("./app.routing");
var challenges_service_1 = require("./shared/challenges.service");
var angular2_mdl_1 = require("angular2-mdl");
var notes_component_1 = require("./note/notes.component");
var save_note_component_1 = require("./note/save-note.component");
var notes_service_1 = require("./shared/notes.service");
var unauthorized_component_1 = require("./unauthorized/unauthorized.component");
var callback_component_1 = require("./login/callback.component");
var auth_service_1 = require("./shared/auth.service");
var auth_gaurd_service_1 = require("./shared/auth.gaurd.service");
var participate_component_1 = require("./home/participate.component");
var current_participation_component_1 = require("./home/current.participation.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            angular2_mdl_1.MdlModule
        ],
        providers: [
            app_routing_1.appRoutingProviders,
            challenges_service_1.ChallengesService,
            notes_service_1.NoteService,
            auth_service_1.AuthService,
            auth_gaurd_service_1.AuthGuardService
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            notes_component_1.Notes,
            save_note_component_1.SaveNote,
            login_component_1.LoginComponent,
            logout_component_1.LogoutComponent,
            unauthorized_component_1.UnauthorizedComponent,
            callback_component_1.CallbackComponent,
            participate_component_1.ParticipateDialogComponent,
            current_participation_component_1.CurrentParticipationComponent
        ],
        entryComponents: [participate_component_1.ParticipateDialogComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map