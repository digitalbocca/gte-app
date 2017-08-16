# GTE-APP #
## Gerador de Tags Exclusivas - App Frontend ##
### v0.7.0 ###

Um gerador de tags exclusivas para seu canal no youtube.

**Problema:** "Reza a lenda" que, tendo uma tag exclusiva nos seus vídeos, o algoritmo do YouTube entrega nas recomendações outros vídeos do seu canal. Todos os vídeos com o mesma tag são interpretados como relacionados. Vamos testar.

Esta Versão é apenas a APP que consome uma API Geradora da Tag.

## DEPLOY com WeDeploy ##

- Crie um Novo Projeto.
- Altere o nome do Serviço no arquivo `wedeploy.json`.
- Faça o Deploy: `we deploy -p <seu-projeto>`.

Tudo estará rodando em `<service>-<project>.wedeploy.io`.

## EXEMPLO ##

https://app-gte.wedeploy.io

https://gte.wedeploy.io

https://gte-app.ga

## API QUE É UTILIZADA ##

https://api-gte.wedeploy.io

## DOMÍNIO PERSONALIZADO ##

- Criei um Domínio Gratuito na Freenom.
- Configurei um CNAME em branco apontando para `<service>-<project>.wedeploy.io`.
- No painel de controle da WeDeploy nas configurações do serviço inseri o meu domínio.

## HTTPS ##

Passo a passo que eu utilizei.

- Utilizei este Gerador para fazer o Certificado no Let's Encrypt:
https://github.com/wedeploy/letsencrypt

- Utilizei o comando que está no exemplo, alterando apenas as informações pessoais.
- Copiei o arquivo `privkey.pem` para a raiz do meu projeto local (Mesmo nível do wedeploy.json).
- Fiz o Deploy. Funcionou !!!

## CHANGELOG ##

**Notas da Versão v0.7.0**

- Edição do README.
- Melhorias no Código.

**Notas da Versão v0.6.0**

- Adicionados blocos de anúncios AdSense.

**Notas da Versão v0.5.0**

- Adicionado Certificado do Lets Encrypt.
- Imagens de Banner EDB Adicionas.

**Notas da Versão v0.4.1**

- Adicionado wedeploy.json

**Notas da Versão v0.4.0**

- Pronto para o servidor de produção.
- Criada a pasta public para servir os arquivos estáticos.

**Notas da Versão v0.3.0**

- Utiliza apenas uma chamada GET para a API.
- Todos os espaços de publicidade reservados.
- Melhoria no Layout.

**Notas da Versão v0.2.0**

- Teste com espaços para publicidade.
- Melhoria no Algoritmo do Gerador.
- Correção no Layout.
- Adicionado Bootstrap 4 alpha 6

**Notas da Versão v0.1.0**

- Inicio do Controle de Versão.

>(c)2017 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br