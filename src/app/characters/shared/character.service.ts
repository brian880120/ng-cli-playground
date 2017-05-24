import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { Character } from './character.model'
import * as _ from 'lodash';

let charactersUrl = 'http://localhost:3000/api/characters';

@Injectable()
export class CharacterService {

    cachedCharacters: Character[];

    characterListSubject = new Subject<Character[]>();

    characterList = this.characterListSubject.asObservable();

    constructor(
        private http: Http
    ) { }

    refreshCharacterList() {
        this.getCharacters().subscribe(characters => {
            this.characterListSubject.next(characters);
        });
    }

    addCharacter(character: Character): Observable<Character> {
        character._id = this.getNextId();
        return this.http.post(charactersUrl, character)
            .map(res => res.json().data);
    }

    getCharacters(): Observable<Character[]> {
        return this.http
            .get(charactersUrl)
            .map(res => {
                this.cachedCharacters = this.extractData<Character[]>(res);
                return this.cachedCharacters;
            });
    }

    getCharacter(id: number): Observable<Character> {
        return this.http.get(`${charactersUrl}/${id}`)
            .map(res => <Character>(res.json()));
    }

    updateCharacter(character: Character): Observable<Character> {
        return this.http
            .patch(`${charactersUrl}/${character._id}`, {'name': character.name, 'side': character.side})
            .map(res => this.extractData<Character>(res));
    }

    deleteCharacter(character: Character): Observable<Character> {
        return this.http.delete(`${charactersUrl}/${character._id}`)
            .map(res => this.extractData<Character>(res));
    }

    private getNextId() {
        if (this.cachedCharacters && !_.isEmpty(this.cachedCharacters)) {
            return _.maxBy(this.cachedCharacters, function(char) {
                return char._id;
            })._id + 1;
        } else {
            return 1;
        }
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
