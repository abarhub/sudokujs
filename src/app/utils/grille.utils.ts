import { Grille } from '../models/grille';

export class GrilleUtils {
  static memeCarre(
    ligne: number,
    colonne: number,
    ligne2: number,
    colonne2: number
  ): boolean {
    return (
      Math.floor(ligne / 3) === Math.floor(ligne2 / 3) &&
      Math.floor(colonne / 3) === Math.floor(colonne2 / 3)
    );
  }
}
