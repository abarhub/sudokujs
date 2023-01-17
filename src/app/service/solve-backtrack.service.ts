import {Injectable} from '@angular/core';
import {Grille} from '../models/grille';
import {ArrayUtils} from '../utils/array.utils';

@Injectable({
  providedIn: 'root'
})
export class SolveBacktrackService {

  BOARD_START_INDEX = 0;
  BOARD_SIZE = 9;
  NO_VALUE = 0;
  MIN_VALUE = 1;
  MAX_VALUE = 9;
  SUBSECTION_SIZE = 3;

  public resolution(grille: Grille): void {

  }

  public existeSolution(board: number[][]): boolean {
    return this.solve(board, 1) > 0;
  }

  public solutionUnique(board: number[][]): boolean {
    return this.solve(board, 2) > 0;
  }

  public solution(board: number[][]): number[][][] {
    const listeSolutions: number[][][] = [];
    this.solve(board, -1, listeSolutions);
    return listeSolutions;
  }

  private solve(board: number[][], maxSolution: number, listeSolutions: number[][][] | null = null): number {
    let nbSolution: number = 0;
    for (let row: number = this.BOARD_START_INDEX; row < this.BOARD_SIZE; row++) {
      for (let column: number = this.BOARD_START_INDEX; column < this.BOARD_SIZE; column++) {
        if (board[row][column] === this.NO_VALUE) {
          for (let k: number = this.MIN_VALUE; k <= this.MAX_VALUE; k++) {
            board[row][column] = k;
            if (this.isValid(board, row, column)) {
              const nbSousSolution = this.solve(board, maxSolution, listeSolutions);
              nbSolution += nbSousSolution;
              if (nbSolution > 0 && maxSolution > 0 && nbSolution <= maxSolution) {
                return nbSolution;
              }
            }
            board[row][column] = this.NO_VALUE;
          }
          return 0;
        }
      }
    }
    nbSolution++;
    if (listeSolutions !== null) {
      listeSolutions.push(ArrayUtils.cloneArrayNumber(board));
    }
    return nbSolution;
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
    return true;
  }

  private columnConstraint(board: number[][], column: number): boolean {
    const constraint: boolean[] = this.createArrayBoolean(this.BOARD_SIZE);
    for (let row = this.BOARD_START_INDEX; row < this.BOARD_SIZE; row++) {
      if (!this.checkConstraint(board, row, constraint, column)) {
        return false;
      }
    }
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
