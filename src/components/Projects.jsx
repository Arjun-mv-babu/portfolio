import { projects } from "../data";

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2 className="section-title projects-head">Things I've built</h2>
        {projects.map((p, i) => (
          <article key={p.title} className="project">
            {p.image && (
              <div className="shot">
                <img src={p.image} alt={`${p.title} screenshot`} />
              </div>
            )}
            <div className="project-info">
              <span className="status">{p.status}</span>
              <h3><span>0{i + 1}</span>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tech">{p.tech.join(" · ")}</div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer">Visit project</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
