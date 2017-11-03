'use strict'

/**
 * Gerador de Tags Exclusivas - app
 * https://github.com/digitalbocca/gte-app
 *
 * @see https://gte.wedeploy.io
 * @see https://app-gte.wedeploy.io
 * @see https://gte-app.ga
 *
 * @file server.js
 * @namespace root
 * @description Serve os arquivos estáticos para o browser.
 * @since v0.1.0
 *
 * @copyright (c)2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.1.0
 */

const express = require('express')
const pug = require('pug')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static(__dirname + '/public'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

// app.listen(process.env.PORT)

app.listen(3000)
