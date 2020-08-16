import {Injectable} from '@angular/core';
import {GrilleService} from './grille.service';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(private grille: GrilleService) {
  }

  public initialisation(): void {
    // cf : https://commons.wikimedia.org/wiki/File:Sdk_ex00s.gif?uselang=fr
    const tab: number[][] = [
      [2, 8, 3, 4, 1, 9, 7, 4, 6],
      [9, 6, 4, 8, 7, 3, 5, 2, 1],
      [5, 1, 7, 6, 2, 4, 9, 3, 8],
      [1, 5, 6, 7, 4, 2, 3, 8, 9],
      [4, 2, 9, 3, 8, 6, 1, 7, 5],
      [3, 7, 8, 1, 9, 5, 2, 6, 4],
      [8, 9, 5, 4, 3, 7, 6, 1, 2],
      [7, 4, 2, 9, 6, 1, 8, 5, 3],
      [6, 3, 1, 2, 5, 8, 4, 9, 7]
    ];
    const visible: boolean[][] = [
      [true, false, false, false, false, false, false, true, false],
      [false, false, false, false, false, false, true, false, false],
      [false, true, false, true, false, true, false, true, true],
      [true, false, false, true, true, false, false, true, true],
      [false, false, true, false, true, false, true, false, false],
      [true, true, false, false, true, true, false, false, true],
      [true, true, false, true, false, true, false, true, false],
      [false, false, true, false, false, false, false, false, false],
      [false, true, false, false, false, false, false, false, true]
    ];
    this.grille.initialisation(tab, visible);
  }

  public getValue(ligne: number, colonne: number): number {
    if (this.grille.estInitialise()) {
      return this.grille.getValue(ligne, colonne);
    } else {
      return 0;
    }
  }

  public isVisible(ligne: number, colonne: number): boolean {
    return this.grille.isVisible(ligne, colonne);
  }
}
