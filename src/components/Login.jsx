// frontend/src/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [logindatas, setLogindatas] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setLogindatas((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      // 🔹 Updated endpoint — should match your backend route
      const res = await axios.post("http://localhost:5000/api/user/login", logindatas);

      const { token, role } = res.data;

      // Save token and role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      setMessage("Login successful ✅");

      // 🔹 Redirect based on role
      setTimeout(() => {
        if (role === "admin") {
          navigate("/view"); // admin's user list page
        } else {
          navigate("/user"); // normal user's home/dashboard page
        }
      }, 1500);
    } catch (error) {
      setMessage("❌ Wrong password or email");
      console.log("Login error:", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "92vh", minWidth: "100vw" }}
    >
      <form
        onSubmit={handelSubmit}
        className="p-4 rounded-4"
        style={{ background: "#0c1b33", width: "400px"}}
      >
        <h3 className="text-center mb-3">User Login</h3>

        {message && (
          <div
            className={`alert ${
              message.includes("successful") ? "alert-success" : "alert-danger"
            } text-center py-2`}
          >
            {message}
          </div>
        )}

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="form-control mb-3"
          onChange={handelChange}
          value={logindatas.email}
          required
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          className="form-control mb-3"
          onChange={handelChange}
          value={logindatas.password}
          required
        />

        <button className="btn text-white btn w-100" type="submit" style={{background: "#012e76"}}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
