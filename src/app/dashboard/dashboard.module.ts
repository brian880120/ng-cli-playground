import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MdGridListModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        DashboardRoutingModule,
        MdGridListModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
