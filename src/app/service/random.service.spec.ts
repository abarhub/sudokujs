import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('show return random number between 0 and 10', () => {
    let n = service.getRandomNumber(10);
    expect(n).toBeGreaterThanOrEqual(0);
    expect(n).toBeLessThan(10);

    for (let i = 0; i < 20; i++) {
      n = service.getRandomNumber(10);
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(10);
    }
  });

  it('show return random number between 15 and 20', () => {
    let n: number;

    for (let i = 0; i < 20; i++) {
      n = service.getRandomInt(15, 20);
      expect(n).toBeGreaterThanOrEqual(15);
      expect(n).toBeLessThan(20);
    }
  });

  it('show return random number between 0 and 40 with seed', () => {
    const tab: number[] = [];

    service.setSeed(10);

    for (let i = 0; i < 20; i++) {
      const n = service.getRandomNumber(40);
      tab.push(n);
    }

    expect(tab.length).toEqual(20);
    expect(tab).toEqual([
      0, 12, 11, 12, 12, 20, 14, 15, 31, 25, 30, 30, 6, 20, 13, 10, 4, 14, 23,
      21,
    ]);
  });

  it('show return random number between 0 and 40 with other seed', () => {
    const tab: number[] = [];

    service.setSeed(15);

    for (let i = 0; i < 20; i++) {
      const n = service.getRandomNumber(40);
      tab.push(n);
    }

    expect(tab.length).toEqual(20);
    expect(tab).toEqual([
      0, 38, 12, 14, 39, 24, 18, 11, 23, 18, 9, 21, 6, 33, 28, 15, 21, 28, 18,
      21,
    ]);
  });
});
