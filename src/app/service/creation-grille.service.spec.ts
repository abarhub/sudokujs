import { TestBed } from '@angular/core/testing';

import { CreationGrilleService } from './creation-grille.service';

import { NiveauDifficulteEnum } from '../models/niveau-difficulte.enum';

describe('CreationGrilleService', () => {
  let creationGrilleService: CreationGrilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    creationGrilleService = TestBed.inject(CreationGrilleService);
  });

  it('should be created', () => {
    expect(creationGrilleService).toBeTruthy();
  });

  it('should created new grid easy', () => {
    const grille = creationGrilleService.nouvelleGrille(
      NiveauDifficulteEnum.FACILE
    );
    expect(grille).toBeTruthy();
  });

  it('should created new grid moderate', () => {
    const grille = creationGrilleService.nouvelleGrille(
      NiveauDifficulteEnum.MOYEN
    );
    expect(grille).toBeTruthy();
  });

  it('should created new grid hard', () => {
    const grille = creationGrilleService.nouvelleGrille(
      NiveauDifficulteEnum.DIFFICILE
    );
    expect(grille).toBeTruthy();
  });
});
