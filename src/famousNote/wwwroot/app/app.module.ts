import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing, appRoutingProviders } from './app.routing';
import { ChallengesService } from './shared/challenges.service';
import { MdlModule } from 'angular2-mdl';
import { Notes } from './note/notes.component';
import { SaveNote } from './note/save-note.component';
import { NoteService } from './shared/notes.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MdlModule
    ],
    providers: [
        appRoutingProviders,
        ChallengesService,
        NoteService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        Notes,
        SaveNote
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }