import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class PlanetsService {
  async find(query = {}) {
    return await dbContext.Planets.find(query).populate('Stars')
  }
  async findById(id) {
    let Planet = await dbContext.Planets.findById(id).populate('Stars')
    if (!Planet) {
      throw new BadRequest("invalid id")
    }
    return Planet
  }

  async create(Planet) {
    return await dbContext.Planets.create(Planet)
  }
  async edit(update) {
    let updated = await dbContext.Planets.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Planets.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const PlanetService = new PlanetsService();