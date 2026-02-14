function addplayer(){
    const player = document.getElementById("player").value;
    const playerNumber = document.getElementById("player-number").value;
    const confirmation = confirm("Deseja adicionar o jogador " + player + " com o número " + playerNumber + "?");
    if (!confirmation) {
        document.getElementById("player").value = "";
        document.getElementById("player-number").value = "";

        return;
    }
    const section = document.getElementById("player-list");
    const ul = document.createElement("ul");
    section.appendChild(ul);
    const li = document.createElement("li");
    li.innerText = player + " - " + playerNumber;
    document.getElementById("player").value = "";
    document.getElementById("player-number").value = "";
    ul.appendChild(li);
    section.appendChild(ul);
    section.appendChild(createElement('br'));

}

function removeContact(){
    const playerNumber = document.getElementById("player-number").value;
    const confirmationPrompt = prompt("Digite o número do jogador que deseja remover:");
    if (confirmationPrompt === null) {
        return;
    }
    for (let i = 0; i < document.querySelectorAll("#player-list ul li").length; i++) {
        const li = document.querySelectorAll("#player-list ul li")[i];
        if (li.innerText.endsWith(playerNumber)) {
            const confirmation = confirm("Deseja remover o jogador " + li.innerText + "?");
            if (confirmation) {
                li.remove();
            }
            return;
        }
    }
    alert("Jogador com número " + playerNumber + " não encontrado.");
    document.getElementById("player-number").value = "";
}



