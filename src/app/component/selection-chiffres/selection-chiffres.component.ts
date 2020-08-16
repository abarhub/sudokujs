import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SelectionChiffre} from '../../models/selection-chiffre';

@Component({
  selector: 'app-selection-chiffres',
  templateUrl: './selection-chiffres.component.html',
  styleUrls: ['./selection-chiffres.component.scss']
})
export class SelectionChiffresComponent implements OnInit {

  @Output() selection = new EventEmitter<SelectionChiffre>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectionChiffre(chiffre: number): void {
    const selection = new SelectionChiffre();
    selection.valeur = chiffre;
    this.selection.emit(selection);
  }
}
