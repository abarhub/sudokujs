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

}
