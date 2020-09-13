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
  nombreCasesVides = 0;

  @ViewChild(GrilleComponent) grille: GrilleComponent;

  constructor(private jeux: JeuxService, private solveBacktrack: SolveBacktrack, private creationGrilleService: CreationGrilleService) {
  }

  ngAfterViewInit(): void {
    const niveauDifficulte = NiveauDifficulteEnum.FACILE;
    const grille = this.creationGrilleService.nouvelleGrille(niveauDifficulte);

    this.grille.init2(grille);
    this.nombreCasesVides = grille.nombreCasesVides();
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
    console.log('difficulte', this.niveau, niveauDifficulte);
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

  nombreCaseVide(): number {
    if (this.grille && this.grille?.grille) {
      return this.grille.grille.nombreCasesVides();
    } else {
      return 0;
    }
  }

  nombreCaseEnErreur(): number {
    if (this.grille && this.grille?.grille) {
      return this.grille.grille.nombreCasesEnErreur();
    } else {
      return 0;
    }
  }
}
