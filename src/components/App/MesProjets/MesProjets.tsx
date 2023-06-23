// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import './MesProjets.scss';
import othello from '../../../assets/othello.jpg';

function MesProjets() {
  return (
    <section className="portfolio">
      <h1 className="portfolio-sub-heading">Mes Projets</h1>
      <div className="portfolio-divider" />
      <p className="portfolio-sub-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure
        quisquam laudantium, non doloribus inventore dicta? Quisquam veritatis,
      </p>
      <div className="portfolio-row">
        {/* Portfolio item 1 */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={othello} alt="projet othello" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>Othello</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="/">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>

        {/* Portfolio item 2 */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={othello} alt="projet othello" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>Othello2</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="/">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>

        {/* Portfolio item 3 */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={othello} alt="projet othello" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>Othello3</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="/">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MesProjets;
