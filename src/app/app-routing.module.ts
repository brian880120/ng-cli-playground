import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'characters',
        loadChildren: 'app/characters/characters.module#CharactersModule'
    },
    {
        path: 'wikipedia',
        loadChildren: 'app/wikipedia/wikipedia.module#WikipediaModule'
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: 'dragdrop',
        loadChildren: 'app/dragdrop/dragdrop.module#DragdropModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
