import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
  return "Hello world!";
});
