import { INPUT_QUOTE } from './constants.js';

const inputQuote = quote => ({
  type: INPUT_QUOTE,
  quote,
});

export { inputQuote };
