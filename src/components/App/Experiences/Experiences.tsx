import './Experiences.scss';

function Experiences() {
  return (
    <section className="exp">
      <h1 className="exp-sub-heading">Mon Experience</h1>
      <div className="exp-divider" />
      <p className="exp-sub-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure
        quisquam laudantium, non doloribus inventore dicta? Quisquam veritatis,
        deserunt, at labore officia magnam nisi laborum necessitatibus id ex
        exercitationem sunt!
      </p>
      <div className="exp-row">
        {/* left Column */}
        <div className="exp-cols">
          <h2>Summury</h2>
          <div className="my-info">
            <h3>J FLAMME</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              officiis harum, quidem, quis fugiat iste animi rerum doloribus
              laborum earum, ullam excepturi! Laboriosam quae, natus eius autem
              repellat optio voluptatem!
            </p>
            <ul>
              <li>Bois Colombes</li>
              <li>06 20 89 62 63</li>
              <li>Joflamme@hotmail.com</li>
            </ul>
          </div>

          <h2>Formation</h2>
          <div className="my-education">
            <h3>BTS Systeme Electronique</h3>
            <span className="sp-box">2006 - 2008</span>
            <p>Paul langevin</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              nesciunt ad tempore, odit aut illo eaque in! Atque, quasi
              consequatur!
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="exp-cols">
          <h2>Experience</h2>

          <div className="pro-exp">
            <h3>Technicien Electronique</h3>
            <span className="sp-box">2018 - 2022</span>
            <p>Veoneer</p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                quaerat! Deserunt, pariatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                quaerat! Deserunt, pariatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                quaerat! Deserunt, pariatur.
              </li>
            </ul>
          </div>
          <div className="pro-exp">
            <h3>Technicien Electronique</h3>
            <span className="sp-box">2018 - 2022</span>
            <p>Veoneer</p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                quaerat! Deserunt, pariatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                quaerat! Deserunt, pariatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                quaerat! Deserunt, pariatur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
