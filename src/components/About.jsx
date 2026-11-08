import { profile, internship, languages, job } from "../data";

function About() {
  return (
    <section id="about" className="band">
      <div className="wrap split">
        <h2 className="section-title">A bit about me</h2>
        <div className="about-text">
          <p>
            I'm a junior software developer at {job.company} in {job.place}, where I build web
            applications with React and Node.js. I'm from {profile.location}, and I started my journey
            with a BSc in Computer Science, followed by a full stack internship at {internship.place}.
          </p>
          <p>I enjoy building things I can actually click through and show to someone.</p>
          <ul className="facts">
            <li><strong>Training</strong>{internship.title}</li>
            <li><strong>Certificate</strong>{internship.note}</li>
            <li><strong>Languages</strong>{languages.join(", ")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
