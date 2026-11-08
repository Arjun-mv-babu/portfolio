import { profile } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">Built by {profile.name}, {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;