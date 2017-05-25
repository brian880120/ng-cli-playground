import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CharacterComponent } from './character.component';
import { CharacterService } from '../shared/character.service';
import { ModalService } from '../../core/modal/modal.service';

describe('CharacterComponent', () => {
    let component: CharacterComponent;
    let characterService: CharacterService;
    let fixture: ComponentFixture<CharacterComponent>;
    let debug: DebugElement;
    let elem: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, HttpModule, RouterModule, RouterTestingModule ],
            declarations: [CharacterComponent],
            providers: [CharacterService, ModalService],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(CharacterComponent);
        component = fixture.componentInstance;
        characterService = TestBed.get(CharacterService);
        spyOn(characterService, 'deleteCharacter').and.callThrough();
    });

    it('should delete character', () => {
        component.delete();
        expect(characterService.deleteCharacter).toHaveBeenCalled();
    });
});
