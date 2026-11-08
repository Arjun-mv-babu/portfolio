import { skills } from "../data";

function Skills() {
  return (
    <section id="skills">
      <div className="wrap split">
        <h2 className="section-title">What I work with</h2>
        <div className="skill-grid">
          {Object.entries(skills).map(([group, items], i) => (
            <div key={group} className="skill-col">
              <span className="num">0{i + 1}</span>
              <h3>{group}</h3>
              <ul>
                {items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
