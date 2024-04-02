// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import photo from '../../../assets/JoPictureProfil_FlouCV.png';
import './about.scss';

function about() {
  return (
    <section className="about" id="a-propos">
      <h1 className="about-sub-heading">A propos</h1>
      <div className="about-divider" />
      <p className="about-sub-para">
        En tant que développeur Front-End, je suis curieux, autonome et force de
        proposition. Ma communication et ma capacité à travailler en équipe sont
        des qualités importantes pour contribuer aux projets en proposant
        également des idées et solutions.
      </p>
      <p className="about-sub-para">
        Actuellement, je développe un projet personnel en Fullstack qui permet
        de partager des recettes entre cuisiniers amateurs “YummyCook”. En plus
        d&apos;être un projet qui me tient à cœur, il me permet d&apos;innover
        et d&apos;ajouter des fonctionnalités spécifiques en réponse aux besoins
        et aux retours des utilisateurs.
      </p>
      <p className="about-sub-para">
        Passionné par l&apos;innovation et la résolution de problèmes, je suis
        constamment en quête d&apos;apprentissage, effectuant une veille
        technologique régulière pour rester informé des dernières nouveautés.
      </p>

      <div className="about-col">
        <div className="about-col-img">
          <img src={photo} alt="jonathan Flamme" />
        </div>

        <div className="about-col-info">
          <h2>Developpeur Front-End</h2>

          <h4 className="soft-skill-title">Compétences :</h4>
          <div className="about-col-info-icon-col">
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Angular</strong>
                </li>
              </ul>
            </div>
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Typescript</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Git / GitHub</strong>
                </li>
              </ul>
            </div>
          </div>
          {/* left Side List */}
          <h4 className="soft-skill-title">Soft Skill :</h4>
          <div className="about-col-info-icon-col">
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Autonomie</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Autodidacte</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Communication</strong>
                </li>
              </ul>
            </div>

            {/* Right Side List */}
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Curiosité</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Organisé</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Adaptabilité</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
