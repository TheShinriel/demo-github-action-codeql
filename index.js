const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Bienvenue sur mon application Express!")
})

app.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000")
})

app.get("/echo", (req, res) => {
  // Ceci est vulnérable aux attaques par injection XSS
  res.send(`Votre input: ${req.query.input}`)
})
