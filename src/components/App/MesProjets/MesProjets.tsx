// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import './MesProjets.scss';
import othello from '../../../assets/othello.jpg';
import cookBook from '../../../assets/cookBook.jpg';
import botdiscord from '../../../assets/botdiscord.jpg';

function MesProjets() {
  return (
    <section id="portfolio" className="portfolio">
      <h1 className="portfolio-sub-heading">Mes Projets</h1>
      <div className="portfolio-divider" />

      <div className="portfolio-row">
        {/* Portfolio item 1 */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={othello} alt="projet othello" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>Othello : jeu de société</h4>
            <p>Différent mode :</p>
            <p> Joueur contre Joueur</p>
            <p> Joueur contre Ordinateur</p>
            <p> Mode Facile</p>
            <a href="/">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>

        {/* Portfolio item 2 */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={cookBook} alt="projet othello" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>CookBook</h4>
            <p>Livre de recette numérique :</p>
            <p>Back-end en cours</p>
            <p>Front-End à venir</p>
            <a href="/">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>

        {/* Portfolio item 3 */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={botdiscord} alt="projet othello" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>Bots Discords</h4>

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
