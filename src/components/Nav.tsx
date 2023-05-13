import { Link } from "react-router-dom";

export default function Nav() {




    return (
      <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Joshua</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href=""><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=""><Link to="/5year" style={{ textDecoration: 'none', color: 'inherit' }}>5 Year Plan</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=""><Link to="/hobbies" style={{ textDecoration: 'none', color: 'inherit' }}>Hobbies</Link></a>
        </li>
        </ul>
    </div>
  </div>
</nav>
</>
    )
}
