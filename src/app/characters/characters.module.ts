import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule } from '@angular/material';
import { CoreModule } from '../core/core.module';

import { CharactersRoutingModule, routedComponents } from './characters-routing.module';
import { SpyDirective } from './shared/spy.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdInputModule,
        MdButtonModule,
        CoreModule,
        CharactersRoutingModule
    ],
    declarations: [routedComponents, SpyDirective]
})
export class CharactersModule { }
