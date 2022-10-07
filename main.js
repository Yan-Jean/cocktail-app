"use strict";
const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: "./.env"})

// Les MiddleWares
app.use(express.static(path.resolve(__dirname,"public")));


// Les paramètres du moteur

app.set("view engine", "ejs");


//Les routes
app.get("/search", homeController.responseSearch);
app.get("/result", homeController.getCocktail);
app.get("/recipe", homeController.getCocktail);
app.get("/*", homeController.redirect);



const port = process.env.PORT;
app.listen(5000,() => {
    console.log(`Votre serveur tourne sur le http://localhost:${port}`);
});