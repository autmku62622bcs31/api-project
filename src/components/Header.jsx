import React, { useState } from "react";
import axios from "axios";
// import pic from "../assets/account.png"
import "../App.css"
import { useNavigate,NavLink } from "react-router-dom";
// import Userinfo from "./Userinfo";
import logo from "../assets/gameinfo.png"

function Header() {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  // const navigate = useNavigate();
  // const [showPopup, setShowPopup] = useState(false);

  // const gotoprofile=()=>{
  //   navigate("/profile");
  // }

  const onSearchSubmit = async () => {
    if (!search.trim()) return;

    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games?search=${search}&key=f8673e62b97444d7931ebc58386c0935`
      );

      setGames(res.data.results);
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };
  

  return (
    <>
      {/* NAVBAR */}
      
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-xl">

    {/* Brand */}
    <NavLink to="" className="navbar-brand">
    <img src={logo} class="bi me-2" width="120" height="35" role="img" aria-label="Bootstrap"/>
    </NavLink>

    {/* Toggler Button for Mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
      aria-controls="mainNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Items */}
    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
      </ul>

      {/* Search Input */}
      <div className="d-flex mt-2 mt-lg-0">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search Games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "250px" }}
        />
        <button className="btn btn-outline-light" onClick={onSearchSubmit}>
          Search
        </button>
      </div>

    </div>
  </div>
</nav>



      {/* RESULTS BELOW NAVBAR */}
      <div className="container mt-4">
        <h3></h3>

        <div className="row">
          {games.map((game) => (
            <div className="col-md-3 mb-3" key={game.id}>
              <div className="card">
                <img
                  src={game.background_image}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p>Rating: {game.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
