import { INPUT_QUOTE, SAVE_QUOTE } from './constants.js';

const inputQuote = quote => ({
  type: INPUT_QUOTE,
  quote,
});

const saveQuote = quote => ({
  type: SAVE_QUOTE,
  quote,
});

export { inputQuote, saveQuote };
