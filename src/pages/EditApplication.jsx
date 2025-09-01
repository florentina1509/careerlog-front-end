import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiFetch } from "../utils/api";

export default function EditApplication() {
  const { id } = useParams(); // get app ID from URL
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Awaiting");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch existing application on mount
  useEffect(() => {
    async function loadApp() {
      try {
        const data = await apiFetch(`/api/applications/${id}`);
        setRole(data.role || "");
        setStatus(data.status || "Awaiting");
        setCompany(data.company?.name || "");
        setLocation(data.location || "");
        setSalary(data.salary || "");
        setNotes(data.notes || "");
      } catch (err) {
        setError("Failed to load application.");
      } finally {
        setLoading(false);
      }
    }
    loadApp();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      await apiFetch(`/api/applications/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          role,
          status,
          location,
          salary,
          notes,
          company, // editable now
        }),
      });
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to update application.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p>Loading application...</p>;

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4">Edit Application</h2>

      {error && (
        <p className="mb-3 p-2 bg-red-50 border border-red-300 text-red-700 rounded">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Role</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Awaiting</option>
            <option>Processing</option>
            <option>Next Stage</option>
            <option>Rejected</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Company</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Salary</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Notes</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
