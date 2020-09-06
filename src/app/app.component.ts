import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {JeuxService} from './service/jeux.service';
import {GrilleComponent} from './component/grille/grille.component';
import {Grille} from './models/grille';
import {SelectionChiffre} from './models/selection-chiffre';
import {SolveBacktrack} from './service/solve-backtrack.service';
import {CreationGrilleService} from './service/creation-grille.service';
import {NiveauDifficulteEnum} from './models/niveau-difficulte.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sudokujs';
  derniereValeurSelectionnee: number = 0;
  niveau: string = 'facile';
  nombreCasesVides= 0;

  @ViewChild(GrilleComponent) grille: GrilleComponent;

  constructor(private jeux: JeuxService, private solveBacktrack: SolveBacktrack, private creationGrilleService: CreationGrilleService) {
  }

  ngAfterViewInit() {

    // cf : https://commons.wikimedia.org/wiki/File:Sdk_ex00s.gif?uselang=fr
    /*const tab: number[][] = [
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

    const modifiable = visible.map(x => x.map(y => !y));
    const grille: Grille = new Grille(tab, visible, modifiable);*/
    const niveauDifficulte = NiveauDifficulteEnum.FACILE;
    const grille = this.creationGrilleService.nouvelleGrille(niveauDifficulte);

    this.grille.init2(grille);
    this.nombreCasesVides = grille.nombreCasesVides();

    // this.resolve(tab, visible);
  }

  onSelection($event: SelectionChiffre): void {
    this.derniereValeurSelectionnee = $event.valeur;
    if ((this.derniereValeurSelectionnee >= 1 && this.derniereValeurSelectionnee <= 9)
      || this.derniereValeurSelectionnee === -1) {
      this.grille.setSelection(this.derniereValeurSelectionnee);
    } else {
      this.grille.setSelection(null);
    }
  }

  creationGrille(): void {
    let niveauDifficulte: NiveauDifficulteEnum;
    if (this.niveau === 'facile') {
      niveauDifficulte = NiveauDifficulteEnum.FACILE;
    } else if (this.niveau === 'moyen') {
      niveauDifficulte = NiveauDifficulteEnum.MOYEN;
    } else if (this.niveau === 'difficile') {
      niveauDifficulte = NiveauDifficulteEnum.DIFFICILE;
    } else {
      niveauDifficulte = NiveauDifficulteEnum.FACILE;
    }
    console.log("difficulte", this.niveau, niveauDifficulte);
    const res = this.creationGrilleService.nouvelleGrille(niveauDifficulte);
    console.log('res', res);
    this.grille.init2(res);
    this.nombreCasesVides = res.nombreCasesVides();
  }

  private resolve(tab: number[][], visible: boolean[][]): void {
    let tab2: number[][];
    tab2 = tab.map(x => x.map(y => y));
    for (let i = 0; i < tab2.length; i++) {
      for (let j = 0; j < tab2[i].length; j++) {
        if (!visible[i][j]) {
          tab2[i][j] = 0;
        }
      }
    }
    console.log('tab2:', tab2);
    const res = this.solveBacktrack.solve(tab2);
    console.log('res', res, tab2);
  }
}
