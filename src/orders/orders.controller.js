const path = require("path");
// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));
// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

// TODO: create
const create = (req, res, next) => {

};

// TODO: destroy
const destroy = (req, res, next) => {

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
    destroy: [destroy],
    list,
    read: [read],
    update: [update],
}
