# GTE-APP #
## Gerador de Tags Exclusivas - App Frontend ##
### v0.17.0 ###

[![Maintainability](https://api.codeclimate.com/v1/badges/6acf83274edb76dfe6c7/maintainability)](https://codeclimate.com/github/digitalbocca/gte-app/maintainability)

Um gerador de tags exclusivas para seu canal no YouTube.

**Problema:** "Reza a lenda" que, tendo uma tag exclusiva nos seus vídeos, o algoritmo do YouTube entrega nas recomendações outros vídeos do seu canal. Todos os vídeos com o mesma tag são interpretados como relacionados. Vamos testar.

Esta Versão é apenas a APP que consome uma API Geradora da Tag.

## DEPLOY com WeDeploy ##

- Crie um Novo Projeto.
- Altere o nome do Serviço no arquivo `wedeploy.json`.
- Faça o Deploy: `we deploy -p <seu-projeto>`.

**Ou configure seu deploy automático utilizando o GitHub**

Tudo estará rodando em `<service>-<project>.wedeploy.io`.

## EXEMPLO ##

https://app-gte.wedeploy.io

https://gte.wedeploy.io

https://gte-app.ga

## API QUE É UTILIZADA ##

https://api-geradordetags.wedeploy.io

## DOMÍNIO PERSONALIZADO ##

- Criei um Domínio Gratuito na Freenom.
- Configurei um CNAME em branco apontando para `<service>-<project>.wedeploy.io`.
- No painel de controle da WeDeploy nas configurações do serviço inseri o meu domínio.

## HTTPS ##

- Gerado Automaticamente pelo WeDeploy.

## CHANGELOG ##

- Veja no Arquivo CHANGELOG.md

>(c)2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br