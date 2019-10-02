import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItenComponent } from './list-iten.component';

describe('ListItenComponent', () => {
  let component: ListItenComponent;
  let fixture: ComponentFixture<ListItenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
