import express from "express"
import getParty from "../controllers/getParty.js"

const Router = express.Router

const partyRouter = Router()

partyRouter.get('/ss', getParty)


export default partyRouter