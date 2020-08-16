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

  case(ligne: number, colonne: number): number {
    if (this.grille && this.grille.estInitialise()) {
      return this.grille.getValeur(ligne, colonne);
    } else {
      return 0;
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

  setSelection(derniereValeurSelectionnee: number | null): void {
    this.valeurSelectionnee = derniereValeurSelectionnee;
  }

  definiChiffre(ligne: number, colonne: number): void {
    if (this.valeurSelectionnee && !this.estVisible(ligne, colonne)) {
      this.grille.setValeur(ligne, colonne, this.valeurSelectionnee);
    }
  }
}
