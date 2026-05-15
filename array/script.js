let Produto = []

function cadastrarProduto() {
   let Nomedoproduto = document.getElementById("Nomedoproduto").value;
   let valor = document.getElementById("preçodoproduto").value;
   let mensagem = document.getElementById("mensagem")
   if (Nomedoproduto == "" || valor == "") {
      alert("Error");
      while (mensagem.firstChild){
         mensagem.removeChild(mensagem.firstChild)
      }
   }
   else {
      mensagem.textContent = "Produto cadastrado com sucesso!";
      mensagem.style.color = "green";
      Produto.push(Nomedoproduto);
      Produto.push(valor);
      mostrarproduto()
   }
}
function mostrarproduto(){
   let lista = document.getElementById("listaProdutos");
   while (lista.firstChild){
      lista.removeChild(lista.firstChild);
   }
   for (let i = 0; i < Produto.length; i++) {
      let item = document.createElement("li");
      item.textContent = Produto[i];
      lista.appendChild(item);
   }
}
