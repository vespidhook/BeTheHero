const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Cria uma informação no back-end
 * PUT: Altera uma informação ni back-end
 * DELETE: Deletar uma informção no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query params: parametros nomeados envidos na rota após "?" (filtors, paginação)
 * Route Params: Parametros ultilizados para identificar recursos
 * Request Body: Corpo da requisição, utilização para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT* FROM users
 * Query Builder: table('users).select('*').where()
 */

app.listen(3333);