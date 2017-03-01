"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var notes_component_1 = require("./note/notes.component");
var save_note_component_1 = require("./note/save-note.component");
var unauthorized_component_1 = require("./unauthorized/unauthorized.component");
var callback_component_1 = require("./login/callback.component");
var auth_gaurd_service_1 = require("./shared/auth.gaurd.service");
var auth_service_1 = require("./shared/auth.service");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_gaurd_service_1.AuthGuardService] },
    { path: 'logout', component: callback_component_1.CallbackComponent },
    { path: 'callback', component: callback_component_1.CallbackComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'unauthorized', component: unauthorized_component_1.UnauthorizedComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_gaurd_service_1.AuthGuardService] },
    { path: 'about', component: about_component_1.AboutComponent, canActivate: [auth_gaurd_service_1.AuthGuardService] },
    { path: 'notes', component: notes_component_1.Notes, canActivate: [auth_gaurd_service_1.AuthGuardService] },
    { path: 'notes/save', component: save_note_component_1.SaveNote, canActivate: [auth_gaurd_service_1.AuthGuardService] },
];
exports.appRoutingProviders = [
    auth_gaurd_service_1.AuthGuardService,
    auth_service_1.AuthService
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map