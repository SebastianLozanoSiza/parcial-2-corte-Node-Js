import express from "express";

const app = express();

app.set("port", 5000);

app.use(express.json());

export default app;