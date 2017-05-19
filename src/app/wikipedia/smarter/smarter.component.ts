import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WikipediaService } from '../wikipedia.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-smarter',
    templateUrl: './smarter.component.html',
    styleUrls: ['./smarter.component.css']
})
export class SmarterComponent implements OnInit {

    constructor(private wikipediaService: WikipediaService) {}

    ngOnInit() {
    }

}
