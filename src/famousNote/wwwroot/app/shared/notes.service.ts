import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
@Injectable()
export class NoteService {
    private root = 'http://localhost:9002/api/';
    
    constructor(private http: Http) { }

    query() {
        return this.http.get(this.root + 'notes')
            .map(response => response.json());
    }

    post(note): Observable<Note[]> {
        return this.http.post(this.root + 'notes', note)
            .map(response => response.json());
    }
}