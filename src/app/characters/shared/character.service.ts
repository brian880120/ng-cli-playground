import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Character } from './character.model'

let charactersUrl = 'http://localhost:3000/api/characters';

@Injectable()
export class CharacterService {

    constructor(
        private http: Http
    ) { }

    getCharacters(): Observable<Character[]> {
        return this.http
            .get(charactersUrl)
            .map(res => this.extractData<Character[]>(res))
            .catch(this.handleError);
    }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body || {});
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}
