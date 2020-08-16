import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {JeuxService} from './service/jeux.service';
import {GrilleComponent} from './component/grille/grille.component';
import {Grille} from './models/grille';
import {SelectionChiffre} from './models/selection-chiffre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sudokujs';
  derniereValeurSelectionnee: number = 0;

  @ViewChild(GrilleComponent) grille: GrilleComponent;

  constructor(private jeux: JeuxService) {
  }

  ngAfterViewInit() {

    // cf : https://commons.wikimedia.org/wiki/File:Sdk_ex00s.gif?uselang=fr
    const tab: number[][] = [
      [2, 8, 3, 4, 1, 9, 7, 4, 6],
      [9, 6, 4, 8, 7, 3, 5, 2, 1],
      [5, 1, 7, 6, 2, 4, 9, 3, 8],
      [1, 5, 6, 7, 4, 2, 3, 8, 9],
      [4, 2, 9, 3, 8, 6, 1, 7, 5],
      [3, 7, 8, 1, 9, 5, 2, 6, 4],
      [8, 9, 5, 4, 3, 7, 6, 1, 2],
      [7, 4, 2, 9, 6, 1, 8, 5, 3],
      [6, 3, 1, 2, 5, 8, 4, 9, 7]
    ];
    const visible: boolean[][] = [
      [true, false, false, false, false, false, false, true, false],
      [false, false, false, false, false, false, true, false, false],
      [false, true, false, true, false, true, false, true, true],
      [true, false, false, true, true, false, false, true, true],
      [false, false, true, false, true, false, true, false, false],
      [true, true, false, false, true, true, false, false, true],
      [true, true, false, true, false, true, false, true, false],
      [false, false, true, false, false, false, false, false, false],
      [false, true, false, false, false, false, false, false, true]
    ];
    const grille: Grille = new Grille(tab, visible);
    this.grille.init2(grille);
  }

  onSelection($event: SelectionChiffre): void {
    this.derniereValeurSelectionnee = $event.valeur;
    this.grille.setSelection(this.derniereValeurSelectionnee);
  }
}
