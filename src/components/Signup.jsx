// frontend/src/Signin.js
import { useState } from "react";
import axios from "axios";
import {useNavigate, Link } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";

function Signin() {
  const navigate = useNavigate();
  const [formdatas, setFormdatas] = useState({
    name: "",
    password: "",
    confirmpassword: "",
    phone: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // -------------------------
  // HANDLE INPUT CHANGE
  // -------------------------
  const handelChange = (e) => {
    const { name, value } = e.target;

    // PHONE: only numbers allowed
    if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormdatas((prev) => ({ ...prev, [name]: onlyNums }));
      return;
    }

    setFormdatas((prev) => ({ ...prev, [name]: value }));
  };

  // -------------------------
  // SUBMIT FORM + VALIDATION + API CALL
  // -------------------------
  const handelSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Validation
    if (!formdatas.name) newErrors.name = "Name is required";
    if (!formdatas.password) newErrors.password = "Password is required";
    if (formdatas.password !== formdatas.confirmpassword)
      newErrors.confirmpassword = "Passwords do not match";
    if (formdatas.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits";
    if (!formdatas.email) newErrors.email = "Email is required";

    // If errors exist → stop and show message
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage("Please fill the details below");
      return;
    }

    // No errors → clear errors
    setErrors({});
    setMessage("");

    // -------------------------
    // API CALL
    // -------------------------
    try {
      await axios.post("http://localhost:5000/api/user/add", formdatas);

      setMessage("Registration Successful");

      // Redirect to login page
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setMessage("User already exists");
    }
  };

  return (
    <div
className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "95vh", minWidth: "100vw" }}
    >
      <form
        onSubmit={handelSubmit}
        className="p-4 rounded-4"
        style={{ background: "#0c1b33", width: "400px" }}
      >
        <h3 className="text-center mb-3">Add User</h3>

        {/* TOP MESSAGE */}
        {message && (
          <div
            className={`alert ${
              message.includes("Successful")
                ? "alert-success"
                : "alert-danger"
            } text-center py-2`}
          >
            {message}
          </div>
        )}

        {/* NAME */}
        {errors.name && <div className="text-danger">{errors.name}</div>}
        <label>Name</label>
        <input
          name="name"
          className="form-control mb-3"
          placeholder="Enter your name"
          onChange={handelChange}
          value={formdatas.name}
        />

        {/* PASSWORD */}
        {errors.password && (
          <div className="text-danger">{errors.password}</div>
        )}
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="form-control mb-3"
          placeholder="Enter your password"
          onChange={handelChange}
          value={formdatas.password}
        />

        {/* CONFIRM PASSWORD */}
        {errors.confirmpassword && (
          <div className="text-danger">{errors.confirmpassword}</div>
        )}
        <label>Confirm Password</label>
        <input
          name="confirmpassword"
          type="password"
          className="form-control mb-3"
          placeholder="Confirm your password"
          onChange={handelChange}
          value={formdatas.confirmpassword}
        />

        {/* PHONE */}
        {errors.phone && <div className="text-danger">{errors.phone}</div>}
        <label>Phone</label>
        <input
          name="phone"
          maxLength={10}
          className="form-control mb-3"
          placeholder="Enter your phone number"
          onChange={handelChange}
          value={formdatas.phone}
        />

        {/* EMAIL */}
        {errors.email && <div className="text-danger">{errors.email}</div>}
        <label>Email</label>
        <input
          name="email"
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          onChange={handelChange}
          value={formdatas.email}
        />

        <button
          type="submit"
          className="btn text-white w-100"
          style={{ background: "#012e76" }}
        >
          Submit
        </button>

        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Go to Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;