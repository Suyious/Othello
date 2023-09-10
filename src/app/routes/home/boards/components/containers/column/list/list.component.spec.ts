import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColumnComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListColumnComponent;
  let fixture: ComponentFixture<ListColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListColumnComponent]
    });
    fixture = TestBed.createComponent(ListColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
