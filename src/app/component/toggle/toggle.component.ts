import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class ToggleComponent {
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

  envoieValeur(): void {
    this.valeurSelectionnee.emit(this.valeur);
  }
}
