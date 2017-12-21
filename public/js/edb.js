/**
 * Gerador de Tags Exclusivas - app
 * https://github.com/digitalbocca/gte-app
 *
 * @see https://gte.wedeploy.io
 * @see https://app-gte.wedeploy.io
 * @see https://gte-app.ga
 *
 * @file edb.js
 * @namespace public/js
 * @description Faz o request para o API.
 * @since v0.12.0
 *
 * @copyright (c)2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v2.0.0
 */

$().ready(() => {
  $('#gerarTag').on('click', () => {
    $.get('https://api-geradordetags.wedeploy.io', data => {
      $('#tagGerada').text(data.dados.tagExclusiva)
    })
  })
})
