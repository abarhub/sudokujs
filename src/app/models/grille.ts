import {ArrayUtils} from '../utils/array.utils';
import {Observable, Subject} from 'rxjs';

export class Grille {

  private solution: number[][];
  private valeurs: number[][];
  private visible: boolean[][];
  private modifiable: boolean[][];
  private miseAJour: Subject<void>;

  constructor(solution: number[][], visible: boolean[][], modifiable: boolean[][], valeur?: number[][]) {
    this.solution = ArrayUtils.cloneArrayNumber(solution);
    this.visible = ArrayUtils.cloneArrayBoolean(visible);
    this.modifiable = ArrayUtils.cloneArrayBoolean(modifiable);
    if (valeur) {
      this.valeurs = ArrayUtils.cloneArrayNumber(valeur);
    } else {
      this.valeurs = ArrayUtils.cloneArrayNumber(this.solution);
    }
    this.miseAJour = new Subject<void>();
  }

  getValeur(ligne: number, colonne: number): number {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    if (this.isUndefined(this.valeurs)) {
      return 0;
    } else {
      return this.valeurs[ligne][colonne];
    }
  }

  getSolution(ligne: number, colonne: number): number {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.solution, ligne, colonne);
    if (this.isUndefined(this.solution)) {
      return 0;
    } else {
      return this.solution[ligne][colonne];
    }
  }

  estVisible(ligne: number, colonne: number): boolean {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    if (this.isUndefined(this.visible)) {
      return false;
    } else {
      return this.visible[ligne][colonne];
    }
  }

  setVisible(ligne: number, colonne: number, visibilite: boolean): void {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    this.visible[ligne][colonne] = visibilite;
    this.miseAJour.next();
  }

  setValeur(ligne: number, colonne: number, valeur: number): void {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    this.verifieValeur(valeur);
    if (!this.estModifiable(ligne, colonne)) {
      throw new Error('Impossible de modifier la case ' + ligne + '/' + colonne + ' !');
    } else {
      this.valeurs[ligne][colonne] = valeur;
      this.miseAJour.next();
    }
  }

  estModifiable(ligne: number, colonne: number): boolean {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    if (this.isUndefined(this.modifiable)) {
      return false;
    } else {
      return this.modifiable[ligne][colonne];
    }
  }

  private verifieLigne(ligne: number): void {
    if (ligne < 0 || ligne > 8) {
      throw new Error('ligne invalide ' + ligne + ' !');
    }
  }

  private verifieColonne(colonne: number): void {
    if (colonne < 0 || colonne > 8) {
      throw new Error('colonne invalide ' + colonne + ' !');
    }
  }

  private verifieCase(tableau: Array<Array<any>>, ligne: number, colonne: number): void {
    if (this.isUndefined(tableau)) {
      console.log('tableau', tableau);
      throw new Error('Le tableau n\'existe pas !');
    }
    if (this.isUndefined(tableau[ligne])) {
      throw new Error('La ligne ' + ligne + ' n\'existe pas !');
    }
    if (this.isUndefined(tableau[ligne][colonne])) {
      throw new Error('La colonne ' + colonne + ' n\'existe pas !');
    }
  }

  private verifieValeur(valeur: number): void {
    if (valeur < 1 || valeur > 9) {
      throw new Error('valeur invalide ' + valeur + ' !');
    }
  }

  private isUndefined(value: any): boolean {
    return value === undefined || value === null;
  }

  public estInitialise(): boolean {
    return !this.isUndefined(this.valeurs) &&
      !this.isUndefined(this.visible) &&
      !this.isUndefined(this.modifiable);
  }

  public nombreCasesVides(): number {
    let compteur = 0;
    console.log('nombreCasesVides', this.visible);
    for (const item of this.visible) {
      for (const item2 of item) {
        if (!item2) {
          compteur++;
        }
      }
    }
    console.log('nombreCasesVides compteur', compteur);
    return compteur;
  }

  public nombreCasesEnErreur(): number {
    let compteur = 0;
    for (let i = 0; i < this.solution.length; i++) {
      for (let j = 0; j < this.solution[i].length; j++) {
        if (this.visible[i][j]) {
          const valeurSolution = this.solution[i][j];
          const valeurSelectionnee = this.valeurs[i][j];
          if (valeurSolution !== valeurSelectionnee) {
            console.log('diff', i, j, valeurSolution, valeurSelectionnee);
            compteur++;
          }
        }
      }
    }
    console.log('nombreCasesEnErreur compteur', compteur);
    return compteur;
  }

  public clone(): Grille {
    return new Grille(this.solution, this.visible, this.modifiable, this.valeurs);
  }

  public toString(): string {
    return JSON.stringify(this);
  }

  public miseAjour(): Observable<void> {
    return this.miseAJour;
  }
}
