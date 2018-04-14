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
 * @copyright (c)2017-2018 Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.2.0
 */

const cors = require('cors')
const express = require('express')
const path = require('path')

const app = express()

require('pug')

app.use(cors())
app.use(express.static(path.join(__dirname, '/public')))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log('Servidor EDB Iniciado na Porta:', process.env.PORT)
})
