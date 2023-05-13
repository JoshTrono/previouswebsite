import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Joshua Trono</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/" className="nav-link">Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to="/5year" className="nav-link">5 Year Plan</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to="/hobbies" className="nav-link">Hobbies</Link></a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
}
