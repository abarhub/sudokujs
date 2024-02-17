import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  private a = 25214903917;
  private c = 11;
  private modulus = Math.pow(2, 48);
  private nextSeed: number | null = null;

  constructor() {
  }

  /**
   * Défini le seed du generateur de nombre aléatoire
   * @param seed le seed de départ
   */
  public setSeed(seed: number): void {
    this.nextSeed = seed;
  }

  /**
   * retourne un nombre aléatoire entre 0 et le nombre max
   * le nombre max est exclu des nombres retournés
   * le nombre retourné est un entier
   * @param max le paramètre ma
   */
  public getRandomNumber(max: number): number {
    return this.getRandomInt(0, max);
  }

  /**
   * retourne un entre entre min (inclu) et max (exclu)
   * @param min la valeur minimum. Cette valeur est incluse dans les résultat
   * @param max la valeur maximum. Cette valeur est exclue des résultats
   */
  public getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(this.nextRandomNumber() * (max - min)) + min;
  }

  private nextRandomNumber(): number {
    if (this.nextSeed === null) {
      return Math.random();
    } else {
      this.nextSeed = (this.a * this.nextSeed + this.c) % this.modulus;
      return this.nextSeed / this.modulus;
    }
  }

}
