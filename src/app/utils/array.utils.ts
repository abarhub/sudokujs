import {RandomUtils} from './random.utils';

export class ArrayUtils {

  public static cloneArrayNumber(tab: number[][]): number[][] {
    const resultat: number[][] = [];
    if (tab) {
      for (let i = 0; i < tab.length; i++) {
        resultat.push([]);
        for (let j = 0; j < tab[i].length; j++) {
          resultat[i][j] = tab[i][j];
        }
      }
    }
    return resultat;
  }

  public static cloneArrayBoolean(tab: boolean[][]): boolean[][] {
    const resultat: boolean[][] = [];
    if (tab) {
      for (let i = 0; i < tab.length; i++) {
        resultat.push([]);
        for (let j = 0; j < tab[i].length; j++) {
          resultat[i][j] = tab[i][j];
        }
      }
    }
    return resultat;
  }

  /**
   * retourne une copie du tableau avec les elements mélangés
   * @param tab le tableau à mélanger. Il n'est pas modifié
   */
  public static shuttle(tab: number[]): number[] {
    const resultat: number[] = [];
    const temporaire: number[] = [];
    for (const item of tab) {
      temporaire.push(item);
    }
    while (temporaire.length > 0) {
      const position = RandomUtils.getRandomNumber(temporaire.length);
      const val = temporaire[position];
      resultat.push(val);
      temporaire.splice(position, 1);
    }
    return resultat;
  }

}
