import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  set: any[] = [];

  ngOnInit() {
    this.set = [
      {name: 'aaa'},
      {name: 'bbb'},
      {name: 'ccc'},
      {name: 'ddd'},
      {name: 'eee'},
    ];
  }
}
