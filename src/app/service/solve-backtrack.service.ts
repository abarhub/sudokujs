import {Injectable} from '@angular/core';
import {Grille} from '../models/grille';

@Injectable({
  providedIn: 'root'
})
export class SolveBacktrack {

  BOARD_START_INDEX = 0;
  BOARD_SIZE = 9;
  NO_VALUE = 0;
  MIN_VALUE = 1;
  MAX_VALUE = 9;
  SUBSECTION_SIZE = 3;

  public resolution(grille: Grille): void {

  }

  public solve(board: number[][]): boolean {
    for (let row: number = this.BOARD_START_INDEX; row < this.BOARD_SIZE; row++) {
      for (let column: number = this.BOARD_START_INDEX; column < this.BOARD_SIZE; column++) {
        if (board[row][column] === this.NO_VALUE) {
          //console.log('test case', row, column);
          for (let k: number = this.MIN_VALUE; k <= this.MAX_VALUE; k++) {
            board[row][column] = k;
            //console.log('affectation', k, row, column);
            if (this.isValid(board, row, column)) {
              //console.log('trouve', k, row, column);
              if (this.solve(board)) {
                //console.log('solution', board);
                return true;
              }
            }
            board[row][column] = this.NO_VALUE;
          }
          //console.log('aucune valeur trouver pour la case ', row, column, board);
          return false;
        }
      }
    }
    return true;
  }

  private isValid(board: number[][], row: number, column: number): boolean {
    return (this.rowConstraint(board, row)
      && this.columnConstraint(board, column)
      && this.subsectionConstraint(board, row, column));
  }

  private rowConstraint(board: number[][], row: number): boolean {
    const constraint: boolean[] = this.createArrayBoolean(this.BOARD_SIZE);
    for (let column = this.BOARD_START_INDEX; column < this.BOARD_SIZE; column++) {
      if (!this.checkConstraint(board, row, constraint, column)) {
        return false;
      }
    }
    // return IntStream.range(this.BOARD_START_INDEX, this.BOARD_SIZE)
    //   .allMatch(column -> checkConstraint(board, row, constraint, column));
    return true;
  }

  private columnConstraint(board: number[][], column: number): boolean {
    const constraint: boolean[] = this.createArrayBoolean(this.BOARD_SIZE);
    for (let row = this.BOARD_START_INDEX; row < this.BOARD_SIZE; row++) {
      if (!this.checkConstraint(board, row, constraint, column)) {
        return false;
      }
    }
    // return IntStream.range(BOARD_START_INDEX, BOARD_SIZE)
    //   .allMatch(row -> checkConstraint(board, row, constraint, column));
    return true;
  }

  private subsectionConstraint(board: number[][], row: number, column: number): boolean {
    const constraint: boolean[] = this.createArrayBoolean(this.BOARD_SIZE);
    let subsectionRowStart: number = 0;
    if (row < this.SUBSECTION_SIZE) {
      subsectionRowStart = 0;
    } else if (row >= this.SUBSECTION_SIZE && row < this.SUBSECTION_SIZE * 2) {
      subsectionRowStart = this.SUBSECTION_SIZE;
    } else if (row >= this.SUBSECTION_SIZE * 2) {
      subsectionRowStart = this.SUBSECTION_SIZE * 2;
    }
    const subsectionRowEnd: number = subsectionRowStart + this.SUBSECTION_SIZE;

    let subsectionColumnStart: number = 0;
    if (column < this.SUBSECTION_SIZE) {
      subsectionColumnStart = 0;
    } else if (column >= this.SUBSECTION_SIZE && column < this.SUBSECTION_SIZE * 2) {
      subsectionColumnStart = this.SUBSECTION_SIZE;
    } else {
      subsectionColumnStart = this.SUBSECTION_SIZE * 2;
    }
    const subsectionColumnEnd: number = subsectionColumnStart + this.SUBSECTION_SIZE;

    for (let r: number = subsectionRowStart; r < subsectionRowEnd; r++) {
      for (let c: number = subsectionColumnStart; c < subsectionColumnEnd; c++) {
        if (!this.checkConstraint(board, r, constraint, c)) {
          return false;
        }
      }
    }
    return true;
  }

  private checkConstraint(
    board: number[][],
    row: number,
    constraint: boolean[],
    column: number): boolean {
    if (board[row][column] !== this.NO_VALUE) {
      if (!constraint[board[row][column] - 1]) {
        constraint[board[row][column] - 1] = true;
      } else {
        return false;
      }
    }
    return true;
  }

  private createArrayBoolean(size: number): boolean[] {
    const tab = new Array<boolean>();
    for (let i = 0; i < size; i++) {
      tab.push(false);
    }
    return tab;
  }
}
