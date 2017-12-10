import {ElementRef, Injectable} from '@angular/core';
import {DomHandler} from 'primeng/primeng';

@Injectable()
export class MyDragDropService {

  draggedElement: ElementRef;

  container: HTMLDivElement;
  moveX: number;
  moveY: number;

  constructor(private domHandler: DomHandler) {
    this.container = document.createElement('div');
    this.container.style.position = 'absolute';

    document.body.appendChild(this.container);
    document.onmousemove = (event) => this.setPosition(event);
  }

  setDraggedElement(event: Event, element: ElementRef): void {
    const divPosition = element.nativeElement.getBoundingClientRect();
    const mousePosition = {x: event.clientX, y: event.clientY};
    this.moveX = mousePosition.x - divPosition.x;
    this.moveY = mousePosition.y - divPosition.y;

    this.container.style.width = element.nativeElement.offsetWidth + 'px';
    this.container.style.height = element.nativeElement.offsetHeight + 'px';

    this.domHandler.appendChild(element.nativeElement, this.container);
  }

  getContainer() {
    // console.log(this.container);
  }

  setPosition(event) {
    const x = event.clientX - this.moveX;
    const y = event.clientY - this.moveY;
// console.log(x,y);
    this.container.style.top = y + 'px';
    this.container.style.left = x + 'px';
  }
}
