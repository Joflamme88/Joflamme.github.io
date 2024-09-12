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
        Développeur Full Stack passionné avec 11 ans d&apos;expérience en
        électronique et une reconversion réussie dans le développement web.
        Rigoureux, attentif aux détails et doté d&apos;une forte capacité à
        résoudre les problèmes.
      </p>
      <p className="about-sub-para">
        Mes projets récents illustrent ma capacité à développer des applications
        web innovantes et robustes, répondant aux besoins des utilisateurs. Que
        ce soit à travers Yummy Cook, une plateforme de partage de recettes, ou
        Édition Limitée, un outil de gestion de guilde pour les jeux vidéo,
        chaque projet reflète ma passion pour le développement et
        l&apos;amélioration continue basée sur les retours utilisateurs.
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
          <h2>Développeur Full-Stack</h2>

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
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>NestJs</strong>
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
                  <strong>React</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>NextJs</strong>
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
                  <strong>Curieux</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Autodidacte</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Communicatif</strong>
                </li>
              </ul>
            </div>

            {/* Right Side List */}
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Autonome</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Organisé</strong>
                </li>
                <li>
                  <Icon className="icon-arrow" icon="fe:arrow-up" />
                  <strong>Flexible</strong>
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
