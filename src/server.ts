import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: `Hello world: ${new Date()}` });
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
