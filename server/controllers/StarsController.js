import { StarService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController {
  constructor() {
    super("api/stars")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await StarService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  // async getPlanetsfromStar(req, res, next) { //NOTE What is going on 
  //   try {
  //     let data = await StarService.find(req.query)
  //     res.send(data)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
  async getById(req, res, next) {
    try {
      let data = await StarService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await StarService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await StarService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await StarService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }




}