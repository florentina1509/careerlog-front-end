import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";

export default function Dashboard() {
  const [apps, setApps] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function loadApps() {
    try {
      setLoading(true);
      const data = await apiFetch("/api/applications");
      setApps(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApps();
  }, []);

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selected.length === apps.length) {
      setSelected([]);
    } else {
      setSelected(apps.map((app) => app._id));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      await apiFetch(`/api/applications/${id}`, { method: "DELETE" });
      setApps(apps.filter((a) => a._id !== id));
    } catch (err) {
      alert("Failed to delete application");
    }
  };

  if (loading) return <p className="text-gray-600">Loading applications...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (apps.length === 0)
    return (
      <div className="text-center mt-12">
        <p className="text-gray-500 text-lg">No applications yet.</p>
        <p className="text-sm text-gray-400">
          Click “+ New Application” above to add your first one.
        </p>
      </div>
    );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">My Applications</h2>

      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wide">
            <tr>
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selected.length === apps.length}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="p-3">Role</th>
              <th className="p-3">Company</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app, idx) => (
              <tr
                key={app._id}
                className={`border-t ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition`}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(app._id)}
                    onChange={() => toggleSelect(app._id)}
                  />
                </td>
                <td className="p-3 font-medium text-gray-900">{app.role}</td>
                <td className="p-3">
                  {typeof app.company === "string"
                    ? app.company
                    : app.company?.name || "—"}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      app.status === "Processing"
                        ? "bg-blue-100 text-blue-800"
                        : app.status === "Awaiting"
                        ? "bg-yellow-100 text-yellow-800"
                        : app.status === "Rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  {/* Edit button */}
                  <button
                    onClick={() => navigate(`/applications/${app._id}/edit`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm shadow transition"
                  >
                    Edit
                  </button>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm shadow transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected.length > 0 && (
        <div className="mt-6 text-right">
          <button
            onClick={() => {
              if (
                window.confirm(
                  `Delete ${selected.length} selected application(s)?`
                )
              ) {
                Promise.all(
                  selected.map((id) =>
                    apiFetch(`/api/applications/${id}`, { method: "DELETE" })
                  )
                ).then(() => {
                  setApps(apps.filter((a) => !selected.includes(a._id)));
                  setSelected([]);
                });
              }
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow text-sm"
          >
            Delete Selected ({selected.length})
          </button>
        </div>
      )}
    </div>
  );
}