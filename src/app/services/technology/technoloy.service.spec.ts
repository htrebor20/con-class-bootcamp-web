import { TestBed } from '@angular/core/testing';

import { TechnoloyService } from './technoloy.service';

describe('TechnoloyServiceService', () => {
  let service: TechnoloyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnoloyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
