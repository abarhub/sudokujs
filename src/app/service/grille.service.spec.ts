import { TestBed } from '@angular/core/testing';

import { GrilleService } from './grille.service';

describe('GrilleService', () => {
  let service: GrilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
