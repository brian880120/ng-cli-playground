import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragdropComponent } from './dragdrop.component';

const routes: Routes = [{
    path: '',
    component: DragdropComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DragdropRoutingModule { }

export const routedComponents = [DragdropComponent];
