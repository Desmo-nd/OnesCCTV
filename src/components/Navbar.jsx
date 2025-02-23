import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LEARNME</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Teachers</li>
        <li>Courses</li>
        <li>Career</li>
      </ul>
      <button className="join-btn">Join Now</button>
    </nav>
  );
}
