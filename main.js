function addUser() {
    j1 = document.getElementById("jogador1").value;
    j2 = document.getElementById("jogador2").value;

    localStorage.setItem("nome1",j1);
    localStorage.setItem("nome2",j2);

window.location="game.html";
}