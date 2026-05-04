function mostrar10() {

    let ver10 = 10;

    if (ver10 == 10) {
        alert("O número é 10");
    }
}
function Name(){
    let nome = "Marcelo";

    if (nome =="Marcelo") {
        alert("Verdadeiro")
    }
}
function Verdadeiro(){
    let identificar = document.getElementById ("Nome").value;
    if (identificar == "Ok") {
        alert("Correto");
    }
}
function adm(){
    let adm = document.getElementById ("Adm").value;
    if (adm == "Admin") {
        alert("Correto");
    } else{
        alert ("Incorreto")
    }
}
function Conferir() {
    let conferir = document.getElementById("numero5").value;

    if (conferir == 5) {
        alert("Correto");
    } else {
        alert("Errado");
    }
}
function Test(){
    let testar = document.getElementById ("teste");
    let Testar = document.getElementById ("Testar").value;
    if (Testar == "Testar"){
    testar.textContent = ("Teste concluido");
    } else {
       testar.textContent = ("Teste não concluido"); 
    }
}

function Cor(){
    let Mudarcor = document.getElementById ("Cor").value;
    let div = document.getElementById ("div")
    if (Mudarcor == "Azul"){
        div.style.background = ("blue")
        div.color.color = ("white")
    }
}
function numero(){
    let number = document.getElementById ("med1").value;
    if (number >= 10){
        alert ("Maior que 10")
    } else {
        alert ("Menor que 10")
    }
}

function numero2(){
    let number = document.getElementById ("med2").value;
    if (number <= 50){
        alert ("Menor que 50")
    } else {
        alert ("Maior que 50")
    }
}
function Entrar(){
    let senha = document.getElementById ("is");
    let password = document.getElementById ("password").value;
    if (password == ("senha")){
        senha.textContent = ("Senha correta!!")
    } else {
        senha.textContent = ("Senha incorreta :(")
    }
}
function Alterar1(){
    let alterar = document.getElementById ("body");
    let caixa = document.getElementById ("Caixa").value;
    if (caixa == ("Escuro")){
        alterar.style.background = ("Black")
        alterar.style.color = ("White")
    }
    if (caixa == ("Claro")){
        alterar.style.background = ("White")
        alterar.style.color = ("Black")
    }
}
function entrar(){
    let colocar = document.getElementById ("valor").value;
    let ola = document.getElementById ("Ola");
    if (colocar == ("Admin")){
        ola.textContent = ("Bem-vindo!")
    }
}
function Cor2(){
    let Mudarcor2 = document.getElementById ("Cor2").value;
    let div2 = document.getElementById ("div2");
    let paragra = document.getElementById ("paragra");
    if (Mudarcor2 == "Azul"){
        div2.style.background = ("blue");
        div2.style.color = ("white");
        div2.style.fontSize = "20px"
        paragra.textContent = "Concluido"
    }
}
function Maiorque100(){
    let verificado = document.getElementById ("Maior100").value;
    let fundo = document.getElementById ("body");
    if (verificado >= 100){  
        fundo.style.background = "pink"
    }
}
function Copiar(){
    let oqueseracopiado = document.getElementById ("texto").value;
    let apareceraaqui = document.getElementById ("paragrafão");
    let copiar = document.getElementById ("copiar").value;
    if (oqueseracopiado == "Copiar"){
        apareceraaqui.innerText = copiar;
    }
}
function Alterardiv(){
    let divcima = document.getElementById ("divcima");
    let divbaixo = document.getElementById ("divbaixo");
    let alteraradivs = document.getElementById ("alteraradivs").value;
    if (alteraradivs=="Alterar em cima"){
        divcima.style.background = "Blue";
        divcima.style.color = "white"
    }
    if(alteraradivs=="Alterar em baixo"){
            divbaixo.style.background = "pink"
        }
}
function Cansei(){
    let tudo = document.getElementById ("body");
    let apagartudo = document.getElementById ("apagartudo").value;
    if (apagartudo == "Desligar"){
        tudo.style.background = "Black"
        tudo.style.color = "black";
    }
}