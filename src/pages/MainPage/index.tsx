import logo from '../../assets/logo.png';

import { Idea } from '../../components/Ideia';

import "./styles.scss";

export function MainPage() {
  return(
    <div id="main-page">
      <div className="container">

        <section id="intro">
          <header>
            <img src={logo} alt="Logo" />
          </header>

          <main>
            <p>Ficar em casa em perídos longos, não deve ser nada fácil.</p>
            <p>
              Por isso, iremos catalogar ideias, <strong>brincadeiras, jogos, filmes,
              livros cursos, dicas</strong> e tudo que for necessário para tornar esse
              momento mais interessante.
            </p>
            <p>
              Comece clicando em ver ideias para <strong className="fat">ver as ideias</strong> cadastradas e contrubua
              <strong className="fat"> adicionando a sua</strong> ideia.
            </p>
          </main>
          
          <section id="buttons">
            <button id="btnAddIdea">+ Adicionar ideia</button>
            <button id="btnSeeIdea">Ver ideias</button>
          </section>
          
          <footer>
            <p id="footer">Com 💖 Gabriel</p>
          </footer>
        </section>
        
        <section id="last-ideas">
          <Idea />
        </section>

      </div>
    </div>
  );
}