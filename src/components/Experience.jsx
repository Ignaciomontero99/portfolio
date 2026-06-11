import { education, experience } from '../data/portfolioData';

function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="section__header">
        <span className="section__tag">Recorrido</span>
        <h2>Experiencia y formación</h2>
        <p>
          Un resumen visual de mi experiencia profesional y mi formación en
          desarrollo de aplicaciones.
        </p>
      </div>

      <div className="experience__layout">
        <div className="experience__column">
          <h3 className="experience__column-title">Experiencia</h3>

          <div className="experience__timeline">
            {experience.map((item) => (
              <article
                className="experience__item"
                key={`${item.year}-${item.title}`}
              >
                <span>{item.year}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p className="experience__employer">{item.employer}</p>
                  <p className="experience__description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__column">
          <h3 className="experience__column-title">Formación</h3>

          <div className="experience__timeline">
            {education.map((item) => (
              <article
                className="experience__item"
                key={`${item.year}-${item.title}`}
              >
                <span>{item.year}</span>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;