import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tiles: any[];

    ngOnInit() {
        this.tiles = [
            {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
            {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
            {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
            {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
            {text: 'Five', cols: 1, rows: 1, color: 'lightpink'},
            {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
            {text: 'Seven', cols: 1, rows: 1, color: 'lightpink'},
            {text: 'Eight', cols: 1, rows: 1, color: '#DDBDF1'},
        ];
    }

}
