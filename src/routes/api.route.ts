import { Router } from "express";
import ApiController from "../controller/api.controller";
const apiController = new ApiController();
const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Node-Express-Api");
});
router.get("/api/endpoint", apiController.getNamesValueToArray);
export { router };
