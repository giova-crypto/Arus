import mongoose from "mongoose";

export const ROLES = ["cliente", "admin", "propietario"];

const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Role", roleSchema);