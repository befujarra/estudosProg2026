## 🧠 Exercício – TypeScript (Prática de Tipagem)

Crie um arquivo em **TypeScript** contendo as **4 funções** descritas abaixo.

### 🎯 Objetivo

Praticar TypeScript com foco em  **tipagem** , manipulação de objetos e lógica.

### 🧪 Teste

Você pode testar chamando as funções diretamente no navegador (via console) ou usando prompts.

### 💡 Dica

Para simplificar, você pode criar um **array global vazio** para armazenar as naves (spaceships) e utilizá-lo nas funções.

### 🚀 Desafio (Opcional)

Se quiser ir além, utilize um HTML simples (como o da aula prática) para criar:

* Entrada de dados (prompt ou inputs)
* Saída de informações
* Um **menu interativo**

---

## 📌 Requisitos das Funções

### 1️⃣ Criar Nave

Crie uma função que salve um objeto `spaceship` com, no mínimo, as seguintes propriedades:

* `name`: nome da nave (inserido pelo usuário)
* `pilot`: nome do piloto (inserido pelo usuário)
* `crewLimit`: limite máximo de tripulação (inserido pelo usuário)
* `crew`: array de strings (inicialmente vazio)
* `inMission`: booleano (inicialmente `false`)

---

### 2️⃣ Adicionar Tripulante

Crie uma função que:

* Adicione um membro à tripulação de uma nave
* **Regra:** o número de tripulantes **não pode ultrapassar** o limite (`crewLimit`)

---

### 3️⃣ Enviar para Missão

Crie uma função que:

* Envie uma nave para missão **apenas se ela ainda não estiver em missão**
* **Regra:** a nave só pode ser enviada se tiver **pelo menos 1/3 da tripulação preenchida**
* Arredondar o valor **para baixo**

---

### 4️⃣ Listar Naves

Crie uma função que:

* Liste todas as naves cadastradas
* Mostre todas as suas informações

---

## ⚙️ Observações

* Use tipagem do TypeScript (interfaces ou types)
* Estruture bem o código
* Use nomes de funções claros e objetivos
* Trate possíveis erros (ex: nave não encontrada, limite excedido, etc.)
