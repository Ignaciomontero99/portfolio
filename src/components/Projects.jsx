import { projects } from '../data/portfolioData';
import { FiExternalLink } from 'react-icons/fi';

function Projects() {
  return (
    <section className="section projects" id="proyectos">
      <div className="section__header">
        <span className="section__tag">Proyectos</span>
        <h2>Trabajos destacados</h2>
        <p>
          Una selección de proyectos desarrollados para aplicar conocimientos de
          desarrollo web, aplicaciones móviles, backend y diseño de interfaces.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <article
            className={`project__card ${
              project.featured ? 'project__card--featured' : ''
            }`}
            key={project.title}
          >
            <div className="project__image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`Imagen del proyecto ${project.title}`}
                />
              ) : (
                <span>{String(index + 1).padStart(2, '0')}</span>
              )}
            </div>

            <div className="project__content">
              <h3>{project.title}</h3>
              {project.status && (
                <span className="project__status">{project.status}</span>
              )}
              <p>{project.description}</p>

              <div className="project__techs">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      link.type === 'primary'
                        ? 'project__link project__link--primary'
                        : 'project__link project__link--secondary'
                    }
                  >
                    {link.label}
                    <FiExternalLink />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;