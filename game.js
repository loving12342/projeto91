nj1 = localStorege.getItem("nome1");
nj2 = localStorege.getItem("nome2");

pontosj1=0;
pontosj2=0;

document.getElementById("nome1").innerHTML=nj1 + ":";
document.getElementById("nome2").innerHTML=nj2 + ":";

document.getElementById("scorej1").innerHTML=pontosj1;
document.getElementById("scorej2").innerHTML=pontosj2;

document.getElementById("jogadorPerguntando").innerHTML="Turno de pergunta"+ nj1;
document.getElementById("jogadorRespondendo").innerHTML="Turno de respondendo"+ nj1;

    function enviar(){
        pegarPalavra= document.getElementById("palavra").ariaValueMax;
        palavra=pegarPalavra.toLowerCase();

        letra1 = palavra.chartAt(1);
        contaLetra2 = Math.floor(palavra.length/2);
letra2 = palavra.chartAt(contaLetra2);

conta = palavra.length - 1;
letra3 = palavra.charAt(contaLetra3);

removerletra1 = palavra.replace(letra1, "_");
removerletra2= removerletra1.replace(letra2,"_");
removerletra3 = removerletra2.replace(letra3, "_");

p ="<h4 id='mostrarPalavra'>"+ removerletra3 + "</h4>";
caixatexto = "<br> resposta: <input type='text' id='inputresposta'";
btnresponder = "<br><br> <button onclick='verificar()'>Verificar</button>";
linha = p + caixatexto + btnresponder;
document.getElementById("output").innerHTML=linha;
document.getElementById("palavra").value="";0

    }

    turnopergunta = nj1;
    turnoresposta = nj2;

function  verificar(){
pegarresposta = document.getElementById("inputresposta").value;
resposta = pegarresposta.toLowerCase();

if(resposta=="palavra"){
    if(turnoresposta=="nj1"){
        pontosj1 = pontosj1 +1;
        document.getElementById("scorej1").innerHTML=pontosj1;
    }else{
        pontosj2 = pontosj2 +1;
        document.getElementById("scorej2").innerHTML=pontosj2;
    }
}
if(turnoresposta=="nj1"){
    turnoresposta = nj2;
    document.getElementById("jogadorresposta").innerHTML="turno de resposta: " + nj2;
}else{
    turnopergunta = nj1;
    document.getElementById("jogadorresposta").innerHTML="turno de resposta: " + nj1;
}
}