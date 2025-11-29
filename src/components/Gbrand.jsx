// import React from 'react'
// import imggbrand1 from '../assets/Rockstargame.jpeg'
// import imggbrand2 from '../assets/Activision.jpeg'
// import imggbrand3 from '../assets/unity.png'
// import imggtext from '../assets/arrow2.0.png'
// function Gbrand() {
//   return (
//     <div className='gb'>
//         <div className='cards'>
//             <div className='gbrandcard1'>
//                 <img className='gbrandimg1' src={imggbrand1} alt="" />
//                 <h3 className='gbrandtext1'>Rockstar Gaming</h3>
//             </div>
//             <div className='gbrandcard2'>
//                 <img className='gbrandimg2' src={imggbrand2} alt="" />
//                 <h3 className='gbrandtext2'>Activision</h3>
//             </div>
//             <div className='gbrandcard3'>
//                 <img className='gbrandimg3' src={imggbrand3} alt="" />
//                 <h3 className='gbrandtext3'>Unity</h3>
//             </div>
//             <div className='gbrand-text'>
//                 <h3>Gaming Brands</h3>
//                 <img className='gbrandarr' src={imggtext} alt="" />
//             </div>
//         </div>
//     </div>  
//     )
// }

// export default Gbrand;



// import React, { useState, useRef } from 'react'
// import imggbrand1 from '../assets/Rockstargame.jpeg'
// import imggbrand2 from '../assets/Activision.jpeg'
// import imggbrand3 from '../assets/unity.png'
// import imggtext from '../assets/arrow2.0.png'

// function Gbrand() {
//   const scrollRef = useRef(null);
//   const [scrollIndex, setScrollIndex] = useState(0);

//   const handleScroll = () => {
//     const container = scrollRef.current;
//     const cardWidth = container.children[0].offsetWidth + 20; // adjust for gap

//     const newIndex = (scrollIndex + 1) % container.children.length;
//     container.scrollTo({
//       left: cardWidth * newIndex,
//       behavior: 'smooth',
//     });

//     setScrollIndex(newIndex);
//   };

//   return (
//     <div className='gb'>
//       <div className='cards' ref={scrollRef}>
//         <div className='gbrandcard1'>
//           <img className='gbrandimg1' src={imggbrand1} alt="" />
//           <h3 className='gbrandtext1'>Rockstar Gaming</h3>
//         </div>
//         <div className='gbrandcard2'>
//           <img className='gbrandimg2' src={imggbrand2} alt="" />
//           <h3 className='gbrandtext2'>Activision</h3>
//         </div>
//         <div className='gbrandcard3'>
//           <img className='gbrandimg3' src={imggbrand3} alt="" />
//           <h3 className='gbrandtext3'>Unity</h3>
//         </div>
//         <div className='gbrand-text'>
//         <h3>Gaming Brands</h3>
//         <img
//           className='gbrandarr'
//           src={imggtext}
//           alt="arrow"
//           onClick={handleScroll}
//           style={{ cursor: 'pointer' }}
//         />
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Gbrand;


// import React, { useState, useRef } from 'react'
// import imggbrand1 from '../assets/Rockstargame.jpeg'
// import imggbrand2 from '../assets/Activision.jpeg'
// import imggbrand3 from '../assets/unity.png'
// import imggtext from '../assets/arrow2.0.png'

// function Gbrand() {
//   const scrollRef = useRef(null);
//   const [scrollIndex, setScrollIndex] = useState(0);

//   const handleScroll = () => {
//     const container = scrollRef.current;
//     const scrollAmount = container.offsetWidth * 0.4; // scroll only 40% width
//     const maxScroll = container.scrollWidth - container.offsetWidth;

//     // fade-out effect start
//     container.style.transition = 'opacity 0.3s ease';
//     container.style.opacity = '0.5';

//     setTimeout(() => {
//       let newScroll = container.scrollLeft + scrollAmount;
//       if (newScroll > maxScroll) newScroll = 0; // loop to start again
//       container.scrollTo({ left: newScroll, behavior: 'smooth' });
//     }, 150);

//     // fade-in effect after scrolling
//     setTimeout(() => {
//       container.style.opacity = '1';
//     }, 600);
//   };

//   return (
//     <div className='gb'>
//       <div className='cards' ref={scrollRef}>
//         <div className='gbrandcard1'>
//           <img className='gbrandimg1' src={imggbrand1} alt="" />
//           <h3 className='gbrandtext1'>Rockstar Gaming</h3>
//         </div>
//         <div className='gbrandcard2'>
//           <img className='gbrandimg2' src={imggbrand2} alt="" />
//           <h3 className='gbrandtext2'>Activision</h3>
//         </div>
//         <div className='gbrandcard3'>
//           <img className='gbrandimg3' src={imggbrand3} alt="" />
//           <h3 className='gbrandtext3'>Unity</h3>
//         </div>
//       </div>

//       <div className='gbrand-text'>
//         <h3>Gaming Brands</h3>
//         <img
//           className='gbrandarr'
//           src={imggtext}
//           alt="arrow"
//           onClick={handleScroll}
//           style={{ cursor: 'pointer' }}
//         />
//       </div>
//     </div>
//   )
// }

