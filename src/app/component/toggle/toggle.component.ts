import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  _valeur: boolean = false;

  @Input()
  set valeur(valeurChoisie: boolean) {
    console.log('valeurChoisie', valeurChoisie, typeof valeurChoisie);
    this._valeur = valeurChoisie;
    this.envoieValeur();
  }

  get valeur(): boolean {
    return this._valeur;
  }

  @Output()
  valeurSelectionnee: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  envoieValeur(): void {
    this.valeurSelectionnee.emit(this.valeur);
  }
}
