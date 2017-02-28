import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { AuthService } from './auth.service';

@Injectable()
export class NoteService {
    private root = 'http://localhost:9002/api/';

    constructor(private http: Http, private authService: AuthService) { }

    query(): Observable<Note[]> {
        return this.authService.AuthGet(this.root + 'notes')
            .map(response => response.json());

    }

    post(note) {
        return this.authService.AuthPost(this.root + 'notes', note)
            .map(response => response.json());
    }

    update(note) {
        return this.authService.AuthPut(this.root + `notes/${note._id}`, note)
            .map(response => response.json());
    }
}