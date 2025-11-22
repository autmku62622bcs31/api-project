// frontend/src/Signin.js
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";

function Signin() {
  const [formdatas, setFormdatas] = useState({
    name: "",
    password: "",
    confirmpassword:"",
    phone: "",
    email: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormdatas((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user/add", formdatas);
      setMessage("Registration Successfull");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setMessage("User already exists");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "95vh", minWidth: "100vw" }}>
      <form onSubmit={handelSubmit} className="p-4 rounded-4" style={{ background: "#0c1b33", width: "400px" }}>
        <h3 className="text-center mb-3">Add User</h3>
        {message && (
          <div className={`alert ${message.includes("Successful") ? "alert-success" : "alert-danger"} text-center py-2`}>
            {message}
          </div>
        )}
        <label>Name</label>
        <input name="name" id="name" placeholder="Enter your name" className="form-control mb-3" onChange={handelChange} value={formdatas.name} required />
        <span id="nameError"></span>
        <label>Password</label>
        <input name="password" id="password" placeholder="Enter your password" type='password' className="form-control mb-3" onChange={handelChange} value={formdatas.password} required />
        <span id="passError"></span>
        <label>Confirm Password</label>
        <input name="confirmpassword" id="confirmpassword" type="confirmpassword" placeholder="Confirm your Password" className="form-control mb-3" onChange={handelChange} value={formdatas.confirmpassword} required/>
        <span id="confirmpassError"></span>
        <label>Phone</label>
        <input name="phone" id="phone" type="phone" maxLength={10} placeholder="Enter your phone" className="form-control mb-3" onChange={handelChange} value={formdatas.phone} required />
        <span id="phoneError"></span>
        <label>Email</label>
        <input name="email" id="email" placeholder="Enter your email" type='email' className="form-control mb-3" onChange={handelChange} value={formdatas.email} required />
        <span id="emailError"></span>
        
        <button className="btn text-white w-100" style={{background:"#012e76"}} type="submit">Submit</button>
        <p className="text-center">
          Already have an account? <Link to="/login">Go to Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;