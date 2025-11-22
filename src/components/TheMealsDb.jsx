import { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/edit.png"
import img2 from "../assets/delete.png"

function TheMealsDb() {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const getMeals = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please log in again.");
      return;
    }

    const response = await axios.get("http://localhost:5000/api/user/view", {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ send token
      },
    });

    setFoodData(response.data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Please login again.");
        return;
      }

      await axios.delete(`http://localhost:5000/api/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFoodData((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
};


  const handleEditClick = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

const handleUpdate = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please login again.");
      return;
    }

    await axios.put(
      `http://localhost:5000/api/user/update/${editUser._id}`,
      editUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setFoodData((prev) =>
      prev.map((u) => (u._id === editUser._id ? editUser : u))
    );

    setShowModal(false);
  } catch (error) {
    console.error("Error updating user:", error);
  }
};


  useEffect(() => {
    getMeals();
  }, []);

  const filteredData = foodData.filter((user) => {
    const lower = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(lower) ||
      user.email.toLowerCase().includes(lower) 
    );
  });

  return (
    <div>
    <div className="container py-5">
      
      <h2 className="text-center mb-4 text">User List</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Actions</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              {/* <th>Password</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((user, index) => (
                <tr key={user._id || index}>
                  <td>{index + 1}</td>
                   <td>
                    <img src={img} className="edit"
                      onClick={() => handleEditClick(user)}/>
                    <img src={img2} className="delete"
                      onClick={() => handleDelete(user._id)}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.password}</td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
      {showModal && editUser && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editUser.name}
                    onChange={(e) =>
                      setEditUser({ ...editUser, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editUser.phone}
                    onChange={(e) =>
                      setEditUser({ ...editUser, phone: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={editUser.email}
                    onChange={(e) =>
                      setEditUser({ ...editUser, email: e.target.value })
                    }
                  />
                </div>
                {/* <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editUser.password}
                    onChange={(e) =>
                      setEditUser({ ...editUser, password: e.target.value })
                    }
                  />
                </div> */}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default TheMealsDb;