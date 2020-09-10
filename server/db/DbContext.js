import mongoose from "mongoose";
import MoonSchema from "../models/Moons";
import PlanetsSchema from "../models/Planets";
import StarsSchema from "../models/Stars";
import GalaxySchema from "../models/Galaxy";

class DbContext {
  Moon = mongoose.model("Moon", MoonSchema);
  Planets = mongoose.model("Planets", PlanetsSchema);
  Stars = mongoose.model("Stars", StarsSchema);
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
}

export const dbContext = new DbContext();
