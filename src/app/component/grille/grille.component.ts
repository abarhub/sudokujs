import {Component, OnInit} from '@angular/core';
import {Grille} from '../../models/grille';
import {GrilleUtils} from '../../utils/grille.utils';
import {LogUtils} from '../../utils/log.utils';
import {JeuxService} from '../../service/jeux.service';
import {LocalStorageService} from '../../service/local-storage.service';

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
  valeurAfficher: number | null = null;
  afficherErreur = false;

  constructor(private jeuxService: JeuxService, private localStorageService: LocalStorageService) {
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
    this.jeuxService.modificationGrille$.next(this.grille.clone());
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
    if (this.ligneSelectionnee !== null && this.colonneSelectionnee !== null) {
      this.definiChiffre(this.ligneSelectionnee, this.colonneSelectionnee);
      this.ligneSelectionnee = null;
      this.colonneSelectionnee = null;
    }
  }

  definiChiffre(ligne: number, colonne: number): void {
    if (this.valeurSelectionnee) {
      if (this.estModifiable(ligne, colonne)) {

        if (this.valeurSelectionnee >= 1 && this.valeurSelectionnee <= 9) {
          this.grille.setValeur(ligne, colonne, this.valeurSelectionnee);
          this.grille.setVisible(ligne, colonne, true);
          this.jeuxService.modificationGrille$.next(this.grille.clone());
        } else if (this.valeurSelectionnee === -1) {
          this.grille.setVisible(ligne, colonne, false);
          this.jeuxService.modificationGrille$.next(this.grille.clone());
        }
      }
    } else {
      if (this.ligneSelectionnee !== null && this.colonneSelectionnee !== null &&
        this.ligneSelectionnee === ligne && this.colonneSelectionnee === colonne) {
        this.ligneSelectionnee = null;
        this.colonneSelectionnee = null;
        this.valeurAfficher = null;
      } else if ((this.ligneSelectionnee !== null || this.colonneSelectionnee !== null) ||
        (this.ligneSelectionnee !== ligne || this.colonneSelectionnee !== colonne)) {
        this.ligneSelectionnee = ligne;
        this.colonneSelectionnee = colonne;
        if (this.grille.estVisible(ligne, colonne)) {
          this.valeurAfficher = this.grille.getValeur(ligne, colonne);
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

  isValeurAfficher(ligne: number, colonne: number): boolean {
    if (this.valeurAfficher != null && this.grille.estVisible(ligne, colonne)) {
      return this.grille.getValeur(ligne, colonne) === this.valeurAfficher;
    } else {
      return false;
    }

  }

  isEnErreur(ligne: number, colonne: number): boolean {
    if (this.afficherErreur) {
      return this.grille.getValeur(ligne, colonne) !== this.grille.getSolution(ligne, colonne);
    } else {
      return false;
    }
  }

  setAfficherErreur(afficher: boolean): void {
    this.afficherErreur = afficher;
  }

  sauve(): void {
    this.localStorageService.save(this.grille);
  }

}
