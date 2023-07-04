import './MesProjets.scss';
import Projet from './Projet/Projet';
import projets from '../../../data/ProjectsData.json';

function MesProjets() {
  const projetsCards = projets.map((projet) => (
    <Projet key={projet.id} projet={projet} />
  ));

  return (
    <section id="portfolio" className="portfolio">
      <h1 className="portfolio-sub-heading">Mes Projets</h1>
      <div className="portfolio-divider" />
      <div className="portfolio-row">{projetsCards}</div>
    </section>
  );
}

export default MesProjets;
