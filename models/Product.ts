import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export default models.Product || model("Product", ProductSchema);
