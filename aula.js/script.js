function Olá(){
    let Ola = "helloworld";
    alert(Ola);
}
function nome(){
    let name = "Marcelo";
    alert(name);
}
function Adição(){
    let prim = 37;
    let segun = 30;
    let soma = prim + segun
    alert(prim+"+"+segun);
    alert(soma)
}
function texto(){
    let texto = document.getElementById("atvd4");
    texto.textContent = "Questão 4 concluida!"
}
function mudarcor(){
    let cor = document.getElementById("cor").style.background = "blue";
}
function clicou(){
    let clicou = document.getElementById("cliqueaqui");
    clicou.textContent = "Você clicou!!!"
}
function limp(){
    let limp = document.getElementById("limp");
    limp.textContent = ""
}
function inputin(){
    let put = document.getElementById("in-putão");
    let caixa = document.getElementById("caixa");
    let escrita = put.textContent;
    caixa.value = escrita;
}

function Somar(){
    let valor1 = Number (document.getElementById("Numero1").value);
    let valor2 = Number (document.getElementById("Numero2").value);
    let resultado = valor1 + valor2;
    let Resultado = document.getElementById("Resultado");
    Resultado.textContent = resultado;
}
function background(){
    let background = document.getElementById("background");
    background.style.background = "pink";
}
function background2(){
    let background = document.getElementById("background");
    background.style.background = "white";
}
function Tamanho(){
    let size = document.getElementById("atividade4");
    size.style.fontSize = "20px"
}
function Reduzir(){
    let size = document.getElementById("atividade4");
    size.style.fontSize = "15px"
}
function azul(){
    let color = document.getElementById("Cor");
    color.style.color = "blue";
    color.style.backgroundColor = "white";  
}
function Preto(){
    let colorblack = document.getElementById("Cor");
    colorblack.style.color = "black";
    colorblack.style.backgroundColor = "white";
}
function Pink(){
    let colorpink = document.getElementById("Cor");
    colorpink.style.color = "pink";
    colorpink.style.backgroundColor = "white";
}
function Alterar(){
        let alterar = document.getElementById("Alterar");
    alterar.textContent = "Você alterou";
    alterar.style.color = "white"
        let fundo = document.getElementById("fundo")
        fundo.style.backgroundColor = "black";
        let alterar2 = document.getElementById("Alterar2");
    alterar2.textContent = "os dois ao mesmo tempo!!!"
    fundo2.style.backgroundColor = "black";
    fundo2.style.color = "white"
}

function Alterar2(){
        let alterar = document.getElementById("Alterar3");
    alterar.textContent = "Você alterou!!!";
        let alterar3 = document.getElementById("Alterar4");
    alterar3.textContent = "Você alterou!!!";
        let alterar4 = document.getElementById("Alterar5");
    alterar4.textContent = "Você alterou!!!";
}

function botão(){
    let texto = document.getElementById("mudarara");
    texto.textContent = "Você!";
    texto.textContent = "Você alterou a cor, o texto e o tamanho!";
    texto.style.color = ("black");
    texto.style.fontSize = ("30px");
    texto.style.background = ("purple");
}

function send(){
    let seraenviado = document.getElementById("caixona");
    let caixao = document.getElementById("caixapao");
    let oqueiraaparecer = seraenviado.value;
    caixao.value = oqueiraaparecer;

}

function txt(){
    let texto = document.getElementById("txt");
    texto.textContent = "Você alterou só o texto!";
}
function color(){
    let color = document.getElementById("txt");
    color.textContent = "Você alterou a cor e o texto!";
    color.style.color = ("black");
    color.style.background = ("purple");
}
function tmnh(){
    let tmnh = document.getElementById("txt");
    tmnh.style.fontSize = "20px"
}
function dim(){
    let tmnh = document.getElementById("txt");
    tmnh.style.fontSize = "15px"
}
function alteramos(){
    let div = document.getElementById ("conteiner1");
    let div2 = document.getElementById ("conteiner2");
    div.textContent = ("Iradoooooooo");
    div.style.background = ("purple");
    div.style.color = ("orange");
    div.style.fontSize = ("30px");
    div2.textContent = ("Iradoooooooo");
    div2.style.background = ("purple");
    div2.style.color = ("orange");
    div2.style.fontSize = ("30px");
}
function limpar(){
    let oqapagara = document.getElementById ("Resultado");
    oqapagara.textContent = ("");
}
function modoescuro(){
    let preto = document.getElementById ("body2");
    let textoprin = document.getElementById ("textoprin");
    textoprin.textContent = ("Modo Dark ativado!");
    preto.style.background = ("black");
    preto.style.color = ("white");
}
function modoclaro(){
    let claro = document.getElementById ("body2");
    let textoprin = document.getElementById ("textoprin");
    textoprin.textContent = ("Modo light ativado!");
    claro.style.background = ("white");
    claro.style.color = ("black");

}