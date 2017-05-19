import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
    private id: number;
    editCharacter: Character;
    constructor(
        private characterService: CharacterService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.getCharacter();
        });
    }

    private getCharacter() {
        this.characterService.getCharacter(this.id)
            .subscribe(function(character) {
                this.editCharacter = Object.assign({}, character);
            });
    }
}
