import { profile } from "../data";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div>
          <span className="note">say hi</span>
          <h2>Want to work together?</h2>
          <p>I'm always happy to talk about web development, new projects or ideas. Send me a message.</p>
        </div>
        <div>
        <a className="big" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="big" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
