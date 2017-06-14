import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsolveComponent } from './problemsolve.component';

describe('ProblemsolveComponent', () => {
  let component: ProblemsolveComponent;
  let fixture: ComponentFixture<ProblemsolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
