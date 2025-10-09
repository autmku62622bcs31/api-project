//     <div className="card mb-3">
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src={img} className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>

import React, { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?search=Grand%20Theft%20Auto%20V&key=f8673e62b97444d7931ebc58386c0935"
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
        src={game.background_image}
        alt={game.name}
        style={{ width: "600px", borderRadius: "10px" }}
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
