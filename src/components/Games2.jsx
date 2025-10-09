import React, { useEffect, useState } from "react";
import axios from "axios";
import img2 from '../assets/counter-strike.jpg'
function Details() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?search=Counter%20Strike&key=f8673e62b97444d7931ebc58386c0935"
        );

        // Get first game from response
        const firstGame = response.data.results[0];
        setGame(firstGame);
        console.log(firstGame);
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };

    fetchGame();
  }, []);

  if (!game) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", color: "#fff", backgroundColor: "#222", padding: "20px" }}>
      <h1>{game.name}</h1>
      <p className='pubgpara'>Play PUBG: BATTLEGROUNDS for free! Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds</p>
      <img
        src={img2}
        alt={game.name}
        style={{ width: "500px", borderRadius: "10px" }}
      />
      <div className='pubgpub'>
      <p><strong>Released:</strong> {game.released}</p>
      <p><strong>Rating:</strong> {game.rating}</p>
      <p><strong>Metacritic:</strong> {game.metacritic}</p>
      <p><strong>Playtime:</strong> {game.playtime}</p>
    </div>
    </div>
  );
}

export default Details;
