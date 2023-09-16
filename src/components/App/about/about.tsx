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
        Après 10 ans d&apos;expérience dans le domaine de l&apos;électronique,
        ma passion pour la programmation m&apos;a conduit à me reconvertir en
        tant que développeur FullStack JavaScript. Je suis motivé à l&apos;idée
        de relever de nouveaux défis et de m&apos;épanouir dans ce secteur en
        constante évolution.
      </p>
      <div className="about-col">
        <div className="about-col-img">
          <img src={photo} alt="jonathan Flamme" />
        </div>

        <div className="about-col-info">
          <h2>Developpeur Web Javascript</h2>

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
                  <strong>Travail en équipe</strong>
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
                  <strong>Organisation</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Adaptabilité</strong>
                </li>
              </ul>
            </div>
          </div>
          <h4 className="soft-skill-title">HardSkil :</h4>
          <div className="about-col-info-icon-col">
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Front-End :</strong>
                  <p>Angular - Typescript</p>
                  <p>/</p>
                  <p>React - Typescript - Redux</p>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong> Back-End :</strong>
                  <p>NodeJs - Nest - TypeOrm</p>
                  <p>/</p>
                  <p>NodeJs - Express - Sequelize</p>
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
