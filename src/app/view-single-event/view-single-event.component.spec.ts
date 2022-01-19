import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleEventComponent } from './view-single-event.component';

describe('ViewSingleEventComponent', () => {
  let component: ViewSingleEventComponent;
  let fixture: ComponentFixture<ViewSingleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
