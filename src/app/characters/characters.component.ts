import { Component, OnInit } from '@angular/core';
import { CharacterService } from './shared/character.service';

@Component({
  selector: 'app-characters',
  template: `<router-outlet></router-outlet>`
})
export class CharactersComponent implements OnInit {
    constructor(
        private characterService: CharacterService
    ) {}

    ngOnInit() {
        this.characterService.refreshCharacterList();
    }
}
