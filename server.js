/**
 * server.js - Parte do Projeto digitalbocca/gte-app
 * https://github.com/digitalbocca/gte-app
 *
 * @see https://gte.wedeploy.io
 * @see https://app-gte.wedeploy.io
 * @see https://gte-app.ga
 *
 * @file Serve os arquivos estáticos para o browser.
 *
 * @author Gabriel Bertola Bocca <gabriel@estudiodigitalbocca.com.br>
 * @copyright 2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br
 */

var express = require('express')
var serveStatic = require('serve-static')
var app = express()

app.use(serveStatic('public', {'index': ['index.html', 'index.htm']}))
app.listen(process.env.PORT)
// app.listen(80)
