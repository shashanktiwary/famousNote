import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { AuthService } from './auth.service';

@Injectable()
export class NoteService {
    private root = 'http://localhost:9002/api/';

    constructor(private http: Http, private authService: AuthService) { }

    query(options?: RequestOptions): Observable<Note[]> {
        return this.authService.AuthGet(this.root + 'notes', options)
            .map(response => response.json());

    }

    post(note, options?: RequestOptions) {
        return this.authService.AuthPost(this.root + 'notes', note, options)
            .map(response => response.json());
    }

    update(note, options?: RequestOptions) {
        return this.authService.AuthPut(this.root + `notes/${note._id}`, note, options)
            .map(response => response.json());
    }
}