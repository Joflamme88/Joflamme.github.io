import ButtonDark from '../../button/ButtonDark/ButtonDark';
import ButtonLight from '../../button/ButtonLight/ButtonLight';
import IconLogo from '../../button/IconLogo/IconLogo';
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
        <div className="home-box-btn">
          <ButtonLight text="Hire me" />
          <ButtonDark text="Lets talk" />
        </div>
        <div className="home-icon">
          <IconLogo href="#" icon="ic:baseline-facebook" />
          <IconLogo href="#" icon="mdi:linkedin" />
        </div>
      </div>
    </section>
  );
}

export default Acceuil;
