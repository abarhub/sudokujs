import {Component, OnInit} from '@angular/core';
import {Grille} from '../../models/grille';
import {GrilleUtils} from '../../utils/grille.utils';
import {LogUtils} from '../../utils/log.utils';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent implements OnInit {

  grille: Grille;
  valeurSelectionnee: number | null = null;
  ligneSelectionnee: number | null = null;
  colonneSelectionnee: number | null = null;

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
    if(this.ligneSelectionnee !== null && this.colonneSelectionnee !== null){
      this.definiChiffre(this.ligneSelectionnee, this.colonneSelectionnee);
      this.ligneSelectionnee=null;
      this.colonneSelectionnee=null;
    }
  }

  definiChiffre(ligne: number, colonne: number): void {
    if (this.valeurSelectionnee) {
      if (this.estModifiable(ligne, colonne)) {

        if (this.valeurSelectionnee >= 1 && this.valeurSelectionnee <= 9) {
          this.grille.setValeur(ligne, colonne, this.valeurSelectionnee);
          this.grille.setVisible(ligne, colonne, true);
        } else if (this.valeurSelectionnee === -1) {
          this.grille.setVisible(ligne, colonne, false);
        }
      }
    } else {
      if (this.estModifiable(ligne, colonne)) {
        if (this.ligneSelectionnee !== null && this.colonneSelectionnee !== null &&
          this.ligneSelectionnee === ligne && this.colonneSelectionnee === colonne) {
          this.ligneSelectionnee = null;
          this.colonneSelectionnee = null;
        } else if (this.ligneSelectionnee !== null || this.colonneSelectionnee !== null) {
          this.ligneSelectionnee = ligne;
          this.colonneSelectionnee = colonne;
        } else if (this.ligneSelectionnee !== ligne || this.colonneSelectionnee !== colonne) {
          this.ligneSelectionnee = ligne;
          this.colonneSelectionnee = colonne;
        }
      }
    }
  }

  isCaseSelectionnee(ligne: number, colonne: number): boolean {
    return this.ligneSelectionnee && this.colonneSelectionnee && this.ligneSelectionnee === ligne && this.colonneSelectionnee === colonne;
  }

  isLigneColonneSelectionnee(ligne: number, colonne: number): boolean {
    if (this.ligneSelectionnee !== null && this.colonneSelectionnee !== null) {
      if (this.ligneSelectionnee === ligne || this.colonneSelectionnee === colonne) {
        return true;
      } else if (GrilleUtils.memeCarre(ligne, colonne, this.ligneSelectionnee, this.colonneSelectionnee)) {
        return true;
      }
    }
    return false;
  }

}
