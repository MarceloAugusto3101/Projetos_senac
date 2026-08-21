import "./App.css";

import chama from "./assets/chama.jpg";
import diamante from "./assets/Diamante_01_tabber.webp";
import heroi from "./assets/hero.png";
import quatrobracos from "./assets/quatrobracos.jpg";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.posicao} - {props.nome}</h2>
      <img src={props.imagem} alt={props.nome} />
      <h3>{props.obra}</h3>
      <p>{props.descricao}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <header>
        <h1>Top 10 Ben 10</h1>
        <p>Meus personagens favoritos</p>
      </header>

      <main>
        <Card
          posicao="1"
          nome="Ben 10"
          obra="Ben 10"
          imagem={heroi}
          descricao="Meu personagem favorito."
        />

        <Card
          posicao="2"
          nome="Quatro Braços"
          obra="Ben 10"
          imagem={quatrobracos}
          descricao="Ele é muito forte."
        />

        <Card
          posicao="3"
          nome="Chama"
          obra="Ben 10"
          imagem={chama}
          descricao="Ele controla fogo."
        />

        <Card
          posicao="4"
          nome="Diamante"
          obra="Ben 10"
          imagem={diamante}
          descricao="Ele é feito de cristal."
        />

        <Card
          posicao="5"
          nome="XLR8"
          obra="Ben 10"
          imagem={heroi}
          descricao="Ele é muito rápido."
        />

        <Card
          posicao="6"
          nome="Massa Cinzenta"
          obra="Ben 10"
          imagem={heroi}
          descricao="Ele é muito inteligente."
        />

        <Card
          posicao="7"
          nome="Besta"
          obra="Ben 10"
          imagem={heroi}
          descricao="Ele tem sentidos muito fortes."
        />

        <Card
          posicao="8"
          nome="Ultra T"
          obra="Ben 10"
          imagem={heroi}
          descricao="Ele controla tecnologia."
        />

        <Card
          posicao="9"
          nome="Fantasmático"
          obra="Ben 10"
          imagem={heroi}
          descricao="Ele parece um fantasma."
        />

        <Card
          posicao="10"
          nome="Aquático"
          obra="Ben 10"
          imagem={heroi}
          descricao="Ele consegue viver na água."
        />
      </main>

      <footer>
        <p>Top 10 Ben 10</p>
      </footer>
    </div>
  );
}

export default App;