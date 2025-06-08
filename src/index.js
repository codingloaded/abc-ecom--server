import dotenv from "dotenv";
import { app } from "./app.js";

const port = process.env.PORT || 8001;

dotenv.config({
  path: "./.env",
});
