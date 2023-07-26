//Grabed Routes and imports express
const express = require("express");
const apiRoutes = require("./db/apiRoutes");
const htmlRoutes = require("./db/htmlRoutes");

//initializes the app and creates a port
const app = express();
const PORT = process.env.PORT || 3000;

//sets up the express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//starts the server on the port
app.listen(PORT, () => console.log(`The Emperor calls us to serve: ${PORT}`));

