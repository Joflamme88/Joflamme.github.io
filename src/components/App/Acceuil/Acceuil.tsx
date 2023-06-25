import './Acceuil.scss';

function Acceuil() {
  return (
    <section id="home" className="home">
      <div className="home-row">
        <h1>
          Jonathan Flamme<span>.</span>
        </h1>
        <p>
          <span className="auto-input"> Developpeur Full-Stack Javascript</span>
        </p>
      </div>

      <div className="search-stage">
        En recherche d&apos;un<span className="stage"> stage</span> non rémunéré
        sur <span className="stage">Paris</span> à partir du 04 Août 2023 (entre
        3 et 6 mois)
      </div>
    </section>
  );
}

export default Acceuil;
