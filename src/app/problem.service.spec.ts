import { TestBed, inject } from '@angular/core/testing';

import { ProblemService } from './problem.service';

describe('ProblemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemService]
    });
  });

  it('should ...', inject([ProblemService], (service: ProblemService) => {
    expect(service).toBeTruthy();
  }));
});
