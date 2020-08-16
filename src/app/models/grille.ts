export class Grille {

  private valeurs: number[][];
  private visible: boolean[][];

  constructor(valeurs: number[][], visible: boolean[][]) {
    this.valeurs = valeurs;
    this.visible = visible;
  }

  getValeur(ligne: number, colonne: number): number {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    if (this.valeurs === null || this.valeurs === undefined) {
      return 0;
    } else {
      return this.valeurs[ligne][colonne];
    }
  }

  estVisible(ligne: number, colonne: number): boolean {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    if (this.visible === null || this.visible === undefined) {
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
  }

  setValeur(ligne: number, colonne: number, valeur: number): void {
    this.verifieLigne(ligne);
    this.verifieColonne(colonne);
    this.verifieCase(this.valeurs, ligne, colonne);
    this.verifieValeur(valeur);
    this.valeurs[ligne][colonne] = valeur;
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
      !this.isUndefined(this.visible);
  }
}
