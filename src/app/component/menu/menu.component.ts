import {
  AfterContentInit,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JeuxService } from '../../service/jeux.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { NiveauDifficulteEnum } from '../../models/niveau-difficulte.enum';
import { TypeEvenementEnum } from '../../models/type-evenement.enum';
import { Grille } from '../../models/grille';
import { Parametres } from '../../models/parametres';
import { ToggleComponent } from '../toggle/toggle.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ToggleComponent],
})
export class MenuComponent implements OnInit, OnDestroy, AfterContentInit {
  derniereValeurSelectionnee = 0;
  nombreCasesVides = 0;
  remplissageChiffres = false;
  grille: Grille | null = null;
  parametres: Parametres = new Parametres();
  nombreErreurs = 0;

  NiveauDifficulteEnum = NiveauDifficulteEnum;
  isOver$: Subject<boolean> = new Subject<boolean>();

  private jeuxService = inject(JeuxService);
  private localStorageService = inject(LocalStorageService);
  private cdr = inject(ChangeDetectorRef);

  ngAfterContentInit(): void {
    const param = this.localStorageService.chargerParametres();
    if (param) {
      this.parametres = param;
    }

    let grille: Grille | null = null;
    console.log('chargement grille sauve ...');
    const grilleSauve = this.localStorageService.chargerGrille();
    if (grilleSauve) {
      grille = grilleSauve;
      this.jeuxService.chargerGrille(grille);
      grille
        .miseAjour()
        .pipe(takeUntil(this.isOver$))
        .subscribe(() => {
          this.miseAJourCompteurs();
        });
      console.log('chargement grille sauve ok');
    } else {
      console.log("aucune grillle. Création d'une nouvelle grille");
      const niveauDifficulte = this.parametres.niveauDifficulte;
      grille = this.jeuxService.nouvelleGrille(niveauDifficulte);
      if (grille) {
        grille
          .miseAjour()
          .pipe(takeUntil(this.isOver$))
          .subscribe(() => {
            this.miseAJourCompteurs();
          });
      }
    }

    this.nombreCasesVides = grille.nombreCasesVides();
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
    this.jeuxService.evenementGrille$
      .pipe(takeUntil(this.isOver$))
      .subscribe(evenement => {
        if (
          evenement.typeEvenement === TypeEvenementEnum.CREATION_GRILLE ||
          evenement.typeEvenement === TypeEvenementEnum.CHOIX_CHIFFRE ||
          evenement.typeEvenement === TypeEvenementEnum.MODIFICATION_GRILLE
        ) {
          if (evenement.grille) {
            this.grille = evenement.grille;
            this.sauveGrille();
            this.miseAJourCompteurs();
          }
        }
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.isOver$.next(true);
    this.isOver$.unsubscribe();
  }

  private miseAJourCompteurs(): void {
    if (this.grille) {
      this.nombreErreurs = this.grille.nombreCasesEnErreur();
      this.nombreCasesVides = this.grille.nombreCasesVides();
    }
    this.cdr.markForCheck();
  }

  creationGrille(): void {
    const grille = this.jeuxService.nouvelleGrille(
      this.parametres.niveauDifficulte
    );
    if (grille) {
      this.nombreCasesVides = grille.nombreCasesVides();
      this.sauveGrille();
    }
  }

  afficheErreur(afficherErreur: boolean): void {
    this.jeuxService.afficherErreur(afficherErreur);
  }

  sauver(): void {
    this.sauveParametrage();
    this.sauveGrille();
  }

  charger(): void {
    const grille = this.localStorageService.chargerGrille();
    if (grille) {
      this.jeuxService.chargerGrille(grille);
      grille
        .miseAjour()
        .pipe(takeUntil(this.isOver$))
        .subscribe(() => {
          this.miseAJourCompteurs();
        });
    }
  }

  remplissageAutoChiffres($event: boolean): void {
    this.remplissageChiffres = $event;
  }

  private sauveParametrage(): void {
    this.localStorageService.sauveParametres(this.parametres);
  }

  private sauveGrille(): void {
    if (this.grille) {
      this.localStorageService.sauveGrille(this.grille);
    }
  }
}
