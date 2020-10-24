import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JeuxService} from '../../service/jeux.service';
import {SolveBacktrack} from '../../service/solve-backtrack.service';
import {CreationGrilleService} from '../../service/creation-grille.service';
import {LocalStorageService} from '../../service/local-storage.service';
import {NiveauDifficulteEnum} from '../../models/niveau-difficulte.enum';
import {TypeEvenementEnum} from '../../models/type-evenement.enum';
import {Grille} from '../../models/grille';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  derniereValeurSelectionnee = 0;
  niveau = 'facile';
  nombreCasesVides = 0;
  remplissageChiffres: boolean = false;
  grille: Grille | null = null;

  constructor(private jeuxService: JeuxService, private solveBacktrack: SolveBacktrack, private creationGrilleService: CreationGrilleService,
              private localStorageService: LocalStorageService) {
  }


  ngAfterViewInit(): void {
    const niveauDifficulte = NiveauDifficulteEnum.FACILE;
    const grille = this.jeuxService.nouvelleGrille(niveauDifficulte);

    this.nombreCasesVides = grille.nombreCasesVides();
  }

  ngOnInit(): void {
    this.jeuxService.evenementGrille$.subscribe(evenement => {
      if (evenement.typeEvenement === TypeEvenementEnum.CREATION_GRILLE ||
        evenement.typeEvenement === TypeEvenementEnum.CHOIX_CHIFFRE ||
        evenement.typeEvenement === TypeEvenementEnum.MODIFICATION_GRILLE) {
        if (evenement.grille) {
          this.grille = evenement.grille;
        }
      }
    });
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
    if (this.grille) {
      return this.grille.nombreCasesVides();
    } else {
      return 0;
    }
  }

  nombreCaseEnErreur(): number {
    if (this.grille) {
      return this.grille.nombreCasesEnErreur();
    } else {
      return 0;
    }
  }

  afficheErreur(afficherErreur: boolean): void {
    this.jeuxService.afficherErreur(afficherErreur);
  }

  sauver(): void {
    this.localStorageService.save(this.grille);
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
