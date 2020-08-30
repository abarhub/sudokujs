import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SelectionChiffre} from '../../models/selection-chiffre';

@Component({
  selector: 'app-selection-chiffres',
  templateUrl: './selection-chiffres.component.html',
  styleUrls: ['./selection-chiffres.component.scss']
})
export class SelectionChiffresComponent implements OnInit {

  chiffreSelectionnee: number | null = null;

  @Output() selection = new EventEmitter<SelectionChiffre>();

  constructor() {
  }

  ngOnInit(): void {
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
}
