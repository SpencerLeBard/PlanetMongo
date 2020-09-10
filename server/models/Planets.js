import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Planets = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    stars: { type: ObjectId, ref: "stars", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planets;