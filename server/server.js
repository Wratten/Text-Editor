const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

const distPath = path.join(__dirname, "..", "client", "dist");

app.use(express.static(distPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/manifest.json", (req, res) => {
//   console.log(distPath);
//   res.sendFile(distPath + "/manifest.json");
// });

require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
