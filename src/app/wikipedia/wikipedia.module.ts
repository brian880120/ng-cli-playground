import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { WikipediaRoutingModule, routedComponents } from './wikipedia-routing.module';
import { WikipediaService } from './wikipedia.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        WikipediaRoutingModule
    ],
    declarations: [routedComponents],
    providers: [WikipediaService]
})
export class WikipediaModule { }
