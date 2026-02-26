aula sobre npm

npm ou node package manager, é um gerenciador de pacotes do node.JS

node é o framework que permite rodar o js fora do navegador

por que o nom existe?
    - os modulos que ja vimos são muitos uteis para organizar nossas aplicações, mas essa nao é sua unica vantagem
    - com o npm programadores podem compartilhar seus modeulos com outros programadores
    - o npm é um conjunto de ferramentas que permite compartilhar os modulos na internet, baixar modulos para nosso proprio projeto e gerenciar os modulos instalados
    - isso tudo alinhado ao poder da comunidade open source permite aumentar a nossa produtividade (princiopio dry, dont repeat yourself)

    mais populares npm e yarn

o npm tambem pode ser visto como 3 recursos que trabalham juntos
    - uma ferramenta de linha de comando para executar o npm
    - repositorio online depacotes, onde ficam hospedados os modulos que podemos baixar
    - o site https://npmjs.com onde podemos navegar pelos modulos existentes no repositorio

    exemplo de uso
    
    entrar dentro da pasta do projeto
    npm init
    npm install --save lodash
    por exemplo, o lodash é uma biblioteca que facilita o trabalho com arrays e objetos


instalação global
    npm install -g eslint
    npm install --global sass - para instalar o sass globalmente
    npm uninstall -g eslint - para desinstalar o eslint globalmente
    npm uninstall --global sass - para desinstalar o sass globalmente
    
    a instalação global é feita para ferramentas que serão usadas em varios projetos
    é como se fosse uma ferramenta que voce instala no seu computador e pode usar em qualquer lugar
    
    instalação local
        npm install --save-dev eslint
        npm install --save-dev sass
        npm uninstall --save-dev eslint
        npm uninstall --save-dev sass
        
    a instalação local é feita para ferramentas que serão usadas em um projeto especifico
    é como se fosse uma ferramenta que voce instala no seu projeto e só pode usar nesse projeto

