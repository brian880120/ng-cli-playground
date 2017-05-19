import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [{
    path: '',
    component: CharactersComponent,
    children: [{
        path: '',
        component: CharacterListComponent
    }, {
        path: ':id',
        component: CharacterComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

export const routedComponents = [CharactersComponent, CharacterComponent, CharacterListComponent];
