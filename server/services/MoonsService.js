import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class MoonService {
  async find(query = {}) {
    return await dbContext.Moon.find(query).populate('Planets')
  }
  async findById(id) {
    let Moon = await dbContext.Moon.findById(id).populate('Planets')
    if (!Moon) {
      throw new BadRequest("invalid id")
    }
    return Moon
  }
  async create(Moon) {
    return await dbContext.Moon.create(Moon)
  }
  async edit(update) {
    let updated = await dbContext.Moon.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Moon.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const MoonsService = new MoonService();