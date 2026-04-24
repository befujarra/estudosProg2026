function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }
    alert(`A nave ${spaceship.name} está sendo enviada ao espaço com o capitão ${spaceship.captain}.`)
    return spaceship;
}

function accelerate(targetSpeed: number, spaceship: { name: string; captain: string; speed: number}) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da nave   ${spaceship.name} para ${targetSpeed} km/s.`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da nave ${spaceship.name} para ${targetSpeed} km/s.`)
    } else {
        alert(`A nave ${spaceship.name} já está a ${targetSpeed} km/s.`)
    }

}

const spaceshipName = prompt("Digite o nome da nave a ser enviada:")
const spaceshipCaptain = prompt("Digite o nome do capitão da nave:")

sendSpaceship(spaceshipName, spaceshipCaptain)