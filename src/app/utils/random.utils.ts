export class RandomUtils {

  /**
   * retourne un nombre aléatoire entre 0 et le nombre max
   * le nombre max est exclu des nombres retournés
   * le nombre retourné est un entier
   * @param max le paramètre ma
   */
  public static getRandomNumber(max: number): number {
    return this.getRandomInt(0, max);
  }

  /**
   * retourne un entre entre min (inclu) et max (exclu)
   * @param min la valeur minimum. Cette valeur est incluse dans les résultat
   * @param max la valeur maximum. Cette valeur est exclue des résultats
   */
  public static getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
