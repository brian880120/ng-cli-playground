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

    characters: Character[];
    newCharacter: Character;

    constructor(
        private characterService: CharacterService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getCharacters();
        this.newCharacter = <Character>{name: '', side: ''};
    }

    getCharacters() {
        this.characterService.characterListSubject
            .subscribe(characters => {
                this.characters = characters;
            });
    }

    gotoDetail(character: Character) {
        let link = ['/characters', character._id];
        this.router.navigate(link);
    }

    addCharacter() {
        this.characterService.addCharacter(this.newCharacter)
            .subscribe(() => {
                this.characterService.refreshCharacterList();
                this.newCharacter = <Character>{name: '', side: ''};
            });
    }
}
