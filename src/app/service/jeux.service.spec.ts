import { TestBed } from '@angular/core/testing';

import { JeuxService } from './jeux.service';

describe('JeuxService', () => {
  let service: JeuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
