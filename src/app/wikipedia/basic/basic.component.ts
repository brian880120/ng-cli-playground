import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

    items: Observable<string[]>;

    constructor(private wikipediaService: WikipediaService) {}

    search(term: string) {
        this.items = this.wikipediaService.search(term);
    }

    ngOnInit() {}

}
