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
 * @description Inicia um servidor local de desenvolvimento na porta 3000.
 * @since v0.14.0
 *
 * @copyright (c)2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v1.1.0
 */

process.env.PORT = 8080
process.env.VER = 'v0.15.0'

require('./server.js')
