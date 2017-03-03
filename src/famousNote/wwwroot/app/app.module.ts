import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing, appRoutingProviders } from './app.routing';
import { ChallengesService } from './shared/challenges.service';
import { MdlModule } from 'angular2-mdl';
import { Notes } from './note/notes.component';
import { SaveNote } from './note/save-note.component';
import { NoteService } from './shared/notes.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CallbackComponent } from './login/callback.component';

import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth.gaurd.service';
import { ParticipateDialogComponent } from './challange/participate.component';
import { CurrentChallangeComponent } from './challange/current.component';
import { VoteDialogComponent } from './challange/vote.component';

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
        NoteService,
        AuthService,
        AuthGuardService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        Notes,
        SaveNote,
        LoginComponent,
        LogoutComponent,
        UnauthorizedComponent,
        CallbackComponent,
        ParticipateDialogComponent,
        VoteDialogComponent,
        CurrentChallangeComponent
    ],
    entryComponents: [ParticipateDialogComponent, VoteDialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }