import Application from "../models/Application.js";
import Company from "../models/Company.js";

// ---- Single delete ----
export async function deleteApplication(req, res) {
  try {
    const app = await Application.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!app) return res.status(404).json({ error: "Application not found" });
    res.json({ message: "Application deleted", id: app._id });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}

// ---- Bulk delete ----
export async function bulkDeleteApplications(req, res) {
  try {
    const ids = req.query.ids?.split(",") || [];
    if (!ids.length) return res.status(400).json({ error: "No IDs provided" });

    const result = await Application.deleteMany({
      _id: { $in: ids },
      createdBy: req.user._id,
    });

    res.json({
      message: `Deleted ${result.deletedCount} applications`,
      ids,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
