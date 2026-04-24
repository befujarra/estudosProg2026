- sua aplicação deverá utilizar a bibilioteca json-server para simular um backend que armazena transações financeiras ✅

-transações devem possuir, pelo menos, as propriedades id (gerenciados pelo json-server), nome e valor✅

-a aplicação devera mostrar na pagina todas as transações salvas no backend

-a aplicação devera ter um formulario para criar uma nova transação no backend(sem atualizar a pagina)atraves de um POST✅

-novas transações criadas devem aparecer na lista de todas as transações assim que sao criadas, tudo isso sem atualizar a pagina

-a aplicação devera permitir editar os dados de uma transação atraves de uma requisição PUT(o PUT funciona da mesma forma que o POST, enviando dados a serem atualizados no body e com o ID do recurso a ser editado no URL)

-a aplicação devera permitir excluir uma transação atraves de uma requisição DELETE(as requisições DELETE nçao precisam de um body, apenas do ID do recurso a ser excluido na url)

-a aplicação tambem devera mostrar na pagina o saldo total que é calculado somando todos os valores das transações(que podem ser positivos ou negativos)

-o valoir do saldo total deve estar sempre atualizado na tela, ou seja, ao criar, editar ou excluir uma transação o saldo devera refletir o novo saldo