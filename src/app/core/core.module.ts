import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdTabsModule } from '@angular/material';

import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MdTabsModule
    ],
    exports: [
        [NavComponent]
    ],
    declarations: [NavComponent]
})
export class CoreModule { }
