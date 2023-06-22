// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';

import './Experiences.scss';

function Experiences() {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        My <span>Journey</span>
      </h2>
      <div className="experience-row">
        <div className="experience-column">
          <h3 className="experience-column-title">Education</h3>

          <div className="experience-box">
            <div className="experience-contents">
              <div className="experience-contents-content">
                <div className="experience-year">
                  <Icon
                    href="#"
                    className="experience-year-icon"
                    icon="bxs:calendar"
                  />
                  2006 - 2008
                </div>
                <h3>BTS Systèmes Electroniques</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere numquam vero libero eum nulla, quidem quas suscipit
                  distinctio impedit recusandae, pariatur obcaecati accusamus
                  maxime labore tenetur minus in dolore iusto.
                </p>
              </div>
            </div>

            <div className="experience-contents">
              <div className="experience-contents-content">
                <div className="year">
                  <Icon href="#" className="icon" icon="bxs:calendar" />
                  2008 - 2009
                  <h3>DUT informatique</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere numquam vero libero eum nulla, quidem quas suscipit
                    distinctio impedit recusandae, pariatur obcaecati accusamus
                    maxime labore tenetur minus in dolore iusto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-column">
          <h3 className="experience-column-title">Formation</h3>

          <div className="experience-box">
            <div className="experience-contents">
              <div className="experience-contents-content">
                <div className="year">
                  <Icon href="#" className="icon" icon="bxs:calendar" />
                  2023
                  <h3>BTS Systèmes Electroniques</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere numquam vero libero eum nulla, quidem quas suscipit
                    distinctio impedit recusandae, pariatur obcaecati accusamus
                    maxime labore tenetur minus in dolore iusto.
                  </p>
                </div>
              </div>
            </div>

            <div className="experience-contents">
              <div className="experience-contents-content">
                <div className="year">
                  <Icon href="#" className="icon" icon="bxs:calendar" />
                  2025
                  <h3>DUT informatique</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere numquam vero libero eum nulla, quidem quas suscipit
                    distinctio impedit recusandae, pariatur obcaecati accusamus
                    maxime labore tenetur minus in dolore iusto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
