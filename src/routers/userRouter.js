import express from "express"
import addUsers from "../controllers/addUsers.js"
import deleteUsers from "../controllers/deleteUsers.js"
import getUsers from "../controllers/getUsers.js"
import updateUsers from "../controllers/updateUser.js"

const Router = express.Router

const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.post('/', addUsers)

userRouter.patch('/id', updateUsers)

userRouter.delete('/:id', deleteUsers)

export default userRouter