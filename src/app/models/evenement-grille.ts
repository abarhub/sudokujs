import { TypeEvenementEnum } from './type-evenement.enum';
import { Grille } from './grille';
import { SelectionChiffre } from './selection-chiffre';

export class EvenementGrille {
  typeEvenement: TypeEvenementEnum = TypeEvenementEnum.CREATION_GRILLE;
  grille: Grille | null = null;
  selectionChiffre: SelectionChiffre | null = null;
}
