import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class GalaxyService {
  async find(query = {}) {
    return await dbContext.Galaxy.find(query).populate('subject')
  }
  async findById(id) {
    let Galaxy = await dbContext.Galaxy.findById(id).populate('subject')
    if (!Galaxy) {
      throw new BadRequest("invalid id")
    }
    return Galaxy
  }
  async create(Galaxy) {
    return await dbContext.Galaxy.create(Galaxy)
  }
  async edit(update) {
    let updated = await dbContext.Galaxy.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Galaxy.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const GalaxiesService = new GalaxyService();