import { Link } from "react-router-dom"

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        <Link to={`/`} className="new-blog">Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`} className="new-home">Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">Novo Post</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar