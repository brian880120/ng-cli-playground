import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { CoreModule } from '../core/core.module';

import { WikipediaRoutingModule, routedComponents } from './wikipedia-routing.module';
import { WikipediaService } from './wikipedia.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        CoreModule,
        WikipediaRoutingModule
    ],
    declarations: [routedComponents],
    providers: [WikipediaService]
})
export class WikipediaModule { }
