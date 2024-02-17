import { TestBed } from '@angular/core/testing';

import { SolveBacktrackService } from './solve-backtrack.service';

describe('SolveBacktrack', () => {
  let solveBacktrackService: SolveBacktrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    solveBacktrackService = TestBed.inject(SolveBacktrackService);
  });

  it('should be created', () => {
    expect(solveBacktrackService).toBeTruthy();
  });

  const sudokuSimple1: number[][] = [
    [7, 0, 8, 1, 0, 0, 4, 0, 0],
    [6, 0, 5, 0, 4, 0, 0, 0, 7],
    [0, 9, 0, 7, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 7, 0, 4, 6],
    [0, 7, 0, 0, 0, 0, 0, 3, 0],
    [8, 4, 0, 3, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 3, 0, 6, 0],
    [9, 8, 0, 2, 6, 1, 5, 0, 4],
    [0, 0, 0, 0, 0, 8, 9, 0, 3],
  ];

  const sudokuSimple1Solution: number[][] = [
    [7, 2, 8, 1, 3, 6, 4, 5, 9],
    [6, 1, 5, 8, 4, 9, 3, 2, 7],
    [3, 9, 4, 7, 2, 5, 6, 8, 1],
    [5, 3, 1, 9, 8, 7, 2, 4, 6],
    [2, 7, 9, 6, 5, 4, 1, 3, 8],
    [8, 4, 6, 3, 1, 2, 7, 9, 5],
    [1, 5, 7, 4, 9, 3, 8, 6, 2],
    [9, 8, 3, 2, 6, 1, 5, 7, 4],
    [4, 6, 2, 5, 7, 8, 9, 1, 3],
  ];

  const sudokuSimple2: number[][] = [
    [5, 1, 7, 4, 0, 0, 8, 6, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 6, 0, 1, 0, 9, 0],
    [0, 0, 0, 5, 8, 4, 0, 0, 0],
    [0, 0, 4, 3, 0, 0, 1, 0, 0],
    [0, 0, 0, 9, 1, 7, 0, 0, 0],
    [0, 9, 0, 2, 0, 6, 3, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 0],
    [3, 6, 2, 1, 0, 0, 5, 0, 7],
  ];

  const sudokuSimple2Solution: number[][] = [
    [5, 1, 7, 4, 2, 9, 8, 6, 3],
    [6, 2, 9, 8, 7, 3, 4, 5, 1],
    [8, 4, 3, 6, 5, 1, 7, 9, 2],
    [1, 3, 6, 5, 8, 4, 2, 7, 9],
    [9, 7, 4, 3, 6, 2, 1, 8, 5],
    [2, 5, 8, 9, 1, 7, 6, 3, 4],
    [7, 9, 5, 2, 4, 6, 3, 1, 8],
    [4, 8, 1, 7, 3, 5, 9, 2, 6],
    [3, 6, 2, 1, 9, 8, 5, 4, 7],
  ];

  /* sudoku moyen */

  const sudokuMoyen1: number[][] = [
    [0, 0, 0, 4, 7, 0, 8, 0, 0],
    [0, 7, 1, 0, 0, 6, 0, 2, 0],
    [0, 0, 0, 0, 5, 0, 7, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 7, 3],
    [0, 8, 0, 2, 4, 7, 0, 5, 0],
    [6, 5, 7, 0, 0, 0, 0, 8, 0],
    [0, 0, 6, 0, 2, 0, 0, 0, 0],
    [0, 9, 0, 7, 0, 0, 3, 1, 0],
    [0, 0, 5, 0, 3, 9, 0, 0, 0],
  ];

  const sudokuMoyen1Solution: number[][] = [
    [5, 6, 9, 4, 7, 2, 8, 3, 1],
    [8, 7, 1, 3, 9, 6, 5, 2, 4],
    [3, 2, 4, 1, 5, 8, 7, 9, 6],
    [9, 4, 2, 6, 8, 5, 1, 7, 3],
    [1, 8, 3, 2, 4, 7, 6, 5, 9],
    [6, 5, 7, 9, 1, 3, 4, 8, 2],
    [7, 3, 6, 5, 2, 1, 9, 4, 8],
    [2, 9, 8, 7, 6, 4, 3, 1, 5],
    [4, 1, 5, 8, 3, 9, 2, 6, 7],
  ];

  it('existe une solution', () => {
    const tab: number[][] = sudokuSimple1;
    const res = solveBacktrackService.existeSolution(tab);
    expect(res).toBeTrue();
  });

  it('résolution sudoku0 simple 1', () => {
    const tab: number[][] = sudokuSimple1;

    const tabSolution: number[][] = sudokuSimple1Solution;

    const res = solveBacktrackService.solution(tab);
    expect(res).toEqual([tabSolution]);
  });

  it('résolution sudoku simple 2', () => {
    const tab: number[][] = sudokuSimple2;

    const tabSolution: number[][] = sudokuSimple2Solution;

    const res = solveBacktrackService.solution(tab);
    expect(res).toEqual([tabSolution]);
  });

  it('résolution sudoku moyen 1', () => {
    const tab: number[][] = sudokuMoyen1;

    const tabSolution: number[][] = sudokuMoyen1Solution;

    const res = solveBacktrackService.solution(tab);
    expect(res).toEqual([tabSolution]);
  });

  it('résolution sudoku moyen 2', () => {
    const tab: number[][] = sudokuMoyen1;

    const tabSolution: number[][] = sudokuMoyen1Solution;

    const res = solveBacktrackService.solution(tab);
    expect(res).toEqual([tabSolution]);
  });
});
