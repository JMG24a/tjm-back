const express = require("express");
const cors = require("cors");
const { boomErrorHandler, errorHandler, ormErrorHandler } = require("./middleware/error.handler");
const appRouter = require("./router");

const app = express();

// CORS configurado
const optionsCors = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(optionsCors));
app.use(express.json());
appRouter(app);
require("./auth");
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ hello: "hi" });
});

// Exporta la app para que Vercel la maneje
module.exports = app;
