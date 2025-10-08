import React, { useRef } from "react";


function GamingBrands() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // scroll 300px left
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ backgroundColor: "#14274e", padding: "40px", color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Gaming Brands</h2>

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "20px",
          padding: "10px",
        }}
      >
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Rockstar_Games_logo.svg" alt="Rockstar" />
          <h3>Rockstar Gaming</h3>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Activision.svg" alt="Activision" />
          <h3>Activision</h3>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg" alt="Unity" />
          <h3>Unity</h3>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Epic_Games_logo.svg" alt="Epic Games" />
          <h3>Epic Games</h3>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Epic_Games_logo.svg" alt="Epic Games" />
          <h3>Epic Games</h3>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Epic_Games_logo.svg" alt="Epic Games" />
          <h3>Epic Games</h3>
        </div>
      </div>

      {/* Arrow button to scroll left */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={scrollLeft}
          style={{
            background: "white",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          ←
        </button>
      </div>
    </div>
  );
}

export default GamingBrands;
