import { FiBriefcase, FiDownload, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolioData';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <span className="hero__tag">{profile.status}</span>

        <h1>
          Hola, soy <span>{profile.name}</span>
        </h1>

        <h2>{profile.role}</h2>

        <p>{profile.description}</p>

        <div className="hero__buttons">
          <a href="#proyectos" className="btn btn--primary">
            <FiBriefcase />
            Ver proyectos
          </a>

          <a href="#contacto" className="btn btn--secondary">
            <FiMail />
            Contactar
          </a>

          <a href={profile.cv} className="btn btn--outline-primary" download>
            <FiDownload />
            Descargar CV
          </a>
        </div>
      </div>

      <div className="hero__visual">
  <div className="hero__image">
    <img src={profile.heroImage} alt="Imagen tecnológica del portafolio" />
  </div>
</div>
    </section>
  );
}

export default Hero;