import express from "express";
import cors from "cors";
import messageRouter from "./routers/messageRouter.js";
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Server is up and running",
  });
});

app.use("/api/v1/message", messageRouter);

app.listen(8000, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
