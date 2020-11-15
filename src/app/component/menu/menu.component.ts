import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JeuxService} from '../../service/jeux.service';
import {CreationGrilleService} from '../../service/creation-grille.service';
import {LocalStorageService} from '../../service/local-storage.service';
import {NiveauDifficulteEnum} from '../../models/niveau-difficulte.enum';
import {TypeEvenementEnum} from '../../models/type-evenement.enum';
import {Grille} from '../../models/grille';
import {Parametres} from '../../models/parametres';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  derniereValeurSelectionnee = 0;
  nombreCasesVides = 0;
  remplissageChiffres: boolean = false;
  grille: Grille | null = null;
  parametres: Parametres = new Parametres();

  NiveauDifficulteEnum = NiveauDifficulteEnum;

  constructor(private jeuxService: JeuxService, private creationGrilleService: CreationGrilleService,
              private localStorageService: LocalStorageService) {
  }

  ngAfterViewInit(): void {

    const param = this.localStorageService.chargerParametres();
    if (param) {
      this.parametres = param;
      console.log('parametreCharge', this.parametres);
    }

    let grille: Grille | null = null;
    console.log('chargement grille sauve ...');
    const grilleSauve = this.localStorageService.chargerGrille();
    if (grilleSauve) {
      grille = grilleSauve;
      this.jeuxService.chargerGrille(grille);
      console.log('chargement grille sauve ok');
    } else {
      console.log('aucune grillle. Création d\'une nouvelle grille');
      const niveauDifficulte = this.parametres.niveauDifficulte;
      grille = this.jeuxService.nouvelleGrille(niveauDifficulte);
    }

    this.nombreCasesVides = grille.nombreCasesVides();
  }

  ngOnInit(): void {
    this.jeuxService.evenementGrille$.subscribe(evenement => {
      if (evenement.typeEvenement === TypeEvenementEnum.CREATION_GRILLE ||
        evenement.typeEvenement === TypeEvenementEnum.CHOIX_CHIFFRE ||
        evenement.typeEvenement === TypeEvenementEnum.MODIFICATION_GRILLE) {
        if (evenement.grille) {
          this.grille = evenement.grille;
          this.sauveGrille();
        }
      }
    });
  }

  creationGrille(): void {
    console.log('difficulte', this.parametres.niveauDifficulte);
    const grille = this.jeuxService.nouvelleGrille(this.parametres.niveauDifficulte);
    this.nombreCasesVides = grille.nombreCasesVides();
    this.sauveGrille();
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
    this.sauveParametrage();
    this.sauveGrille();
  }

  charger(): void {
    const grille = this.localStorageService.chargerGrille();
    if (grille) {
      console.log('res', grille);
      this.jeuxService.chargerGrille(grille);
      this.nombreCasesVides = grille.nombreCasesVides();
    }
  }

  remplissageAutoChiffres($event: boolean): void {
    this.remplissageChiffres = $event;
  }

  private sauveParametrage(): void {
    this.localStorageService.sauveParametres(this.parametres);
  }

  private sauveGrille(): void {
    this.localStorageService.sauveGrille(this.grille);
  }
}
