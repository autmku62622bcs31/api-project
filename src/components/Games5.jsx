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

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Details() {
//   const [game, setGame] = useState(null);

//   useEffect(() => {
//     const fetchGame = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.rawg.io/api/games?search=Grand%20Theft%20Auto%20V&key=f8673e62b97444d7931ebc58386c0935"
//         );

//         // Get first game from response
//         const firstGame = response.data.results[0];
//         setGame(firstGame);
//         console.log(firstGame);
//       } catch (error) {
//         console.error("Error fetching game:", error);
//       }
//     };

//     fetchGame();
//   }, []);

//   if (!game) return <p>Loading...</p>;

//   return (
//     <div style={{ textAlign: "center", color: "#fff", backgroundColor: "#222", padding: "20px" }}>
//       <h1>{game.name}</h1>
//       <p className='pubgpara'>Play PUBG: BATTLEGROUNDS for free! Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds</p>
//       <img
//         src={game.background_image}
//         alt={game.name}
//         style={{ width: "600px", borderRadius: "10px" }}
//       />
//       <div className='pubgpub'>
//       <p><strong>Released:</strong> {game.released}</p>
//       <p><strong>Rating:</strong> {game.rating}</p>
//       <p><strong>Metacritic:</strong> {game.metacritic}</p>
//       <p><strong>Playtime:</strong> {game.playtime}</p>
//     </div>
//     </div>
//   );
// }

// export default Details;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../App.css"; // import the CSS file

// function Details() {
//   const [game, setGame] = useState(null);

//   useEffect(() => {
//     const fetchGame = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.rawg.io/api/games?search=Grand%20Theft%20Auto%20V&key=f8673e62b97444d7931ebc58386c0935"
//         );
//         const firstGame = response.data.results[0];
//         setGame(firstGame);
//       } catch (error) {
//         console.error("Error fetching game:", error);
//       }
//     };

//     fetchGame();
//   }, []);

//   if (!game)
//     return (
//       <div className="loading">
//         <div className="spinner"></div>
//         <p>Loading game details...</p>
//       </div>
//     );

//   return (
//     <div className="details-container">
//       <div className="overlay"></div>
//       <img
//         src={game.background_image}
//         alt={game.name}
//         className="background-img"
//       />
//       <div className="content">
//         <h1 className="title">{game.name}</h1>
//         <p className="description">
//           Dive into the world of <strong>{game.name}</strong>. Explore, complete
//           missions, and experience next-level open-world gameplay.
//         </p>

//         <div className="stats">
//           <div className="stat">
//             <h3>Released</h3>
//             <p>{game.released}</p>
//           </div>
//           <div className="stat">
//             <h3>Rating</h3>
//             <p>{game.rating}</p>
//           </div>
//           <div className="stat">
//             <h3>Metacritic</h3>
//             <p>{game.metacritic || "N/A"}</p>
//           </div>
//           <div className="stat">
//             <h3>Playtime</h3>
//             <p>{game.playtime} hrs</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../App.css";

// function Details() {
//   const [game, setGame] = useState(null);

//   useEffect(() => {
//     const fetchGame = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.rawg.io/api/games?search=Grand%20Theft%20Auto%20V&key=f8673e62b97444d7931ebc58386c0935"
//         );
//         const firstGame = response.data.results[0];
//         setGame(firstGame);
//       } catch (error) {
//         console.error("Error fetching game:", error);
//       }
//     };

//     fetchGame();
//   }, []);

//   if (!game) return <p className="loading">Loading...</p>;

//   return (
//     <div className="game-container">
//       <img
//         src={game.background_image}
//         alt={game.name}
//         className="game-image"
//       />
//       <h1 className="game-title">{game.name}</h1>
//       <p className="game-desc">
//         Dive into the action of <strong>{game.name}</strong>. Experience a
//         thrilling open-world adventure filled with missions and fun gameplay.
//       </p>

//       <div className="game-info">
//         <p><strong>Released:</strong> {game.released}</p>
//         <p><strong>Rating:</strong> {game.rating}</p>
//         <p><strong>Metacritic:</strong> {game.metacritic || "N/A"}</p>
//         <p><strong>Playtime:</strong> {game.playtime} hrs</p>
//       </div>
//     </div>
//   );
// }https://api.rawg.io/api/games?search=Counter%20Strike&key=f8673e62b97444d7931ebc58386c0935

// export default Details;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Games5() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?search=The%20Witcher%203:%20Wild%20Hunt&key=f8673e62b97444d7931ebc58386c0935"
        );
        const firstGame = response.data.results[0];
        setGame(firstGame);
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };

    fetchGame();
  }, []);

  if (!game) return <p className="loading">Loading...</p>;

  return (
    <div className="game-card">
      <div className="game-image-container">
        <img
          src={game.background_image}
          alt={game.name}
          className="game-image"
        />
      </div>

      <div className="game-details">
        <h1 className="game-title">{game.name}</h1>
        <p className="game-desc">
          Explore the legendary world of <strong>{game.name}</strong>. Experience
          high-quality graphics, thrilling missions, and immersive gameplay that
          defines open-world adventures.
        </p>

        <div className="game-info">
          <p><strong>Released:</strong> {game.released}</p>
          <p><strong>Rating:</strong> {game.rating}</p>
          <p><strong>Metacritic:</strong> {game.metacritic || "N/A"}</p>
          <p><strong>Playtime:</strong> {game.playtime} hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Games5;
