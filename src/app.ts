import express from "express";
import http from "http";
import { router as apiRoutes } from "./routes/api.router";
const app = express();
const port = 3000;
const server = http.createServer(app);
app.use("/", apiRoutes);

app.listen(port, () => {
  console.log(`Succesfully listening http://localhost:${port}`);
});
