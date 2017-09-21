import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsearchComponent } from './listsearch.component';

describe('ListsearchComponent', () => {
  let component: ListsearchComponent;
  let fixture: ComponentFixture<ListsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
