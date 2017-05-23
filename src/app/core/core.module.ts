import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdTabsModule } from '@angular/material';

import { ModalModule } from './modal/modal.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MdTabsModule,
        ModalModule
    ],
    exports: [
        ModalModule,
        [NavComponent]
    ],
    declarations: [NavComponent]
})
export class CoreModule { }
