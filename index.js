const app = require("express")();

app.get("/", (request, response) => {
  return response.json({ message: "Ops" });
});

app.listen(3333, () => {
  console.log("Servidor ouvindo");
});
