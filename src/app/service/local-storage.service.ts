import { Grille } from '../models/grille';
import { Injectable } from '@angular/core';
import { Parametres } from '../models/parametres';
import { NiveauDifficulteEnum } from '../models/niveau-difficulte.enum';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  readonly keyGrille: string = 'valeur';
  readonly keyParametres: string = 'parametres';
  localStorage: Storage;

  sauveGrille(grille: Grille): void {
    localStorage.setItem(this.keyGrille, grille.toString());
  }

  sauveParametres(parametres: Parametres): void {
    if (parametres) {
      const param = JSON.stringify(parametres);
      console.log('sauve param', param);
      localStorage.setItem(this.keyParametres, param);
    }
  }

  chargerGrille(): Grille | null {
    const valeur = localStorage.getItem(this.keyGrille);
    if (valeur) {
      const item = JSON.parse(valeur);
      if (item) {
        const solution: number[][] = this.convertieTabNumber(item, 'solution');
        const valeurs: number[][] = this.convertieTabNumber(item, 'valeurs');
        const visible: boolean[][] = this.convertieTabBoolean(item, 'visible');
        const modifiable: boolean[][] = this.convertieTabBoolean(
          item,
          'modifiable'
        );

        if (
          solution.length > 0 &&
          valeurs.length > 0 &&
          visible.length > 0 &&
          modifiable.length > 0
        ) {
          return new Grille(solution, visible, modifiable, valeurs);
        }
      }
    }
    return null;
  }

  private convertieTabNumber(item: any, champs: string): number[][] {
    if (item.hasOwnProperty(champs)) {
      const tab = item[champs];
      if (tab && Array.isArray(tab)) {
        const tab2: number[][] = [];
        if (tab.length !== 9) {
          return [];
        }
        for (const item2 of tab) {
          const tab4: number[] = [];
          if (item2.length !== 9) {
            return [];
          }
          tab2.push(tab4);
          for (const item3 of item2) {
            if (typeof item3 === 'number') {
              tab4.push(item3);
            } else {
              return [];
            }
          }
        }
        return tab2;
      }
    }
    return [];
  }

  private convertieTabBoolean(item: any, champs: string): boolean[][] {
    if (item.hasOwnProperty(champs)) {
      const tab = item[champs];
      if (tab && Array.isArray(tab)) {
        if (tab.length !== 9) {
          return [];
        }
        const tab2: boolean[][] = [];
        for (const item2 of tab) {
          const tab4: boolean[] = [];
          if (item2.length !== 9) {
            return [];
          }
          tab2.push(tab4);
          for (const item3 of item2) {
            if (typeof item3 === 'boolean') {
              tab4.push(item3);
            } else {
              return [];
            }
          }
        }
        return tab2;
      }
    }
    return [];
  }

  chargerParametres(): Parametres | null {
    const valeur = localStorage.getItem(this.keyParametres);
    if (valeur) {
      const param = JSON.parse(valeur);
      if (param) {
        const parametres = new Parametres();
        console.log('parametres param', param);
        if (typeof param?.remplissageChiffres === 'boolean') {
          parametres.remplissageChiffres = param?.remplissageChiffres;
        }
        if (param?.niveauDifficulte in NiveauDifficulteEnum) {
          parametres.niveauDifficulte = param?.niveauDifficulte;
        }
        console.log('parametres param2', parametres);
        return parametres;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
