protocolo de comunicação

arquitetura cliente e servidor

cliente - geralmente um navegador web
 envia requisições a um servidor

 servidor - geralmente uma maquin acessivel pela internet recebe requisição, processa e envia de volta uma resposta para o cliente

 caracteristicas 
 simples e facil de entender e utilizar

 extensivel, permite adicionar novas funcionalidades facilmente

 stateless ou sem estado (mas como sessao)

 Estrutura Requisições e Respostas

 <h1>Requisições</h1>
 metodo - Define o tipo de operaçlões a serem realizadas (GET, POST, OPTIONS,HEAD)
 caminho - o caminho do recurso a ser obtido, basicamente a url do recurso sem a parte inicial (protocolo, dominio e porta)
 versao - o protocolo http possui diferentes versoes, com suas respectivas particularidades, logo é preciso definir a versao que se esta utilizando
 cabeçalho - informações adicionais entre cliente e servidor
 corpo - Conteudo da mensagem, usando, por exemplo ao enviar dados via POST




<h1>Resposta</h1>
