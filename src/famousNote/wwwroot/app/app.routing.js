"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var notes_component_1 = require("./note/notes.component");
var save_note_component_1 = require("./note/save-note.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'notes', component: notes_component_1.Notes },
    { path: 'notes/save', component: save_note_component_1.SaveNote }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map