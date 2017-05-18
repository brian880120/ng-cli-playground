import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Character } from '../characters/shared/character.model';
import { CharacterService } from '../characters/shared/character.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    characters: Observable<Character[]>;

    constructor(
        private characterService: CharacterService
    ) {}

    ngOnInit() {
        this.getCharacters();
    }

    getCharacters() {
        this.characters = this.characterService.getCharacters();
    }

}
