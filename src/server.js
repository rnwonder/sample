import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import partyRouter from "./routers/partRouter.js";
// const express = require("express")

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.use("/user", userRouter)
app.use("/party", partyRouter)


app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
