import {Injectable} from '@angular/core';
import {Grille} from '../models/grille';
import {ArrayUtils} from '../utils/array.utils';

@Injectable({
  providedIn: 'root'
})
export class CreationGrilleService {

  SUBSECTION_SIZE = 3;

  nouvelleGrille(): Grille {

    // création de la grille vide
    let tab: number[][] = [];
    for (let ligne = 0; ligne < 9; ligne++) {
      tab[ligne] = [];
      for (let colonne = 0; colonne < 9; colonne++) {
        tab[ligne][colonne] = 0;
      }
    }

    console.log('tab vide=', tab);

    // génération des numéros
    this.calculCase(tab);

    console.log('tab=', tab);

    // suppression des cases
    const caseSupprimee = ArrayUtils.cloneArrayNumber(tab);
    this.suppressionCases(caseSupprimee);

    const visible: boolean[][] = [];
    for (let i = 0; i < caseSupprimee.length; i++) {
      visible.push([]);
      for (let j = 0; j < caseSupprimee[i].length; j++) {
        visible[i][j] = caseSupprimee[i][j] > 0;
      }
    }

    const modifiable = visible.map(x => x.map(y => !y));
    const grille: Grille = new Grille(tab, visible, modifiable);

    return grille;
  }

  private calculCase(tab: number[][]): void {

    const listePositions: [number, number][] = this.listePositions();

    for (let position = 0; position < listePositions.length; position++) {
      const val: [number, number] = listePositions[position];
      const ligne2 = val[0];
      const colonne2 = val[1];
      const valeurActuelle = tab[ligne2][colonne2];
      let retourArriere = false;
      console.log('position', position, ligne2, colonne2);
      console.log('tab', tab, this.afficheTab(tab));
      const valeurs = this.calculValeursPossibles(tab, ligne2, colonne2);
      console.log('valeurs', valeurs);
      if (valeurs.length === 0) {
        if (position >= listePositions.length) {
          // pas de solution
          console.log('pas de solution');
          break;
        } else {
          // pas de solution trouvée => on retourne en arrière
          retourArriere = true;
        }
      } else if (valeurs.length === 1) {
        if (valeurActuelle !== 0 && valeurActuelle === valeurs[0]) {
          retourArriere = true;
        } else {
          tab[ligne2][colonne2] = valeurs[0];
        }
      } else {
        if (valeurActuelle === 0) {
          tab[ligne2][colonne2] = valeurs[0];
        } else {
          let trouve = false;
          for (let i = 0; i < valeurs.length; i++) {
            const val2 = valeurs[i];
            if (val2 > valeurActuelle) {
              tab[ligne2][colonne2] = val2;
              trouve = true;
              break;
            }
          }
          if (!trouve) {
            retourArriere = true;
          }
        }
      }
      if (retourArriere) {
        tab[ligne2][colonne2] = 0;
        position -= 2;
      }
    }
  }

  private listePositions(): [number, number][] {
    const res: [number, number][] = [];

    for (let ligne = 0; ligne < 9; ligne++) {
      for (let colonne = 0; colonne < 9; colonne++) {
        res.push([ligne, colonne]);
      }
    }

    return res;
  }

  private calculValeursPossibles(tab: number[][], ligne: number, colonne: number): number[] {
    const valeursPossibles = new Set<number>();
    for (let i = 1; i <= 9; i++) {
      valeursPossibles.add(i);
    }

    for (let i = 0; i < 9; i++) {
      const val = tab[i][colonne];
      if (val > 0 && i !== ligne) {
        valeursPossibles.delete(val);
      }
    }

    for (let i = 0; i < 9; i++) {
      const val = tab[ligne][i];
      if (val > 0 && i != colonne) {
        valeursPossibles.delete(val);
      }
    }

    let subsectionRowStart: number = 0;
    if (ligne < this.SUBSECTION_SIZE) {
      subsectionRowStart = 0;
    } else if (ligne >= this.SUBSECTION_SIZE && ligne < this.SUBSECTION_SIZE * 2) {
      subsectionRowStart = this.SUBSECTION_SIZE;
    } else if (ligne >= this.SUBSECTION_SIZE * 2) {
      subsectionRowStart = this.SUBSECTION_SIZE * 2;
    }
    const subsectionRowEnd: number = subsectionRowStart + this.SUBSECTION_SIZE;

    let subsectionColumnStart: number = 0;
    if (colonne < this.SUBSECTION_SIZE) {
      subsectionColumnStart = 0;
    } else if (colonne >= this.SUBSECTION_SIZE && colonne < this.SUBSECTION_SIZE * 2) {
      subsectionColumnStart = this.SUBSECTION_SIZE;
    } else {
      subsectionColumnStart = this.SUBSECTION_SIZE * 2;
    }
    const subsectionColumnEnd: number = subsectionColumnStart + this.SUBSECTION_SIZE;

    for (let r: number = subsectionRowStart; r < subsectionRowEnd; r++) {
      for (let c: number = subsectionColumnStart; c < subsectionColumnEnd; c++) {
        const val = tab[r][c];
        if (val > 0 && r !== ligne && c !== colonne) {
          valeursPossibles.delete(val);
        }
      }
    }

    return Array.from(valeursPossibles.values())
      .sort((n1, n2) => n1 - n2);
  }

  afficheTab(tab: number[][]): string {
    let s = '';
    for (let i = 0; i < tab.length; i++) {
      for (let j = 0; j < tab.length; j++) {
        s += tab[i][j] + ',';
      }
      s += '\n';
    }
    return s;
  }

  private suppressionCases(tab: number[][]): void {
    const listePositions: [number, number][] = this.listePositions();
    for (let i = 0; i < 10; i++) {
      const min = 0;
      const max = listePositions.length - 1;
      const caseASupprimer: number = Math.floor(Math.random() * (max - min + 1)) + min;
      const pos = listePositions[caseASupprimer];
      const ligne = pos[0];
      const colonne = pos[1];
      if (tab[ligne][colonne] > 0) {
        tab[ligne][colonne] = 0;
        listePositions.splice(caseASupprimer, 1);
      } else {

      }
    }
  }

}
