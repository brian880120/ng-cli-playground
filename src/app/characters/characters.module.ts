import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { CharactersRoutingModule, routedComponents } from './characters-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdInputModule,
        MdButtonModule,
        CharactersRoutingModule
    ],
    declarations: [routedComponents]
})
export class CharactersModule { }
