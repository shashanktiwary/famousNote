import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
@Injectable()
export class NoteService {
    private root = 'http://localhost:9002/api/';

    constructor(private http: Http) { }

    query(): Observable<Note[]> {
        return this.http.get(this.root + 'notes')
            .map(response => response.json());
    }

    post(note) {
        return this.http.post(this.root + 'notes', note)
            .map(response => response.json());
    }

    update(note) {
        console.log(note);
        return this.http.put(this.root + `notes/${note._id}`, note)
            .map(response => response.json());
    }
}