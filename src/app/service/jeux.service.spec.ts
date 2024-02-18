import { TestBed, waitForAsync } from '@angular/core/testing';

import { JeuxService } from './jeux.service';
import { NiveauDifficulteEnum } from '../models/niveau-difficulte.enum';
import { EvenementGrille } from '../models/evenement-grille';
import { TypeEvenementEnum } from '../models/type-evenement.enum';
import { Grille } from '../models/grille';
import { SelectionChiffre } from '../models/selection-chiffre';

describe('JeuxService', () => {
  let service: JeuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should genere new grid', waitForAsync(() => {
    let evtGrille: EvenementGrille;

    service.evenementGrille$.subscribe({
      next: evt => {
        evtGrille = evt;
      },
    });

    const grille = service.nouvelleGrille(NiveauDifficulteEnum.FACILE);

    expect(grille).toBeTruthy();
    expect(evtGrille).toBeTruthy();
    expect(evtGrille.typeEvenement).toEqual(TypeEvenementEnum.CREATION_GRILLE);
    expect(evtGrille.grille).not.toBeNull();
    expect(evtGrille.selectionChiffre).toBeFalsy();
  }));

  it('should update grid', waitForAsync(() => {
    let evtGrille: EvenementGrille;

    service.evenementGrille$.subscribe({
      next: evt => {
        evtGrille = evt;
      },
    });
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
    const grid = new Grille(tab, tab2, tab2, tab);

    service.modificationGrille(grid);

    expect(evtGrille).toBeTruthy();
    expect(evtGrille.typeEvenement).toEqual(
      TypeEvenementEnum.MODIFICATION_GRILLE
    );
    expect(evtGrille.grille).not.toBeNull();
    expect(evtGrille.selectionChiffre).toBeFalsy();
  }));

  it('should update grid', waitForAsync(() => {
    let evtGrille: EvenementGrille;

    service.evenementGrille$.subscribe({
      next: evt => {
        evtGrille = evt;
      },
    });
    const selectionChiffre = new SelectionChiffre();
    selectionChiffre.ligne = 1;
    selectionChiffre.colonne = 2;
    selectionChiffre.valeur = 3;

    service.selectionChiffre(selectionChiffre);

    expect(evtGrille).toBeTruthy();
    expect(evtGrille.typeEvenement).toEqual(TypeEvenementEnum.CHOIX_CHIFFRE);
    expect(evtGrille.grille).toBeFalsy();
    expect(evtGrille.selectionChiffre).not.toBeNull();
    expect(evtGrille.selectionChiffre.ligne).toEqual(1);
    expect(evtGrille.selectionChiffre.colonne).toEqual(2);
    expect(evtGrille.selectionChiffre.valeur).toEqual(3);
  }));

  it('should show error', waitForAsync(() => {
    let evtGrille: EvenementGrille;

    service.evenementGrille$.subscribe({
      next: evt => {
        evtGrille = evt;
      },
    });

    service.afficherErreur(true);

    expect(evtGrille).toBeTruthy();
    expect(evtGrille.typeEvenement).toEqual(TypeEvenementEnum.AFFICHER_ERREUR);
    expect(evtGrille.grille).toBeFalsy();
    expect(evtGrille.selectionChiffre).toBeFalsy();
  }));

  it('should hide error', waitForAsync(() => {
    let evtGrille: EvenementGrille;

    service.evenementGrille$.subscribe({
      next: evt => {
        evtGrille = evt;
      },
    });

    service.afficherErreur(false);

    expect(evtGrille).toBeTruthy();
    expect(evtGrille.typeEvenement).toEqual(TypeEvenementEnum.CACHER_ERREUR);
    expect(evtGrille.grille).toBeFalsy();
    expect(evtGrille.selectionChiffre).toBeFalsy();
  }));
});
