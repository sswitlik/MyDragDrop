import {Directive, ElementRef, HostListener} from '@angular/core';
import {MyDragDropService} from './my-drag-drop.service';

@Directive({
  selector: '[appMyDraggable]'
})
export class MyDraggableDirective {

  constructor(private el: ElementRef,
              private myDragDropService: MyDragDropService) {
    el.nativeElement.draggable = true;
    el.nativeElement.ondragstart = () => false;
  }

  @HostListener('mousedown') onMouseDown() {
    console.log(this.el);
    console.log('event', event);
    this.myDragDropService.setDraggedElement(event, this.el);
  }

  @HostListener('mouseup') onMouseUp() {
    // console.log(this.el);
    // console.log('event', event);

  }
}
