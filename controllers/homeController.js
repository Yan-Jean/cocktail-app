"use strict";
const axios = require("axios");
const homeController = require("./homeController");

exports.responseSearch = (request, response) => {
    response.render("search");
};

// exports.getRecipe = (request, response) => {
//     let recipe = request.query.picture;
//     console.log(`URL: ${request.url}`);
    
//     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recipe}`)
//     .then(result => {
//         response.render("recipe", {myQuery: result.data.drinks});
//     })
//     .catch(error => response.send("API not available at the moment"));
// };

exports.redirect = (request, response) => {
    response.redirect("/search");
};

exports.getCocktail = (request, response) => {
    let input = request.query.cocktail;
    console.log(input);
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
    .then(result => {
        if (request.url === `/result?cocktail=${input}`) {
            response.render("result", {myQuery: result.data.drinks});
        }
        else {
            response.render("recipe", {myQuery: result.data.drinks});
        }
        console.log(request.url);
    })
    .catch(error => response.send("API not available at the moment"));
};

// exports.test = (request, response) => {
//     console.log(request.query);
// };