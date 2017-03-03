import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Notes } from './note/notes.component';
import { SaveNote } from './note/save-note.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CallbackComponent } from './login/callback.component';
import { LogoutComponent } from './logout/logout.component';
import { CurrentChallangeComponent } from './challange/current.component';
import { AuthGuardService } from './shared/auth.gaurd.service';
import { AuthService } from './shared/auth.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'logout', component: CallbackComponent },
    { path: 'callback', component: CallbackComponent },
    { path: 'login', component: LoginComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'home/current', component: CurrentChallangeComponent, canActivate: [AuthGuardService] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
    { path: 'notes', component: Notes, canActivate: [AuthGuardService] },
    { path: 'notes/save', component: SaveNote, canActivate: [AuthGuardService] },
];

export const appRoutingProviders: any[] = [
    AuthGuardService,
    AuthService
];

export const routing = RouterModule.forRoot(appRoutes);