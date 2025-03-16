import express from "express";

import { DeletePseron, getAllPerson, register, UpdatePerson } from "../controller/personController.js";
const personRouter = express.Router();

personRouter.post("/register", register);
personRouter.get("/users", getAllPerson);
personRouter.put("/update/:id", UpdatePerson)
personRouter.delete("/delete/:id", DeletePseron)

export default personRouter;
