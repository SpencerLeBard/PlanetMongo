import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Stars = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    galaxy: { type: ObjectId, ref: "galaxy", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Stars;