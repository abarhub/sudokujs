import {GrilleUtils} from './grille.utils';


describe('GrilleUtils', () => {

  it('meme carre', () => {
    const res = GrilleUtils.memeCarre(1, 1, 1, 1);
    expect(res).toBeTruthy();

    const res2 = GrilleUtils.memeCarre(0, 0, 1, 1);
    expect(res2).toBeTruthy();

    const res3 = GrilleUtils.memeCarre(2, 2, 1, 1);
    expect(res3).toBeTruthy();
  });

  it('carre different', () => {
    const res = GrilleUtils.memeCarre(0, 0, 0, 3);
    expect(res).toBeFalse();

    const res2 = GrilleUtils.memeCarre(0, 0, 1, 3);
    expect(res2).toBeFalse();

    const res3 = GrilleUtils.memeCarre(0, 0, 0, 6);
    expect(res3).toBeFalse();

    const res4 = GrilleUtils.memeCarre(0, 0, 3, 0);
    expect(res4).toBeFalse();
  });

  it('meme carre complet', () => {

    const listeLimite = [
      [0, 3, 0, 3],
      [0, 3, 3, 6],
      [0, 3, 6, 9],
      [3, 6, 0, 3],
      [3, 6, 3, 6],
      [3, 6, 6, 9]
    ];

    for (const limite of listeLimite) {
      const debutLigne = limite[0];
      const maxLigne = limite[1];
      const debutColonne = limite[2];
      const maxColonne = limite[3];
      for (let ligne1 = debutLigne; ligne1 < maxLigne; ligne1++) {
        for (let colonne1 = debutColonne; colonne1 < maxColonne; colonne1++) {
          for (let ligne2 = debutLigne; ligne2 < maxLigne; ligne2++) {
            for (let colonne2 = debutColonne; colonne2 < maxColonne; colonne2++) {
              const res = GrilleUtils.memeCarre(ligne1, colonne1, ligne2, colonne2);
              expect(res).toBeTruthy();
            }
          }
        }
      }
    }

  });
});
