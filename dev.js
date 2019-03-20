'use strict'

/**
 * Gerador de Tags Exclusivas - app
 * https://github.com/digitalbocca/gte-app
 *
 * @see https://gte.wedeploy.io
 * @see https://app-gte.wedeploy.io
 * @see https://gte-app.ga
 *
 * @file dev.js
 * @namespace root
 * @description Inicia um servidor local de desenvolvimento na porta 8080.
 * @since v0.14.0
 *
 * @copyright (c)2017-2019 Estúdio Digital Bocca
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.3.0
 */

process.env.PORT = 8080
process.env.VER = 'v0.21.1'

require('./server')
