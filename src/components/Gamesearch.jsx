// import React, { useState, useEffect } from "react";
// import Header from "./Header";

// function App() {
//   const [search, setSearch] = useState("");
//   const [games, setGames] = useState([]);
//   const [genreFilter, setGenreFilter] = useState("");

//   const API_KEY = "f8673e62b97444d7931ebc58386c0935";

//   // Fetch games from RAWG API
//   const fetchGames = async () => {
//     const url = `https://api.rawg.io/api/games?search=${search}&key=${API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setGames(data.results);
//   };

//   // Fetch on button click
//   const handleSearchSubmit = () => {
//     fetchGames();
//   };

//   // Filter by genre
//   const filteredGames = games.filter((game) =>
//     genreFilter ? game.genres.some((g) => g.name === genreFilter) : true
//   );

//   return (
//     <div>
//       <Header search={search} setSearch={setSearch} onSearchSubmit={handleSearchSubmit} />

//       {/* genre dropdown */}
//       <div className="container mt-4">
//         <select
//           className="form-select w-25"
//           value={genreFilter}
//           onChange={(e) => setGenreFilter(e.target.value)}
//         >
//           <option value="">All Genres</option>
//           <option value="Action">Action</option>
//           <option value="RPG">RPG</option>
//           <option value="Adventure">Adventure</option>
//           <option value="Shooter">Shooter</option>
//         </select>
//       </div>

//       {/* Game Cards */}
//       <div className="container mt-4">
//         <div className="row">
//           {filteredGames.map((game) => (
//             <div className="col-md-3 mb-4" key={game.id}>
//               <div className="card">
//                 <img src={game.background_image} className="card-img-top" alt={game.name} />
//                 <div className="card-body">
//                   <h5 className="card-title">{game.name}</h5>
//                   <p className="card-text">
//                     ⭐ Rating: {game.rating}
//                   </p>
//                   <p className="text-muted">
//                     Genres: {game.genres.map(g => g.name).join(", ")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;
