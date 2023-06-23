// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import './Contact.scss';

function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-sub-heading">Contact</h1>
      <div className="contact-divider" />
      <p className="contact-sub-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure
        quisquam laudantium, non doloribus inventore dicta? Quisquam veritatis,
      </p>

      <div className="contact-row">
        <div className="contact-left">
          <div className="contact-left-icon-box">
            <div className="icon">
              <Icon className="iconContact" icon="mdi:envelope" />
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

        <div className="contact-right">
          <form className="formContact" action="#">
            <input type="text" name="name" id="name" placeholder="Votre Nom" />
            <input
              type="mail"
              name="email"
              id="email"
              placeholder="Votre Email"
            />
            <input type="text" name="objet" id="objet" placeholder="Objet" />
            <textarea name="message" id="message" placeholder="Votre message" />
            <button
              className="submitContact"
              type="submit"
              aria-label="Envoi message joflamme@hotmail.com"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
