import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikipediaComponent } from './wikipedia.component';
import { BasicComponent } from './basic/basic.component';
import { SmarterComponent } from './smarter/smarter.component';

const routes: Routes = [{
    path: '',
    component: WikipediaComponent,
    children: [{
        path: '',
        component: BasicComponent
    }, {
        path: 'smarter',
        component: SmarterComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WikipediaRoutingModule { }

export const routedComponents = [WikipediaComponent, BasicComponent, SmarterComponent];
