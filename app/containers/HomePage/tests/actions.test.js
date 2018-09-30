import { INPUT_QUOTE } from '../constants';

import { inputQuote } from '../actions';

describe('HomePage Actions', () => {
  describe('inputQuote', () => {
    it('should return the correct type and the input quote', () => {
      const quote = 'Shoot for the moon and the stars';
      const expectedResult = {
        type: INPUT_QUOTE,
        name: quote,
      };

      expect(inputQuote(quote)).toEqual(expectedResult);
    });
  });
});
