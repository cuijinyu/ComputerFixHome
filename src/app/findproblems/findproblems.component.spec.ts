import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindproblemsComponent } from './findproblems.component';

describe('FindproblemsComponent', () => {
  let component: FindproblemsComponent;
  let fixture: ComponentFixture<FindproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
