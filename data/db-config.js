const knex = require('knex');

const knexconfigure = require('../knexfile.js').development;

module.exports = knex(knexconfigure);