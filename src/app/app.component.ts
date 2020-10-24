import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {JeuxService} from './service/jeux.service';
import {GrilleComponent} from './component/grille/grille.component';
import {SelectionChiffre} from './models/selection-chiffre';
import {SolveBacktrack} from './service/solve-backtrack.service';
import {CreationGrilleService} from './service/creation-grille.service';
import {NiveauDifficulteEnum} from './models/niveau-difficulte.enum';
import {LocalStorageService} from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sudokujs';
  derniereValeurSelectionnee = 0;
  niveau = 'facile';
  nombreCasesVides = 0;
  remplissageChiffres: boolean = false;

  @ViewChild(GrilleComponent) grille: GrilleComponent;

  constructor(private jeuxService: JeuxService, private solveBacktrack: SolveBacktrack, private creationGrilleService: CreationGrilleService,
              private localStorageService: LocalStorageService) {
  }

  ngAfterViewInit(): void {
    const niveauDifficulte = NiveauDifficulteEnum.FACILE;
    const grille = this.jeuxService.nouvelleGrille(niveauDifficulte);

    this.nombreCasesVides = grille.nombreCasesVides();
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
    const grille = this.jeuxService.nouvelleGrille(niveauDifficulte);
    this.nombreCasesVides = grille.nombreCasesVides();
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

  afficheErreur($event: boolean): void {
    this.grille.setAfficherErreur($event);
  }

  sauver(): void {
    this.grille.sauve();
  }

  charger(): void {
    const grille = this.localStorageService.charger();
    if (grille) {
      console.log('res', grille);
      this.jeuxService.chargerGrille(grille);
      this.nombreCasesVides = grille.nombreCasesVides();
    }
  }

  remplissageAutoChiffres($event: boolean): void {
    this.remplissageChiffres = $event;
  }
}
