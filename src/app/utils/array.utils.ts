import {RandomService} from '../service/random.service';

export class ArrayUtils {

  /**
   * clone un tableau d'entier
   * @param tab le tableau a cloner
   */
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

  /**
   * clone un tableau de booleen
   * @param tab le tableau a cloner
   */
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
   * @param randomService le service qui génère les nombres aléatoires
   */
  public static shuttle(tab: number[], randomService: RandomService): number[] {
    const resultat: number[] = [];
    const temporaire: number[] = [];
    for (const item of tab) {
      temporaire.push(item);
    }
    while (temporaire.length > 0) {
      const position = randomService.getRandomNumber(temporaire.length);
      const val = temporaire[position];
      resultat.push(val);
      temporaire.splice(position, 1);
    }
    return resultat;
  }

}
