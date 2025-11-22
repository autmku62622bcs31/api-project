// import React, { useRef } from "react";


// function GamingBrands() {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: -300,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div style={{ backgroundColor: "#14274e", padding: "40px", color: "white" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Gaming Brands</h2>

//       <div
//         ref={scrollRef}
//         style={{
//           display: "flex",
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           gap: "20px",
//           padding: "10px",
//         }}
//       >
//         <div className="card">
//           <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Rockstar_Games_logo.svg" alt="Rockstar" />
//           <h3>Rockstar Gaming</h3>
//         </div>
//         <div className="card">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Activision.svg" alt="Activision" />
//           <h3>Activision</h3>
//         </div>
//         <div className="card">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg" alt="Unity" />
//           <h3>Unity</h3>
//         </div>
//         <div className="card">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Epic_Games_logo.svg" alt="Epic Games" />
//           <h3>Epic Games</h3>
//         </div>
//         <div className="card">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Epic_Games_logo.svg" alt="Epic Games" />
//           <h3>Epic Games</h3>
//         </div>
//         <div className="card">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Epic_Games_logo.svg" alt="Epic Games" />
//           <h3>Epic Games</h3>
//         </div>
//       </div>

//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           onClick={scrollLeft}
//           style={{
//             background: "white",
//             border: "none",
//             borderRadius: "50%",
//             width: "60px",
//             height: "60px",
//             cursor: "pointer",
//             fontSize: "24px",
//           }}
//         >
//           ←
//         </button>
//       </div>
//     </div>
//   );
// }

// export default GamingBrands;


import React, { useState } from "react";
import "../App.css";
import imggbrand1 from '../assets/Rockstargame.jpeg'
import imggbrand2 from '../assets/Activision.jpeg'
import imggbrand3 from '../assets/unity.png'
import imggtext from '../assets/arrow.png'

const SlideButton = () => {
  const [slide, setSlide] = useState(false);

  const handleClick = () => {
    setSlide(!slide);
  };

  return (
    <div className="slide-container">
      <div className='gb'>
              <div className='cards'>
                  <div className='gbrandcard1'>
                      <img className='gbrandimg1' src={imggbrand1} alt="" />
                      <h3 className='gbrandtext1'>Rockstar Gaming</h3>
                  </div>
                  <div className='gbrandcard2'>
                      <img className='gbrandimg2' src={imggbrand2} alt="" />
                      <h3 className='gbrandtext2'>Activision</h3>
                  </div>
                  <div className='gbrandcard3'>
                      <img className='gbrandimg3' src={imggbrand3} alt="" />
                      <h3 className='gbrandtext3'>Unity</h3>
                  </div>
                  <div className='gbrand-text'>
                      <h3>Gaming Brands</h3>
                      <img className='gbrandarr' src={imggtext} alt="" />
                  </div>
              </div>
              <button
        className={`slide-btn ${slide ? "slide-active" : ""}`}
        onClick={handleClick}>
        Click Me
      </button>
          </div>  
    </div>
  );
};

export default SlideButton;
