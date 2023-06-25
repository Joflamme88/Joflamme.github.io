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
        {/* Portfolio Othello */}
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
            <a href="https://github.com/Joflamme88/Joflamme-othello.github.io">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>

        {/* Portfolio cookbook */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={cookBook} alt="projet cookBook" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>CookBook</h4>
            <p>Livre de recette numérique :</p>
            <p>Back-end en cours</p>
            <p>Front-End à venir</p>
            <a href="https://github.com/Joflamme88/Joflamme-othello.github.io">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>

        {/* Portfolio botDiscord */}
        <div className="portfolio-row-item">
          <div className="portfolio-row-item-img">
            <img src={botdiscord} alt="projet botDiscord" />
          </div>
          <div className="portfolio-row-item-info">
            <h4>Bots Discords</h4>

            <a href="https://github.com/Joflamme88/botDiscordStuffRaid">
              <Icon icon="fluent:expand-up-right-16-filled" />
            </a>
          </div>
        </div>
      </div>

      <div className="portfolio-row">
        {/* Portfolio details Othello */}
        <div className="portfolio-row-detail">
          <h4>Othello : </h4>
          <p>Javascript Vanilla</p>
          <a href="https://joflamme88.github.io/Joflamme-othello.github.io/">
            Cliquer ici pour jouer
          </a>
        </div>
        {/* Portfolio details CookBook */}
        <div className="portfolio-row-detail">
          <h4>Livre de recettes :</h4>
          <p className="portfolio-row-detail-title">Front-End à venir : </p>
          <p className="portfolio-row-detail-techno">React - Tailwind</p>
          <p className="portfolio-row-detail-title">Back-End : </p>
          <p className="portfolio-row-detail-techno">
            Node.js - Express - Sequelize - PostgreSQL
          </p>
        </div>
        {/* Portfolio details botDiscord */}
        <div className="portfolio-row-detail">
          <h4>Bots Discord :</h4>
          <p>Javascript Vanilla</p>
        </div>
      </div>
    </section>
  );
}

export default MesProjets;
