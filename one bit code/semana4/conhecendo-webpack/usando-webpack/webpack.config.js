
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   entry: {
    index: './src/index.js'//ponto de entrada
   },
   mode: 'development',//modo de operação
   module: {
    rules: [
      { 
        test: /\.css$/, //tipo de arquivo que o loader vai ler
        use: [MiniCssExtractPlugin.loader, 'css-loader'] //loader que vai ler o arquivo
      }
    ]
   },

   plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
   ]
   
}
