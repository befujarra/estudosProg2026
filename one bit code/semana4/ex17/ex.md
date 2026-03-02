### Estruturando um Projeto Moderno

Seu objetivo nesse exercício é preparar toda a estrutura necessária para trabalhar em um projeto front-end moderno unificando todo o conhecimento aprendido até o momento.

Você deverá criar um projeto npm e instalar nele o webpack e o babel, integrar o babel ao webpack utilizando o babel-loader (que pode ser instalado através do npm). Você também deverá integrar o css ao webpack, utilizando o style-loader e o css-loader (ambos podem ser instalados através do npm).

Para executar o webpack você deverá criar um script chamado “build”. Além disso, a saída do webpack deve ser nomeada de acordo com o nome do ponto de entrada no formato “[name].min.js” e o seu conteúdo deve estar minificado.

Por fim, você deve testar seu projeto criando uma página html simples que seja capaz de carregar a estilização e o javascript de saída do webpack corretamente.


criar um projeto
iniciar o node
intalar o babel
instalar o webpack
instalar o babel-loader
instalar o style-loader
instalar o css-loader
criar um script chamado build
configurar o webpack
configurar o babel
configurar o style-loader
configurar o css-loader
criar uma página html simples
carregar a estilização e o javascript de saída do webpack corretamente

comandos de instalação
npm init -y
npm install --save-dev webpack webpack-cli
npm install --save-dev babel-loader @babel/core @babel/preset-env
npm install --save-dev style-loader css-loader
npm install --save-dev mini-css-extract-plugin

configuração do webpack usando o loader e o plugin

import path from 'path'
import { fileURLToPath } from 'url'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

module.exports = {
   entry: {
    index: './src/index.js'
   },
   mode: 'development',
   output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
   },
   module: {
    rules: [
      { 
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
   },
   plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
   ]
}
