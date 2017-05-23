import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

    characters: Observable<Character[]>

    constructor(
        private characterService: CharacterService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getCharacters();
    }

    getCharacters() {
        this.characters = this.characterService.getCharacters();
    }

    gotoDetail(character: Character) {
        let link = ['/characters/new'];
        if (character) {
            link = [`/characters/${character._id}`];
        }
        this.router.navigate(link);
    }
}
