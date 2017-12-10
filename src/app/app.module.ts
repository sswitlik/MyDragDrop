import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyDraggableDirective } from './dragdrop/my-draggable.directive';
import { MyDragDropService } from './dragdrop/my-drag-drop.service';
import {DomHandler} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MyDraggableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyDragDropService,
    DomHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
