import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersRes, contactsRes] = await Promise.all([
        axios.get("http://localhost:5000/api/admin/users"),
        axios.get("http://localhost:5000/api/admin/contacts"),
      ]);

      let feedbacksRes = { data: [] };
      try {
        feedbacksRes = await axios.get("http://localhost:5000/api/admin/feedbacks");
      } catch (err) {
        console.warn("Feedback route not available (optional):", err.message);
      }

      setUsers(usersRes.data);
      setContacts(contactsRes.data);
      setFeedbacks(feedbacksRes.data);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      await axios.delete(`http://localhost:5000/api/Admin/${type}/${id}`);
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error(`Error deleting ${type.slice(0, -1)}:`, error);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "Invalid Date";
    const date = new Date(dateStr);
    return !isNaN(date.getTime()) ? date.toLocaleString() : "Invalid Date";
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Admin Dashboard</h1>

      <div className="p-6 space-x-4 flex  ">
        {/* Users Table */}
        <section>
          <h2 className="text-2xl p-4 text-center font-semibold">User Accounts</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Name</th>
                <th>Email</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="border-t">
                  <td className="p-2">{u.name || "No Name"}</td>
                  <td>{u.email || "No Email"}</td>
                  <td>{formatDate(u.createdAt)}</td>
                  <td>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete("users", u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Contact Queries */}
        <section>
          <h2 className="text-2xl text-center font-semibold p-4">Queries / Contact Us</h2>
          <ul className="space-y-2">
            {contacts.map((c) => (
              <li key={c._id} className="border p-2">
                <strong>{c.fullName || "Unnamed User"}</strong> ({c.email}): {c.message}
                <div className="text-sm text-gray-500">{formatDate(c.createdAt)}</div>
                <button
                  className="bg-red-500 text-white px-2 py-1 mt-1 rounded"
                  onClick={() => handleDelete("contacts", c._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Feedbacks */}
        <section>
          <h2 className="text-2xl text-center font-semibold p-4">User Feedbacks</h2>
          <ul className="space-y-2">
            {feedbacks.map((f) => (
              <li key={f._id} className="border p-2">
                <strong>{f.name}</strong> ({f.email}) — <span className="text-gray-600 text-sm">ID: {f._id}</span>
                <div className="mt-1">{f.message}</div>
                <div className="text-sm text-gray-500">{formatDate(f.createdAt)}</div>
                <button
                  className="bg-red-500 text-white px-2 py-1 mt-1 rounded"
                  onClick={() => handleDelete("feedbacks", f._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>

  );
};

export default AdminPanel;
