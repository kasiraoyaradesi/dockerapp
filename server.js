import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.listen(7070);
app.get("/", async (req, res) => {
  const result = { msg: "Hello" };
  res.status(200).json(result);
});
