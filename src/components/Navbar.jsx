function Navbar() {
  return (
    <nav className="navbar container">
      <h2 className="logo">Elementum</h2>

      <ul className="nav-links">
        <li>About</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>

      <button className="menu-btn">☰</button>
    </nav>
  );
}

export default Navbar;