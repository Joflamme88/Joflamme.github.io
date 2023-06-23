// eslint-disable-next-line import/no-extraneous-dependencies
import photo from '../../../assets/JoPictureProfil_FlouCV.png';
import './about.scss';

function about() {
  return (
    <section className="about" id="about">
      <h1 className="about-sub-heading">About Me</h1>
      <div className="about-divider" />
      <p className="about-sub-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reprehenderit eligendi eum unde dolorum velit! Ipsum vitae eius optio
        voluptate dicta officiis ea? Laboriosam iusto labore at hic debitis
        totam.
      </p>
      <div className="about-col">
        <div className="about-col-img">
          <img src={photo} alt="jonathan Flamme" />
        </div>

        <div className="about-col-info">
          <h2>Developpeur Front-End</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis
            repellat! Adipisci nostrum illo harum facilis dolor neque inventore
            tempora sint repudiandae, tenetur maxime minima explicabo,
            recusandae necessitatibus voluptates ab.
          </p>

          {/* left Side List */}
          <div className="about-col-info-icon-col">
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <strong>
                    Age: <span>35</span>
                  </strong>
                </li>
                <li>
                  <strong>
                    Website: <span>www......</span>
                  </strong>
                </li>
                <li>
                  <strong>
                    Téléphone: <span>06 20 89 62 63</span>
                  </strong>
                </li>
                <li>
                  <strong>
                    Vile: <span>Bois Colombes (92)</span>
                  </strong>
                </li>
              </ul>
            </div>

            {/* Right Side List */}
            <div className="about-col-info-icon-col-list">
              <ul>
                <li>
                  <strong>
                    Age: <span>35</span>
                  </strong>
                </li>
                <li>
                  <strong>
                    Website: <span>www......</span>
                  </strong>
                </li>
                <li>
                  <strong>
                    Mail: <span>Joflamme@hotmail.com</span>
                  </strong>
                </li>
                <li>
                  <strong>
                    Stage: <span> Début 04 Août 2020</span>
                  </strong>
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
