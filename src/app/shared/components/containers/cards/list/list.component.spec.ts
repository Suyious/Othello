import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardComponent]
    });
    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
