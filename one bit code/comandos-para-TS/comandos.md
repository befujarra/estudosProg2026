## Snippets

1. Crie uma pasta, inicialize um projeto com o npm e instale o typescript:
   ```bash
   mkdir primeiro-projeto-typescript && cd primeiro-projeto-typescript
   npm init -y
   npm install --save-dev typescript
   ```
2. Crie uma pasta src e dentro dela um arquivo index.ts:
   ```bash
   mkdir src && touch src/index.ts
   ```
3. Adicione o script abaixo ao arquivo package.json:
   Obs.: Repare que estamos utilizando uma outra configuração do compilador que permite compilar automaticamente nosso código TS a cada mudança que fizermos.
   **`Atenção!`** Nas versões mais recentes do TypeScript o parâmetro “watch” não é mais utilizado através do arquivo de configuração, e sim diretamente no comando de execução na forma da flag “--watch”.
   ```json
   	"scripts": {
       "tsc-watch": "tsc --watch"
     },
   ```
4. Crie o arquivo tsconfig.json e adicione o seguinte conteúdo:
   ```json
   {
     "compilerOptions": {
       "target": "ES5",
       "outDir": "dist"
     }
   }
   ```
5. Agora já podemos executar o comando:
   ```bash
   npm run tsc-watch
   ```
