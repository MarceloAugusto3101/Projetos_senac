function Entrar(){
    let usuario = document.getElementById ("Usuario").value;
    let Ola = document.getElementById ("Olá");
    let mostrar = document.getElementById ("Hide");
    let name = document.getElementById ("Name");
    Ola.textContent = "Olá " + usuario;
    mostrar.style.display = "block";
    name.style.display = "none";
}

function Verificar(){
    let idade = document.getElementById ("idade").value;
    let qualclassificação = document.getElementById ("Indicador");
    let usuario = document.getElementById ("Usuario").value;
    let Olá = document.getElementById ("Olá");
    if (idade > 0 && idade < 12){
        qualclassificação.textContent = "Criança"
        Olá.textContent = usuario + ", Você é uma criança"     
    }
    else if (idade >= 12 && idade <= 17){
        qualclassificação.textContent = "Adolescente"
        Olá.textContent = usuario + ", Você é uma Adolescente!"

    }
    else if (idade >= 18 && idade <= 59 ){
        qualclassificação.textContent = "Adulto"
        Olá.textContent = usuario + ", Você é um Adulto!"
    }
    else if (idade >= 60 && idade <= 100 ){
        qualclassificação.textContent = "Idoso"
        Olá.textContent = usuario + ", Você é um Idoso"
    }
    else if (idade >= 101){
        qualclassificação.textContent = "Karai ta velhão em"
        Olá.textContent = usuario + ", Você é um velhãoKKK"
    }
    else {
        alert("Erro! Idade invalida!");
    }
}

function Logar(){
    let Username = document.getElementById ("Usuario2").value;
    let logou = false;
    let Passoword = document.getElementById ("password").value;
    let login = document.getElementById ("login2");
    let Caixalogin = document.getElementById ("Caixalogin");
    let Entrar = document.getElementById ("Entrar");
    let Incorreta = document.getElementById ("Incorreta");
    if (Username == 1234 && Passoword == 1234){
        login.textContent = "Você entrou, bem vindo " + Username;
        Incorreta.textContent = " ";
        Entrar.style.display = "none";
        Caixalogin.style.display = "none";
        Username.style.display = "none";
        Passoword.style.display = "none";
        Incorreta.textContent = " ";
    } 

    if(Username == ("professor") && Passoword == ("senac")){
                login.textContent = " Bem-vindo, " + Username;
        Incorreta.textContent = " ";
        Entrar.style.display = "none";
        Caixalogin.style.display = "none";
        Username.style.display = "none";
        Passoword.style.display = "none";
        Incorreta.textContent = " ";
    }

    if (Username == ("") && Passoword == ("")){
        Incorreta.textContent = "Preencha todos os campos!"
    } 
    else{
        Incorreta.textContent = "Incorreta";
        Caixalogin.style.color = "black";
    }
}

function Calcularvalor(){
    let Valor = document.getElementById ("Valor").value;
    let vip = document.getElementById ("Vip").value;
    let cupom = document.getElementById ("Cupom").value;
    let Resultadodocupom = document.getElementById ("Resultadodocupom");
    if (Valor >= 500 && vip == "Sim"){
        Resultadodocupom.textContent = Valor - (Valor / 20);
    }
    else if (Valor >= 300 && vip == "Não" && cupom == "cupom"){
        Resultadodocupom.textContent = Valor - (Valor / 10);
    }
    else if (Valor < 300 && vip == "Não" && cupom == "Não"){
        Resultadodocupom.textContent = Valor;
    }
    else {
        alert ("Erro")
    }
}

function avaliar(){
    let Nota = document.getElementById ("Nota").value;
    let Presença = document.getElementById ("Presença").value;
    let avaliado = document.getElementById ("avaliado");
  if (Nota >= 60 && Nota <= 100 && Presença >= 75){
    avaliado.textContent = "Aprovado"
}
  else if (Nota >= 40 && Nota <= 59 && Presença >= 75 ) {
     avaliado.textContent = "Recuperação";
  }
  else if ( (Presença > 0 && Presença <= 75) || (Nota > 0 && Nota <= 39) ){
    avaliado.textContent = "Reprovado";}

  else if (Nota < 0 || Nota > 100){
    avaliado.textContent = "Valores invalidos";
  }
  else {
    avaliado.textContent = "Preencha todos os campos";
  }
}

function Temperatura(){
    let Temperatura = document.getElementById ("Temperatura").value;
    let Chovendo = document.getElementById ("Chovendo").value;
    let Ventando = document.getElementById ("Ventando").value;
    let Resultadot = document.getElementById ("avaliado");
    if (Temperatura >= 30 && Chovendo == "Não") 
        { Resultadot.textContent = "Bom dia para piscina!";
    }
    else if (Chovendo == "Sim" && Ventando == "Sim"){
        Resultadot.textContent = "Melhor ficar em casa!"
    }
    else if (Temperatura >= 18 && Temperatura < 30) 
        { Resultadot.textContent = "Clima agradável!";
    }
    else if (Temperatura < 18) 
        { Resultadot.textContent = "Esta frio!";
    }
    else {
        Resultadot.textContent = "Não foi possivel tirar conclusões com estes dados"
    }
}