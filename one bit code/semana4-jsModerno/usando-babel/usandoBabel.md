babel é um compilador de javascript

compilador é uma ferramenta que permite converter o codigo de uma linguagem pára outra linguagem

babel é compilador de javascript para javascript

converte codigos mais recentes para codigos mais antigos

 transformação de sintaxe
 polyfill de recursos nao existentes no ambiente alvo
 transformação de codigo

babeljs.io



babel
npm install --save-dev
ou
npm i -D @babel/core @babel/cli @babel/preset-env

@babel/core - nucleo do babel
@babel/cli - interface de linha de comando do babel
@babel/preset-env - preset que permite converter codigos mais recentes para codigos mais antigos    


rodar o babel depois de instalado
npx babel script.js - executa e mostra no terminal
npx babel script.js --out-file nomeDoArquivoDestino.js - executa e salva em um arquivo

com isso ele gera o arquivo destino e ja manda o codigo pro arquivo
porem é preciuso usar o preset-env para que ele converta o codigo para uma versão mais antiga

npx babel script.js --out-file nomeDoArquivoDestino.js --presets @babel/preset-env

assim, todo o codigo que for escrito no arquivo script.js será convertido para uma versão mais antiga e salva no arquivo nomeDoArquivoDestino.js

é possivel usar o babel para converter toda a pasta de arquivos
npx babel pastaOrigem --out-dir pastaDestino --presets @babel/preset-env

é possivel alterar o package.json para que ele execute o babel automaticamente

"scripts": {
  "babel": "babel script.js --out-file nomeDoArquivoDestino.js --presets @babel/preset-env"
}

assim, toda vez que for digitado npm run babel, ele executará o babel