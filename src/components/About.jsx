import { about } from '../data/portfolioData';

function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="section__header">
        <span className="section__tag">{about.tag}</span>
        <h2>{about.title}</h2>
        <p>{about.subtitle}</p>
      </div>

      <div className="about__content">
        <div className="about__text">
          <h3>{about.heading}</h3>

          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about__cards">
          {about.cards.map((card) => (
            <article className="about__card" key={card.number}>
              <span>{card.number}</span>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;