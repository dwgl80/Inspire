const { Pool } = require('pg');

const connection = {
  user: 'duss',
  host: 'localhost',
  database: 'inspire',
  password: '',
  port: 5432,
};

const pool = new Pool(connection);

const getQuotes = cb => {
  const query = `select * from quotes`;
  pool
    .query(query)
    .then(res => cb(res))
    .catch(err => console.log(err));
};

const saveQuote = (params, cb) => {
  const values = [params.quote];
  const query = `insert into quotes (quote) values ($1) returning *`;
  pool
    .query(query, values)
    .then(res => cb(res))
    .catch(err => console.log(err));
};

module.exports = {
  getQuotes,
  saveQuote,
};
