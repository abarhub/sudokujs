import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrilleService {

  valeurs: number[][];
  visible: boolean[][];

  constructor() {
  }

  public initialisation(valeurs: number[][], visible: boolean[][]): void {
    this.valeurs = valeurs;
    this.visible = visible;
  }

  public getValue(ligne: number, colonne: number): number {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    return this.valeurs[ligne][colonne];
  }

  public isVisible(ligne: number, colonne: number): boolean {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.visible, ligne, colonne);
    return this.visible[ligne][colonne];
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

  private isUndefined(value: any): boolean {
    return value === undefined || value === null;
  }

  public estInitialise(): boolean {
    return !this.isUndefined(this.valeurs) &&
      !this.isUndefined(this.visible);
  }
}
