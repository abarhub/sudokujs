import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SelectionChiffre} from '../../models/selection-chiffre';
import {JeuxService} from '../../service/jeux.service';
import {Grille} from '../../models/grille';

@Component({
  selector: 'app-selection-chiffres',
  templateUrl: './selection-chiffres.component.html',
  styleUrls: ['./selection-chiffres.component.scss']
})
export class SelectionChiffresComponent implements OnInit {

  chiffreSelectionnee: number | null = null;
  nbRestant: number[];
  listeChiffre: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  @Output() selection = new EventEmitter<SelectionChiffre>();

  constructor(private jeuxService: JeuxService) {
    this.nbRestant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  ngOnInit(): void {
    this.jeuxService.modificationGrille$.subscribe(grille => {
      this.calculNombreRestant(grille);
    });
  }

  selectionChiffre(chiffre: number): void {
    if (this.chiffreSelectionnee !== chiffre) {
      const selection = new SelectionChiffre();
      selection.valeur = chiffre;
      this.chiffreSelectionnee = chiffre;
      this.selection.emit(selection);
    } else {
      this.chiffreSelectionnee = null;
      const selection = new SelectionChiffre();
      selection.valeur = 0;
      this.selection.emit(selection);
    }
  }

  estSelectionne(chiffre: number): boolean {
    return this.chiffreSelectionnee && this.chiffreSelectionnee === chiffre;
  }

  private calculNombreRestant(grille: Grille): void {
    const tab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grille.estVisible(i, j)) {
          const valeur = grille.getValeur(i, j);
          tab[valeur - 1]++;
        }
      }
    }
    for (let i = 0; i < 9; i++) {
      this.nbRestant[i] = Math.max(9 - tab[i], 0);
    }
    console.log('tab', tab, 'nbRestant', this.nbRestant);
  }

  nombreRestant(chiffre: number): number {
    return this.nbRestant[chiffre - 1];
  }
}
