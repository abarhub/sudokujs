import {ArrayUtils} from './array.utils';

describe('ArrayUtils', () => {

  it('should clone array of array of number', () => {

    const tab = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let res = ArrayUtils.cloneArrayNumber(tab);
    expect(res === tab).toBeFalse();
    expect(res).toEqual(tab);

  });


});
