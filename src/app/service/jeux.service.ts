import { Injectable } from '@angular/core';
import { GrilleService } from './grille.service';
import { Subject } from 'rxjs';
import { Grille } from '../models/grille';
import { CreationGrilleService } from './creation-grille.service';
import { NiveauDifficulteEnum } from '../models/niveau-difficulte.enum';
import { EvenementGrille } from '../models/evenement-grille';
import { TypeEvenementEnum } from '../models/type-evenement.enum';
import { SelectionChiffre } from '../models/selection-chiffre';

@Injectable({
  providedIn: 'root',
})
export class JeuxService {
  modificationGrille$: Subject<Grille> = new Subject<Grille>();

  evenementGrille$: Subject<EvenementGrille> = new Subject<EvenementGrille>();

  constructor(
    private grilleService: GrilleService,
    private creationGrilleService: CreationGrilleService
  ) {}

  public nouvelleGrille(niveauDifficulte: NiveauDifficulteEnum): Grille {
    const grille = this.creationGrilleService.nouvelleGrille(niveauDifficulte);
    const evenementGrille: EvenementGrille = new EvenementGrille();
    evenementGrille.typeEvenement = TypeEvenementEnum.CREATION_GRILLE;
    evenementGrille.grille = grille.clone();
    this.evenementGrille$.next(evenementGrille);
    return grille;
  }

  public chargerGrille(grille: Grille): void {
    const evenementGrille: EvenementGrille = new EvenementGrille();
    evenementGrille.typeEvenement = TypeEvenementEnum.CREATION_GRILLE;
    evenementGrille.grille = grille.clone();
    this.evenementGrille$.next(evenementGrille);
  }

  public modificationGrille(grille: Grille): void {
    const evenementGrille = new EvenementGrille();
    evenementGrille.typeEvenement = TypeEvenementEnum.MODIFICATION_GRILLE;
    evenementGrille.grille = grille;
    this.evenementGrille$.next(evenementGrille);
  }

  public selectionChiffre(selection: SelectionChiffre): void {
    const evenement = new EvenementGrille();
    evenement.typeEvenement = TypeEvenementEnum.CHOIX_CHIFFRE;
    evenement.selectionChiffre = selection;
    this.evenementGrille$.next(evenement);
  }

  public afficherErreur(afficher: boolean): void {
    const evenement = new EvenementGrille();
    if (afficher) {
      evenement.typeEvenement = TypeEvenementEnum.AFFICHER_ERREUR;
    } else {
      evenement.typeEvenement = TypeEvenementEnum.CACHER_ERREUR;
    }
    this.evenementGrille$.next(evenement);
  }
}
