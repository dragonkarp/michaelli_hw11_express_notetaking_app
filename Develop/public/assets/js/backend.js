const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


////////// Page routes.
// Load main page.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

// Load notes page.
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./notes.html"))
})

////////// APIs.
// Read db.json and returns all saved notes as a JSON.
// app.get("api/notes", (req, res) => {
//     return
// })


// Server is active. Listening on PORT.
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})