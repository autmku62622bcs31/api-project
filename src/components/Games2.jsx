import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Header from '../components/Header'
import Footer from '../components/Footer'

function Details() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?search=Counter%20Strike&key=f8673e62b97444d7931ebc58386c0935"
        );
        const firstGame = response.data.results[0];
        setGame(firstGame);
        const secondGame = response.data.stores[0];
        setGame(secondGame);
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };

    fetchGame();
  }, []);

  if (!game) return <p className="loading">Loading...</p>;

  return (
    <div>
      <Header/>
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
          Play the world's number 1 action game <strong>{game.name}</strong>. Engage in an incredibly realistic brand of terrorist warfare in this wildly popular team-based game. Ally with teammates to complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects your team's success. Your team's success affects your role.
        </p>

        <div className="game-info">
          <p><strong>Released:</strong> {game.released}</p>
          <p><strong>Rating:</strong> {game.rating}</p>
          <p><strong>Metacritic:</strong> {game.metacritic}</p>
          <p><strong>Playtime:</strong> {game.playtime} hrs</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Details;
