// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1 className="contact-sub-heading">Contact</h1>
      <div className="contact-divider" />

      <div className="contact-left">
        <div className="contact-left-icon-box">
          <div className="icon">
            <a className="lien-mail" href="mailto:joflamme@hotmail.com">
              <Icon className="iconContact" icon="mdi:envelope" />
            </a>
          </div>
          <div className="info">
            <h4>Email :</h4>
            <p>Joflamme@hotmail.com</p>
          </div>
        </div>

        <div className="contact-left-icon-box">
          <div className="icon">
            <Icon className="iconContact" icon="solar:phone-bold" />
          </div>
          <div className="info">
            <h4>Téléphone :</h4>
            <p>06 20 89 62 63</p>
          </div>
        </div>

        <div className="contact-left-icon-box">
          <div className="icon">
            <Icon className="iconContact" icon="mdi:location" />
          </div>
          <div className="info">
            <h4>Adresse :</h4>
            <p>Bois Colombes (92)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
