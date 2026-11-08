import { profile } from "../data";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div>
          <span className="note">hello, I'm {profile.name.split(" ")[0]}</span>
          <h1>
            I build <em>web apps</em> with React and Node.js.
          </h1>
          <p>{profile.summary}</p>
          <div className="links">
            <a href="#projects">See my work</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="photo">
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}

export default Hero;