import React from "react";

function Header({ search, setSearch }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Navbar">
        <div className="container-xl">
          <a className="navbar-brand" href="#">Logo</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
            </ul>

            {/* SEARCH BAR MERGED HERE */}
            <form className="me-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search Games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <button className="log btn btn-outline-light">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
