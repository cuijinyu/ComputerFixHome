import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemcmsComponent } from './problemcms.component';

describe('ProblemcmsComponent', () => {
  let component: ProblemcmsComponent;
  let fixture: ComponentFixture<ProblemcmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemcmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
