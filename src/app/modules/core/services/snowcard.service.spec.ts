import { TestBed } from '@angular/core/testing';

import { SnowcardService } from './snowcard.service';

describe('SnowcardService', () => {
  let service: SnowcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnowcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
