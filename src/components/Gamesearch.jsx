import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const API_KEY = "f8673e62b97444d7931ebc58386c0935";

function GameSearch() {
  const [search, setSearch] = useState("PAYDAY 2");
  const [games, setGames] = useState([]);

  // Filters
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  const fetchGames = async () => {
    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${search}`
      );

      let data = res.data.results;

      if (genre) {
        data = data.filter((g) =>
          g.genres.some((x) => x.name.toLowerCase() === genre.toLowerCase())
        );
      }

      if (platform) {
        data = data.filter((g) =>
          g.platforms?.some(
            (p) =>
              p.platform.name.toLowerCase() === platform.toLowerCase()
          )
        );
      }

      if (rating) {
        data = data.filter((g) => g.rating >= Number(rating));
      }

      if (year) {
        data = data.filter((g) => g.released?.startsWith(year));
      }

      setGames(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [search, genre, platform, rating, year]);

  return (
    <div>
      {/* HEADER WITH SEARCH */}
      <Header search={search} setSearch={setSearch} />

      <div className="container mt-4">

        {/* Filters */}
        <div className="d-flex gap-3 mb-4">
          <select className="form-select" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Genre</option>
            <option value="action">Action</option>
            <option value="shooter">Shooter</option>
            <option value="rpg">RPG</option>
            <option value="strategy">Strategy</option>
          </select>

          <select className="form-select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="">Platform</option>
            <option value="pc">PC</option>
            <option value="playstation">PlayStation</option>
            <option value="xbox">Xbox</option>
            <option value="nintendo switch">Nintendo Switch</option>
          </select>

          <select className="form-select" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Rating</option>
            <option value="4">4★ & Up</option>
            <option value="3">3★ & Up</option>
            <option value="2">2★ & Up</option>
          </select>

          <input
            type="number"
            className="form-control"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ maxWidth: "120px" }}
          />
        </div>

        {/* Game Cards */}
        <div>
          {games.length === 0 ? (
            <p>No games found.</p>
          ) : (
            games.map((g) => (
              <div key={g.id} className="card mb-3 p-3 d-flex flex-row">
                <img
                  src={g.background_image}
                  alt={g.name}
                  style={{ width: "140px", borderRadius: "10px" }}
                />
                
                <div className="ms-3">
                  <h4>{g.name}</h4>
                  <p>⭐ Rating: {g.rating}</p>
                  <p>📅 Released: {g.released}</p>
                  <p>🎮 {g.genres?.map((x) => x.name).join(", ")}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default GameSearch;
