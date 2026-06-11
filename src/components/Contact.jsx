import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contact, profile } from '../data/portfolioData';

function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="section__header contact__header">
        <span className="section__tag">{contact.tag}</span>
        <h2>{contact.title}</h2>
        <p>{contact.subtitle}</p>
      </div>

      <div className="contact__content">
        <article className="contact__card">
          <h3>{contact.heading}</h3>

          <p>{contact.description}</p>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <FiMail />
              Enviar email
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn--secondary"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn--secondary"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contact;