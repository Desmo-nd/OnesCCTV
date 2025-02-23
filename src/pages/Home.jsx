import Navbar from "../components/Navbar";
import "../styles/home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="hero">
        <h1>Keep Learning On Track</h1>
        <p>
          Elevate your management skills with our cutting-edge courses. Join Our
          Courses for Comprehensive Learning.
        </p>
        <button className="start-btn">Start Now</button>
      </main>
    </div>
  );
}
