import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsByIdComponent } from './search-results-by-id.component';

describe('SearchResultsByIdComponent', () => {
  let component: SearchResultsByIdComponent;
  let fixture: ComponentFixture<SearchResultsByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
