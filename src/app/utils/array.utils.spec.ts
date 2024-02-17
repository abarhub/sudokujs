import {ArrayUtils} from './array.utils';
import {RandomService} from '../service/random.service';

describe('ArrayUtils', () => {

  it('should clone array of array of number', () => {

    const tab = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const res = ArrayUtils.cloneArrayNumber(tab);
    expect(res === tab).toBeFalse();
    expect(res).toEqual(tab);

  });

  it('should clone array of array of number with other array', () => {

    const tab = [[10, 20, 30, 40], [50, 60], [70, 80, 90, 100]];
    const res = ArrayUtils.cloneArrayNumber(tab);
    expect(res === tab).toBeFalse();
    expect(res).toEqual(tab);

  });


  it('should clone array of array of boolean', () => {

    const tab = [[true, false, false], [false, true, false], [false, false, true]];
    const res = ArrayUtils.cloneArrayBoolean(tab);
    expect(res === tab).toBeFalse();
    expect(res).toEqual(tab);

  });


  it('should clone array of array of boolean with other array', () => {

    const tab = [[true, false, false, true], [false, true, false, false], [false, false]];
    const res = ArrayUtils.cloneArrayBoolean(tab);
    expect(res === tab).toBeFalse();
    expect(res).toEqual(tab);

  });


  it('should randomize array of number', () => {

    const tab = [1, 2, 3, 4, 5, 6];
    const tab2 = [1, 5, 3, 2, 6, 4];
    const randomService = new RandomService();
    randomService.setSeed(20);
    const res = ArrayUtils.shuttle(tab, randomService);
    expect(res).toEqual(tab2);

  });


});
