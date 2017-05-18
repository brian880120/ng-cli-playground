import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Character } from './character.model'

let charactersUrl = 'http://192.168.2.14:3000/api/characters';

@Injectable()
export class CharacterService {

    constructor(
        private http: Http
    ) { }

    getCharacters() {
        return <Observable<Character[]>>this.http
            .get(charactersUrl)
            .map(res => this.extractData<Character[]>(res));
    }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body || {});
    }
}
