"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spaceships = [];
function createSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceships.push(spaceship);
    console.log(`Nave "${name}" criada com sucesso.`);
}
function addCrewMember(shipName, member) {
    const ship = spaceships.find((s) => s.name === shipName);
    if (!ship) {
        console.log(`Nave "${shipName}" não encontrada.`);
        return;
    }
    if (ship.crew.length >= ship.crewLimit) {
        console.log(`Limite de tripulação da nave "${shipName}" atingido.`);
        return;
    }
    ship.crew.push(member);
    console.log(`"${member}" adicionado à nave "${shipName}".`);
}
function sendToMission(shipName) {
    const ship = spaceships.find((s) => s.name === shipName);
    if (!ship) {
        console.log(`Nave "${shipName}" não encontrada.`);
        return;
    }
    if (ship.inMission) {
        console.log(`A nave "${shipName}" já está em missão.`);
        return;
    }
    const minCrew = Math.floor(ship.crewLimit / 3);
    if (ship.crew.length < minCrew) {
        console.log(`A nave "${shipName}" precisa de pelo menos ${minCrew} tripulante(s) para partir.`);
        return;
    }
    ship.inMission = true;
    console.log(`Nave "${shipName}" enviada para missão!`);
}
function listSpaceships() {
    if (spaceships.length === 0) {
        console.log("Nenhuma nave cadastrada.");
        return;
    }
    for (const ship of spaceships) {
        console.log(`
Nave: ${ship.name}
  Piloto: ${ship.pilot}
  Limite de tripulação: ${ship.crewLimit}
  Tripulação (${ship.crew.length}): ${ship.crew.join(", ") || "vazia"}
  Em missão: ${ship.inMission ? "Sim" : "Não"}
    `);
    }
}
//# sourceMappingURL=index.js.map