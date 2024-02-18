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

  it('should initialise the grid', () => {
    // ARRANGE
    const tab = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const tab2 = [
      [true, true, false],
      [true, false, false],
      [false, true, true],
    ];
    // ACT
    service.initialisation(tab, tab2);
    // ASSERT
    expect(service.estInitialise()).toBeTrue();
  });

  it('should get the value', () => {
    // ARRANGE
    const tab = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const tab2 = [
      [true, true, false],
      [true, false, false],
      [false, true, true],
    ];
    // ACT
    service.initialisation(tab, tab2);
    // ASSERT
    expect(service.getValue(0, 0)).toEqual(1);
    expect(service.getValue(0, 1)).toEqual(2);
    expect(service.getValue(0, 2)).toEqual(3);
    expect(service.getValue(1, 0)).toEqual(4);
    expect(service.getValue(1, 1)).toEqual(5);
    expect(service.getValue(1, 2)).toEqual(6);
    expect(service.getValue(2, 0)).toEqual(7);
    expect(service.getValue(2, 1)).toEqual(8);
    expect(service.getValue(2, 2)).toEqual(9);
  });

  it('should is visible', () => {
    const tab = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const tab2 = [
      [true, true, false],
      [true, false, false],
      [false, true, true],
    ];
    service.initialisation(tab, tab2);
    expect(service.isVisible(0, 0)).toBeTrue();
    expect(service.isVisible(0, 1)).toBeTrue();
    expect(service.isVisible(0, 2)).toBeFalse();
    expect(service.isVisible(1, 0)).toBeTrue();
    expect(service.isVisible(1, 1)).toBeFalse();
    expect(service.isVisible(1, 2)).toBeFalse();
    expect(service.isVisible(2, 0)).toBeFalse();
    expect(service.isVisible(2, 1)).toBeTrue();
    expect(service.isVisible(2, 2)).toBeTrue();
  });

  it('should being complete with reals values', () => {
    // ARRANGE
    const tab = [
      [8, 3, 5, 4, 1, 6, 9, 2, 7],
      [7, 9, 2, 5, 3, 8, 4, 6, 1],
      [6, 4, 1, 7, 9, 2, 5, 3, 8],
      [2, 5, 6, 1, 7, 9, 3, 8, 4],
      [1, 7, 9, 3, 8, 4, 2, 5, 6],
      [3, 8, 4, 2, 5, 6, 1, 7, 9],
      [5, 6, 3, 9, 2, 7, 8, 1, 4],
      [9, 2, 7, 8, 1, 4, 5, 6, 3],
      [4, 1, 8, 6, 3, 5, 7, 9, 2],
    ];
    const tab2 = [
      [true, true, false, true, false, true, false, true, false],
      [true, false, false, true, false, true, false, true, false],
      [false, true, true, true, false, true, false, true, false],
      [true, true, true, true, false, true, false, true, false],
      [false, true, true, true, false, true, true, false, false],
      [true, false, true, true, false, true, false, true, false],
      [true, true, true, true, false, true, false, true, true],
      [false, false, true, true, false, true, false, true, false],
      [false, true, false, true, false, true, false, false, true],
    ];

    // ACT
    service.initialisation(tab, tab2);

    // ASSERT
    expect(service.estInitialise()).toBeTrue();

    for (let ligne = 0; ligne < 9; ligne++) {
      for (let colonne = 0; colonne < 9; colonne++) {
        expect(service.getValue(ligne, colonne))
          .withContext(`line ${ligne} column ${colonne}`)
          .toEqual(tab[ligne][colonne]);
        expect(service.isVisible(ligne, colonne))
          .withContext(`line ${ligne} column ${colonne}`)
          .toEqual(tab2[ligne][colonne]);
      }
    }
  });
});
