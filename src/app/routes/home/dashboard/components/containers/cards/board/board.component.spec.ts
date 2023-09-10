import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardCardComponent;
  let fixture: ComponentFixture<BoardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardCardComponent]
    });
    fixture = TestBed.createComponent(BoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
