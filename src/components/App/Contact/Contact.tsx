import './Contact.scss';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form action="#">
        <div className="input-box">
          <div className="input-filed">
            <input type="text" placeholder="Full Name" required />
            <span className="focus" />
          </div>
          <div className="input-filed">
            <input type="text" placeholder="Email Address" required />
            <span className="focus" />
          </div>
        </div>

        <div className="input-box">
          <div className="input-filed">
            <input type="number" placeholder="Mobile" required />
            <span className="focus" />
          </div>
          <div className="input-filed">
            <input type="text" placeholder="Email subject" required />
            <span className="focus" />
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
          />
          <span className="focus" />
        </div>

        <div className="btn-light">
          <button type="submit" className="btn-light">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
