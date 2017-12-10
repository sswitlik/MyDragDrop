import {Component, OnInit} from '@angular/core';
import {MyDragDropService} from './dragdrop/my-drag-drop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  set: any[] = [];

  constructor(private myDragDropService: MyDragDropService) {
  }

  ngOnInit() {
    this.set = [
      {name: 'aaa'},
      {name: 'bbb'},
      {name: 'ccc'},
      {name: 'ddd'},
      {name: 'eee'},
    ];
  }

  click(arg) {
    console.log(arg);
  }
}
