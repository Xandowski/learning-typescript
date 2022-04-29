# Prettier

Vamos utilizar o prettier para formatar o nosso código e deixar padronizado como por exemplo, usar ; ou não, aspas duplas ou aspas simples tamanho da linha, etc.

Instalação:

```sh
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Agora no nosso arquivo .eslint precisamos adicionar as extensões ficando assim:

```json
"extends": [
  "eslint:recommended",
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:prettier/recommended"
]
```

Vamos criar um arquivo .prettierrc.js e incluir o seguinte:

```js
module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
}
```

Aqui são configurações pessoais, por exemplo o ```semi: false``` é pra não colocar ; no final o ```trailingComma: 'all'``` ele adiciona virgula no final de um objeto por exemplo, ```singleQuote: true``` para aspas duplas, ```printWidth: 80``` é a quantidade de caracteres por linha que ele vai quebrar automatico e ```tabWidth: 2``` é o espaçamento do tab, vou utilizar 2.

Para que ele formate automatico quando salvar o arquivo, basta incluir essas configurações no settings.json global ou dentro da pasta .vscode.

```json
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll": true
}
```

Agora faça o teste, vá para o arquivo index.ts escreva um código fora dos padrões que você configurou e salve o arquivo, ele ira formatar seu código para as configurações feitas no .prettierrc.js.
