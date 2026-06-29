import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GrilleComponent } from './component/grille/grille.component';
import { SelectionChiffresComponent } from './component/selection-chiffres/selection-chiffres.component';
import { MenuComponent } from './component/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GrilleComponent, SelectionChiffresComponent, MenuComponent],
})
export class AppComponent {
  title = 'sudokujs';
  derniereValeurSelectionnee = 0;
  niveau = 'facile';
  nombreCasesVides = 0;
  remplissageChiffres: boolean = false;
}
