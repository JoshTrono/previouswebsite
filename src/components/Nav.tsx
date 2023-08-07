import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
<nav className="bg-white shadow-lg">
  <div className="flex items-center justify-between px-4 py-2">
    <div className="flex-shrink-0">
      <Link to="/">Joshua</Link>
    </div>
    <ul className="flex space-x-4">
      <li className="nav-item">
        <Link to="/" className="hover:text-blue-500">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/5year" className="hover:text-blue-500">5 Year Plan</Link>
      </li>
      <li className="nav-item">
        <Link to="/hobbies" className="hover:text-blue-500">Hobbies</Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

