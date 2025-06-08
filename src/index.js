import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

const port = process.env.PORT || 8001;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on ${port} 👌👌👌`);
    });
  })
  .catch((err) => {
    console.log(err);
  });