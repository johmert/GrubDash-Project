const path = require("path");
// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));
// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: create
// Create & helper functions 
const bodyHasDescription = (req, res, next) => {
    const { data: { description } = {} } = req.body;
    if(description) return next();
    next({
        status: 400,
        message: "Dish must include a description."
    });
};
const bodyHasName = (req, res, next) => {
    const { data: { name } = {} } = req.body;
    if(name) return next();
    next({
        status: 400,
        message: "Dish must include a name."
    });
};
const bodyHasPrice = (req, res, next) => {
    const { data: { price } = {} } = req.body;
    if(price) return next();
    next({
        status: 400,
        message: "Dish must include a price."
    });
};
const priceIsValid = (req, res, next) => {
    const { data: { price } = {} } = req.body;
    if(parseInt(price) > 0) return next();
    next({
        status: 400,
        message: "Dish must have a price that is an integer greater than 0."
    });
};
const bodyHasImageUrl = (req, res, next) => {
    const { data: { image_url } = {} } = req.body;
    if(image_url) return next();
    next({
        status: 400,
        message: "Dish must include a image_url."
    });
};

const create = (req, res, next) => {
    const { data: { name, description, price, image_url } = {} } = req.body;
    const newDish = {
        id: nextId(),
        name,
        description,
        price,
        image_url,
    };
    dishes.push(newDish);
    res.status(201).json({ data: newDish });
};

// List function
const list = (req, res) => {
    res.json({ data: dishes })
};

// TODO: read
const read = (req, res) => {

};

// TODO: update
const update = (req, res, next) => {

};

module.exports = {
    create: [
        bodyHasName, 
        bodyHasDescription, 
        bodyHasPrice, 
        priceIsValid, 
        bodyHasImageUrl, 
        create
    ],
    list,
    read : [read],
    update: [update],
};
