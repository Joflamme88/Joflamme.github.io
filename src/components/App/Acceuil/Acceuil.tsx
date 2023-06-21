import ButtonDark from '../../button/ButtonDark/ButtonDark';
import ButtonLight from '../../button/ButtonLight/ButtonLight';
import './Acceuil.scss';

function Acceuil() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Jonathan Flamme</h1>
        <div className="home-content-text-animation">
          <h3>Développeur Front-End Javascript</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          consectetur accusantium eum cupiditate, a iure totam ratione nisi vero
          maxime culpa consequatur obcaecati pariatur quibusdam magnam officia
          eaque voluptas minima.
        </p>

        <div className="home-box">
          <ButtonLight text="Hire me" />
          <ButtonDark text="Lets talk" />
        </div>
      </div>
    </section>
  );
}

export default Acceuil;
