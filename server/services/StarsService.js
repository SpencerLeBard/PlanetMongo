import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class StarsService {
  async find(query = {}) {
    return await dbContext.Stars.find(query).populate('Galaxy')
  }
  async findById(id) {
    let Star = await dbContext.Stars.findById(id).populate('Galaxy')
    if (!Star) {
      throw new BadRequest("invalid id")
    }
    return Star
  }
  async create(Star) {
    return await dbContext.Stars.create(Star)
  }
  async edit(update) {
    let updated = await dbContext.Stars.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Stars.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const StarService = new StarsService();