import {Component, OnInit} from '@angular/core';
import {Grille} from '../../models/grille';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent implements OnInit {

  grille: Grille;
  valeurSelectionnee: number | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  case(ligne: number, colonne: number): string {
    if (this.grille && this.grille.estInitialise()) {
      if (this.estVisible(ligne, colonne)) {
        const valeur = this.grille.getValeur(ligne, colonne);
        return '' + valeur;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  init2(grille: Grille): void {
    this.grille = grille;
  }

  estVisible(ligne: number, colonne: number): boolean {
    if (this.grille && this.grille.estInitialise()) {
      return this.grille.estVisible(ligne, colonne);
    } else {
      return false;
    }
  }

  estModifiable(ligne: number, colonne: number): boolean {
    if (this.grille && this.grille.estInitialise()) {
      return this.grille.estModifiable(ligne, colonne);
    } else {
      return false;
    }
  }

  setSelection(derniereValeurSelectionnee: number | null): void {
    this.valeurSelectionnee = derniereValeurSelectionnee;
  }

  definiChiffre(ligne: number, colonne: number): void {
    if (this.valeurSelectionnee && this.estModifiable(ligne, colonne)) {
      if (this.valeurSelectionnee >= 1 && this.valeurSelectionnee <= 9) {
        this.grille.setValeur(ligne, colonne, this.valeurSelectionnee);
        this.grille.setVisible(ligne, colonne, true);
      } else if (this.valeurSelectionnee === -1) {
        this.grille.setVisible(ligne, colonne, false);
      }
    }
  }
}
