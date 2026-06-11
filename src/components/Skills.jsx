import { skills } from '../data/portfolioData';

function Skills() {
  return (
    <section className="section skills" id="tecnologias">
      <div className="section__header">
        <span className="section__tag">Tecnologías</span>
        <h2>Stack tecnológico</h2>
        <p>
          Estas son algunas de las tecnologías y herramientas con las que he
          trabajado en proyectos web, móviles, backend y soporte técnico.
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((group) => (
          <article className="skills__card" key={group.category}>
            <h3>{group.category}</h3>

            <div className="skills__list">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;