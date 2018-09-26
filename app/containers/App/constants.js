/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_QUOTES = 'inspire/App/GET_QUOTES';
export const GET_QUOTES_SUCCESS = 'inspire/App/GET_QUOTES_SUCCESS';
export const GET_QUOTES_FAILURE = 'inspire/App/GET_QUOTES_FAILURE';
export const SAVE_QUOTE = 'inspire/App/SAVE_QUOTE';
export const SAVE_QUOTE_SUCCESS = 'inspire/App/SAVE_QUOTE_SUCCESS';
export const SAVE_QUOTE_FAILURE = 'inspire/App/SAVE_QUOTE_FAILURE';
