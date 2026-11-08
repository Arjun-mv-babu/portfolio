import { education } from "../data";

function Education() {
  return (
    <section id="education" className="band">
      <div className="wrap split">
        <h2 className="section-title">Where I studied</h2>
        <div className="edu-grid">
          {education.map((e) => (
            <div key={e.title} className="edu">
              <span className="year">{e.year}</span>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
