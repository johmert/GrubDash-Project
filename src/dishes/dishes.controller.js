const path = require("path");
// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));
// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: create
const create = (req, res, next) => {

};

// TODO: list
const list = (req, res) => {

};

// TODO: read
const read = (req, res) => {

};

// TODO: update
const update = (req, res, next) => {

};

module.exports = {
    create: [create],
    list,
    read : [read],
    update: [update],
};
