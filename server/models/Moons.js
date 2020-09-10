import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Moons = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    planets: { type: ObjectId, ref: "planets", required: true }
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moons;