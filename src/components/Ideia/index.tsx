import activiti from '../../assets/illustrations/1.svg';
import './styles.scss';

export function Idea(){
  return(
    <div className="idea">
      <img src={activiti} alt="Atividade 1" />
      <div className="content">
        <h3>Cursos de programação</h3>
        <p>Estudo</p>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum 
          consectetur asperiores quod quis sit ullam dolorem voluptatibus, 
          dolores esse molestiae quaerat incidunt accusamus? Deleniti, quo! 
          Asperiores eaque recusandae qui doloremque?
      </div>
      <a href="#">Ir para a ideia</a>
    </div>
  </div>
  );
}