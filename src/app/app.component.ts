import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {
  title = 'sudokujs';
  derniereValeurSelectionnee = 0;
  niveau = 'facile';
  nombreCasesVides = 0;
  remplissageChiffres: boolean = false;

  constructor() {}
}
