// return(
//     <div className="">
//         <h3>Profile</h3>
//         <h1></h1>
//         <h2></h2>
//     </div>
// )

// import React from "react";

function Userinfo({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeBtn} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 999,
  },
  popup: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "350px",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Userinfo;
