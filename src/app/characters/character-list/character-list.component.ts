import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {

    characters: Character[];
    newCharacter: Character;
    characterListSubscription: Subscription;

    constructor(
        private characterService: CharacterService,
        private router: Router
    ) {}

    ngOnInit() {
        this.newCharacter = <Character>{name: '', side: ''};
        this.characterService.refreshCharacterList();
        this.characterListSubscription = this.characterService.characterList
            .subscribe(characters => this.characters = characters);
    }

    ngOnDestroy() {
        this.characterListSubscription.unsubscribe();
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