// export default Gbrand


// import React, { useRef } from "react";
// import imggbrand1 from "../assets/Rockstargame.jpeg";
// import imggbrand2 from "../assets/Activision.jpeg";
// import imggbrand3 from "../assets/unity.png";
// import imggtext from "../assets/arrow2.0.png";

// function Gbrand() {
//   const scrollRef = useRef(null);

//   const handleScrollRight = () => {
//     const container = scrollRef.current;
//     const cardWidth = container.children[0].offsetWidth + 20; // 20 = gap between cards
//     container.scrollBy({
//       left: cardWidth * 3, // move 3 cards at a time
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       className="gb"
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "30px 60px",
//         backgroundColor: "#10244d",
//       }}
//     >
//       {/* Scrollable row */}
//       <div
//         className="cards"
//         ref={scrollRef}
//         style={{
//           display: "flex",
//           gap: "20px",
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           scrollSnapType: "x mandatory",
//           width: "85%", // keeps space for arrow on right
//         }}
//       >
//         {/* You can add more cards easily below */}
//         {[imggbrand1, imggbrand2, imggbrand3, imggbrand1, imggbrand2, imggbrand3, imggbrand1].map(
//           (img, i) => (
//             <div
//               className="gbrandcard"
//               key={i}
//               style={{
//                 flex: "0 0 300px",
//                 scrollSnapAlign: "start",
//                 backgroundColor: "white",
//                 borderRadius: "12px",
//                 textAlign: "center",
//                 padding: "20px",
//               }}
//             >
//               <img
//                 src={img}
//                 alt={`Brand ${i + 1}`}
//                 style={{
//                   width: "300px",
//                   height: "380px",
//                   objectFit: "contain",
//                   borderRadius: "10px",
//                 }}
//               />
//               <h3 style={{ marginTop: "10px", color: "#000" }}>Gaming Brand {i + 1}</h3>
//             </div>
//           )
//         )}
//       </div>

//       {/* Right arrow section */}
//       <div
//         className="gbrand-text"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "10px",
//         }}
//       >
//         <h3 style={{ color: "#fff" }}>Gaming Brands</h3>
//         <img
//           className="gbrandarr"
//           src={imggtext}
//           alt="arrow"
//           onClick={handleScrollRight}
//           style={{
//             cursor: "pointer",
//             width: "60px",
//             height: "60px",
//             backgroundColor: "#fff",
//             borderRadius: "50%",
//             padding: "8px",
//             transition: "transform 0.3s ease",
//           }}
//           onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//           onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//         />
//       </div>
//     </div>
//   );
// }

// export default Gbrand;




import React, { useRef } from "react";
import imggbrand1 from "../assets/Rockstargame.jpeg";
import imggbrand2 from "../assets/Activision.jpeg";
import imggbrand3 from "../assets/unity.png";
import imggbrand4 from "../assets/konami.png";
import imggbrand5 from "../assets/ealogo.png";
import imggbrand6 from "../assets/EpicGames.svg.png";
import imggbrand7 from "../assets/UBI.png";
import imggbrand8 from "../assets/2K-Logo.png";
import imggtext from "../assets/arrow2.0.png";

function Gbrand() {
  const scrollRef = useRef(null);

  const handleScrollRight = () => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth + 20; // adjust gap
    container.scrollBy({
      left: cardWidth * 3, // move 3 cards per click
      behavior: "smooth",
    });
  };

  // ✅ Each card has its own name and image
  const brands = [
    { img: imggbrand1, name: "Rockstar Games" },
    { img: imggbrand2, name: "Activision" },
    { img: imggbrand3, name: "Unity Technologies" },
    { img: imggbrand4, name: "Konami" },
    { img: imggbrand5, name: "Electronic Arts" },
    { img: imggbrand6, name: "Epic Games" },
    { img: imggbrand7, name: "Ubisoft" },
    { img: imggbrand8, name: "2K Games" },
  ];

  return (
    <div
      className="gb"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "",
        backgroundColor: "#1b2a49",
      }}
    >
      {/* Scrollable card container */}
      <div
        className="cards"
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          width: "74%"
        }}
      >
        {brands.map((brand, index) => (
          <div
            className="gbrandcard"
            key={index}
            style={{
              flex: "0 0 300px",
              backgroundColor: "white",
              borderRadius: "12px",
              textAlign: "center",
              height: "500px",
              padding: "80px 50px",
              scrollSnapAlign: "start",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={brand.img}
              alt={brand.name}
              style={{
                width: "220px",
                height: "180px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
            <h3
              style={{
                marginTop: "100px",
                fontWeight: "bold",
                color: "#111",
              }}
            >
              {brand.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Right-side arrow */}
      <div
        className="gbrand-text"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <h3 style={{ color: "#fff" }}>Gaming Brands</h3>
        <img
          className="gbrandarr"
          src={imggtext}
          alt="arrow"
          onClick={handleScrollRight}
          style={{
            cursor: "pointer",
            width: "60px",
            height: "60px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "8px",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
}

export default Gbrand;
