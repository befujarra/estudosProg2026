## Interface no TypeScript

Uma `interface` é como um **contrato** que define a forma de um objeto — quais propriedades ele deve ter e qual o tipo de cada uma.

```typescript
interface Spaceship {
  name: string;       // texto
  pilot: string;      // texto
  crewLimit: number;  // número
  crew: string[];     // array de textos
  inMission: boolean; // verdadeiro ou falso
}
```

Isso significa: **todo objeto do tipo `Spaceship` obrigatoriamente precisa ter essas 5 propriedades com esses tipos.**

Se tentar criar um objeto que não respeita o contrato, o TypeScript acusa erro:

```typescript
// ERRO: falta a propriedade "pilot"
const nave: Spaceship = {
  name: "Millennium Falcon",
  crewLimit: 10,
  crew: [],
  inMission: false,
};
```

Quando você usa corretamente:

```typescript
const nave: Spaceship = {
  name: "Millennium Falcon",
  pilot: "Han Solo",
  crewLimit: 10,
  crew: [],
  inMission: false,
};
```

O TypeScript garante que `nave.pilot` sempre é uma `string`, então você nunca vai acessar uma propriedade errada por engano.

---

**Interface vs Type** — no TypeScript você pode usar `type` de forma parecida:

```typescript
type Spaceship = {
  name: string;
  pilot: string;
  // ...
}
```

Para objetos simples como esse, funcionam igual. A diferença aparece em casos mais avançados — `interface` é mais indicada para objetos e classes, `type` é mais flexível para outros usos.

o inteface então é como se fosse uma delcaração de objeto ou classe, porem adaptada pro TS onde se tem a tipagem

Exatamente! É uma boa forma de pensar nisso.

Fazendo uma comparação direta:

**JavaScript puro** — você cria um objeto sem nenhuma garantia:

```javascript
const nave = {
  name: "Falcon",
  pilot: "Han Solo",
  crewLimit: 10,
  crew: [],
  inMission: false,
};
// JS não reclama se você colocar crewLimit: "dez" ou esquecer uma propriedade
```

**TypeScript com interface** — você define o "molde" antes:

```typescript
interface Spaceship {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}

const nave: Spaceship = { ... } // agora o TS valida tudo
```

A interface não gera nenhum código JavaScript no final — ela existe **só em tempo de desenvolvimento** para o TypeScript checar se você está usando os objetos corretamente. Quando compila, ela some.

A diferença em relação a uma **classe** é que a classe também define comportamento (métodos, construtor, herança real), enquanto a interface só descreve a  **estrutura dos dados** . É mais leve e mais simples quando você só precisa tipar um objeto.

inteface é entao é uma forma de tipar um objeto, eu crio uma interface e na hora de criar um objeto, eu passo o nome da interface como se fosse o tipo, e entao o meu objeto herda o molde e eu preciso passar exatamente os tipos de dados que minha inteface tem pro objeto

Isso! Resumiu perfeitamente.

O fluxo é exatamente esse:

```typescript
// 1. Defino o molde
interface Spaceship {
  name: string;
  crewLimit: number;
}

// 2. Uso a interface como tipo na hora de declarar o objeto
const nave: Spaceship = {
  name: "Falcon",
  crewLimit: 10,
};
```

E o TS vai te obrigar a respeitar o molde em 3 situações:

* **Propriedade faltando** → erro
* **Tipo errado** → erro
* **Propriedade a mais** que não está na interface → erro

Uma coisa extra útil: se uma propriedade for  **opcional** , você usa `?`:

```typescript
interface Spaceship {
  name: string;
  crewLimit: number;
  description?: string; // pode ou não existir no objeto
}
```

Assim o objeto pode ter `description` ou não — o TS aceita os dois casos.

eu consigo entao criar uma interface e uma classe pro mesmo objeto?

Sim! E é um padrão muito comum no TypeScript.

A interface define o  **molde dos dados** , a classe define o  **comportamento** :

```typescript
interface ISpaceship {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}

class Spaceship implements ISpaceship {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;

  constructor(name: string, pilot: string, crewLimit: number) {
    this.name = name;
    this.pilot = pilot;
    this.crewLimit = crewLimit;
    this.crew = [];
    this.inMission = false;
  }

  addCrew(member: string): void {
    this.crew.push(member);
  }
}
```

A palavra-chave é `implements` — ela diz ao TS:  *"essa classe precisa ter tudo que a interface exige"* . Se faltar alguma propriedade da interface, o TS acusa erro na classe.

A vantagem disso é  **separação de responsabilidades** :

* A interface descreve **o que é** o objeto
* A classe descreve **o que ele faz**

Isso também permite que você tenha **várias classes** implementando a mesma interface:

```typescript
class Fighter implements ISpaceship { ... }
class Freighter implements ISpaceship { ... }
```

As duas são `ISpaceship`, mas podem ter comportamentos completamente diferentes internamente.

e esses comportamentos diferentes seriam polimorfismo?

Exatamente! Isso é polimorfismo.

O conceito é:  **objetos de tipos diferentes respondem ao mesmo método de formas diferentes** .

```typescript
interface ISpaceship {
  name: string;
  sendToMission(): void; // mesmo método nas duas classes
}

class Fighter implements ISpaceship {
  name = "X-Wing";

  sendToMission(): void {
    console.log(`${this.name} foi para combate!`);
  }
}

class Freighter implements ISpaceship {
  name = "Millennium Falcon";

  sendToMission(): void {
    console.log(`${this.name} foi entregar carga!`);
  }
}
```

O poder aparece quando você trata os dois como o mesmo tipo:

```typescript
const ships: ISpaceship[] = [new Fighter(), new Freighter()];

for (const ship of ships) {
  ship.sendToMission(); // cada um executa do seu jeito
}

// X-Wing foi para combate!
// Millennium Falcon foi entregar carga!
```

Você chamou o **mesmo método** `sendToMission()` nos dois, mas cada classe executou de forma diferente. Isso é polimorfismo.

A interface foi o que tornou isso possível — ela garantiu que os dois objetos têm o método `sendToMission`, então você pode tratá-los de forma uniforme sem saber qual classe é qual.

e o que seria o tipo VOID no metodo sendToMission

`void` significa que a função  **não retorna nada** .

Comparando com funções que retornam algo:

```typescript
function soma(a: number, b: number): number {
  return a + b; // retorna um number
}

function sendToMission(): void {
  console.log("Nave enviada!"); // só executa, não retorna nada
}
```

Se você tentar retornar algo numa função `void`, o TS acusa erro:

```typescript
function sendToMission(): void {
  return "missão iniciada"; // ERRO
}
```

---

No JavaScript puro, quando uma função não tem `return`, ela retorna `undefined` automaticamente. O `void` no TypeScript é basicamente uma forma de **declarar explicitamente** essa intenção — dizendo que quem chamar essa função não deve esperar nenhum valor de volta.

```typescript
const resultado = sendToMission();
console.log(resultado); // undefined — e o TS já te avisa que não tem nada útil aqui
```

Resumindo: use `void` quando a função existe só pelo **efeito que ela causa** (salvar, imprimir, modificar algo), não pelo valor que retorna.
