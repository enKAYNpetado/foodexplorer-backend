const { Router } = require("express")

const UsersController = require("../Controllers/UsersController.js")
const usersController = new UsersController()

const usersRoutes = Router()

usersRoutes.post("/", usersController.create)

module.exports = usersRoutes
