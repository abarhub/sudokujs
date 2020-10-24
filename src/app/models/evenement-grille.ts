import {TypeEvenementEnum} from './type-evenement.enum';
import {Grille} from './grille';
import {SelectionChiffre} from './selection-chiffre';

export class EvenementGrille {
  typeEvenement: TypeEvenementEnum;
  grille: Grille | null;
  selectionChiffre: SelectionChiffre | null;
}
