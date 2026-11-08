function Navbar() {
  return (
    <header className="header">
      <div className="wrap">
        <a href="#home" className="logo">
          <img src="/images/logo.svg" alt="" className="logo-mark" />
          Arjun MV
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
