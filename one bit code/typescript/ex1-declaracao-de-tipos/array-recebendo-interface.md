Exatamente!

O `Spaceship[]` significa  **array de objetos do tipo Spaceship** . Cada item dentro desse array precisa respeitar o molde da interface.

```typescript
const spaceships: Spaceship[] = [];

// Correto — objeto respeita a interface
spaceships.push({
  name: "Falcon",
  pilot: "Han Solo",
  crewLimit: 10,
  crew: [],
  inMission: false,
});

// ERRO — falta propriedades da interface
spaceships.push({
  name: "X-Wing",
});
```

A sintaxe `Tipo[]` é a forma de declarar array no TypeScript. Funciona com qualquer tipo:

```typescript
const nomes: string[] = [];       // só strings
const idades: number[] = [];      // só numbers
const naves: Spaceship[] = [];    // só objetos no formato Spaceship
```

Então sim — o TS vai garantir que nenhum objeto "errado" entre nesse array.
