import { TestBed, inject } from '@angular/core/testing';

import { MyDragDropService } from './my-drag-drop.service';

describe('MyDragDropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDragDropService]
    });
  });

  it('should be created', inject([MyDragDropService], (service: MyDragDropService) => {
    expect(service).toBeTruthy();
  }));
});
