import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SelectionChiffre } from '../../models/selection-chiffre';
import { JeuxService } from '../../service/jeux.service';
import { Grille } from '../../models/grille';
import { TypeEvenementEnum } from '../../models/type-evenement.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-selection-chiffres',
  templateUrl: './selection-chiffres.component.html',
  styleUrls: ['./selection-chiffres.component.scss'],
})
export class SelectionChiffresComponent implements OnInit, OnDestroy {
  chiffreSelectionnee: number | null = null;
  nbRestant: number[];
  listeChiffre: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  over$ = new Subject<void>();

  @Input()
  remplissageAutoChiffre: boolean;

  constructor(private jeuxService: JeuxService) {
    this.nbRestant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  ngOnInit(): void {
    this.jeuxService.evenementGrille$
      .pipe(takeUntil(this.over$))
      .subscribe(evenement => {
        if (
          evenement.typeEvenement === TypeEvenementEnum.CREATION_GRILLE ||
          evenement.typeEvenement === TypeEvenementEnum.CHOIX_CHIFFRE ||
          evenement.typeEvenement === TypeEvenementEnum.MODIFICATION_GRILLE
        ) {
          if (evenement.grille) {
            this.calculNombreRestant(evenement.grille);
          }
          if (evenement.typeEvenement === TypeEvenementEnum.CREATION_GRILLE) {
            if (this.chiffreSelectionnee) {
              // deselection du chiffre s'il y en a un selectionné
              this.selectionChiffre(this.chiffreSelectionnee);
            }
          }
        }
      });
  }

  selectionChiffre(chiffre: number): void {
    if (this.chiffreSelectionnee !== chiffre) {
      const selection = new SelectionChiffre();
      selection.valeur = chiffre;
      if (this.remplissageAutoChiffre || chiffre === -1) {
        this.chiffreSelectionnee = chiffre;
      }
      this.jeuxService.selectionChiffre(selection);
    } else {
      this.chiffreSelectionnee = null;
      const selection = new SelectionChiffre();
      selection.valeur = 0;
      this.jeuxService.selectionChiffre(selection);
    }
  }

  estSelectionne(chiffre: number): boolean {
    return this.chiffreSelectionnee && this.chiffreSelectionnee === chiffre;
  }

  private calculNombreRestant(grille: Grille): void {
    const tab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grille.estVisible(i, j)) {
          const valeur = grille.getValeur(i, j);
          tab[valeur - 1]++;
        }
      }
    }
    for (let i = 0; i < 9; i++) {
      this.nbRestant[i] = Math.max(9 - tab[i], 0);
    }
    console.log('tab', tab, 'nbRestant', this.nbRestant);
  }

  nombreRestant(chiffre: number): number {
    return this.nbRestant[chiffre - 1];
  }

  ngOnDestroy(): void {
    this.over$.next();
    this.over$.complete();
  }
}
