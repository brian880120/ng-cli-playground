import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

import { ModalService } from '../../core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
    private id: number;
    editCharacter: Character = <Character>{};
    backupCharacter: Character = <Character>{};
    constructor(
        private characterService: CharacterService,
        private modalService: ModalService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .do(id => this.id = +id)
            .subscribe(id => this.getCharacter());
    }

    save() {
        this.characterService.updateCharacter(this.editCharacter)
            .subscribe(() => {
                this.characterService.refreshCharacterList();
                this.gotoCharacters();
            });
    }

    delete() {
        // this.modalService.activate('Do you want to delete').then(responseOk => {
        //     console.log(responseOk);
        // });
        this.characterService.deleteCharacter(this.editCharacter)
            .subscribe(() => {
                this.characterService.refreshCharacterList();
                this.gotoCharacters();
            });
    }

    cancel() {
        this.editCharacter = Object.assign({}, this.backupCharacter);
        this.gotoCharacters();
    }

    private getCharacter() {
        this.characterService.getCharacter(this.id)
            .subscribe(character => {
                this.editCharacter = Object.assign({}, character);
                this.backupCharacter = Object.assign({}, character);
            });
    }

    private gotoCharacters() {
        this.router.navigate(['/characters']);
    }
}
