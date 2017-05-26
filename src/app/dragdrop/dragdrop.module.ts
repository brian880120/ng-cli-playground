import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DndModule } from 'ng2-dnd';
import { DragdropRoutingModule, routedComponents } from './dragdrop-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        DndModule.forRoot(),
        DragdropRoutingModule
    ],
    declarations: [routedComponents]
})
export class DragdropModule { }
